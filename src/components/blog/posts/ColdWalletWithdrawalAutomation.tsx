import { H2, Li, Ol, P } from '@/components/typography';
import { CodeBlock, InlineCode } from '@/components/blog/PostElements';

const ColdWalletWithdrawalAutomation = () => {
  return (
    <>
      <P>
        콜드월렛 출금은 수탁 서비스에서 가장 민감한 작업입니다. 자산이 실제로 움직이는 유일한 순간이면서, 규제와
        내부통제가 가장 촘촘하게 걸려 있는 지점이기 때문입니다. 문제는 이 민감함이 그대로 속도의 병목이 된다는
        것입니다. 이 글은 승인 과정을 자동화하면서도 사람의 통제를 어디에 남겼는지에 대한 기록입니다.
      </P>

      <H2>수동 승인의 병목</H2>
      <P>
        초기의 출금 절차는 화면과 문서와 사람 사이를 오갔습니다. 요청 내용을 담당자가 대조하고, 결재 문서를 만들고,
        승인권자가 서명하고, 다시 운영자가 장비 앞에서 서명 절차를 밟는 식입니다. 각 단계는 그 자체로 타당했지만,
        단계 사이의 전달이 전부 수작업이라 대기 시간이 쌓였고 — 더 위험하게는 — 전달 과정에서의 실수 가능성이
        상존했습니다.
      </P>
      <P>
        자동화의 목표를 &ldquo;사람을 없애는 것&rdquo;이 아니라 &ldquo;사람이 판단만 하게 만드는 것&rdquo;으로
        정의했습니다. 대조·기록·전달은 기계가 하고, 사람은 승인 여부만 결정합니다.
      </P>

      <H2>파이프라인 설계</H2>
      <P>
        출금 요청은 생성부터 브로드캐스트까지 하나의 상태 머신을 통과합니다. 상태는 명시적으로 타입에 박아, 코드
        어디에서도 &ldquo;지금 이 요청이 어느 단계인가&rdquo;를 모호하지 않게 했습니다.
      </P>
      <CodeBlock language="typescript">
        {`type WithdrawalState =
  | { status: 'requested'; requestedBy: string; requestedAt: Date }
  | { status: 'policy_checked'; passedRules: string[] }
  | { status: 'pending_approval'; approvers: string[]; approved: string[] }
  | { status: 'approved'; approvedAt: Date }
  | { status: 'signing'; sessionId: string }
  | { status: 'broadcast'; txHash: string }
  | { status: 'rejected'; reason: string; rejectedBy: string };

// 상태 전이는 이 함수 하나로만 일어난다 — 우회 경로를 타입이 막는다.
function transition(current: WithdrawalState, event: WithdrawalEvent): WithdrawalState {
  // 허용되지 않는 (상태, 이벤트) 조합은 컴파일 단계에서 걸러진다
  ...
}`}
      </CodeBlock>
      <P>승인 흐름은 다섯 단계로 고정되어 있습니다.</P>
      <Ol>
        <Li>
          요청 접수 — 요청 즉시 <InlineCode>requested</InlineCode> 상태로 기록되고 변경 불가능한 감사 로그가
          시작됩니다.
        </Li>
        <Li>
          정책 검증 — 한도·화이트리스트·이상 패턴을 기계가 대조해 <InlineCode>policy_checked</InlineCode>로
          전이합니다. 하나라도 걸리면 사람에게 가기 전에 반려됩니다.
        </Li>
        <Li>
          다중 승인 — 결재선의 승인권자들이 각자 검토합니다. 정족수를 채우면 <InlineCode>approved</InlineCode>,
          한 명이라도 반려하면 즉시 <InlineCode>rejected</InlineCode>입니다.
        </Li>
        <Li>서명 — 승인된 요청만 서명 세션을 열 수 있습니다. 세션은 요청과 1:1로 묶여 재사용이 불가능합니다.</Li>
        <Li>브로드캐스트 — 서명 완료 즉시 전파하고 트랜잭션 해시를 감사 로그에 봉인합니다.</Li>
      </Ol>

      <H2>장애 시나리오와 롤백</H2>
      <P>
        자동화된 파이프라인의 진짜 시험대는 정상 흐름이 아니라 장애입니다. 설계 원칙은 하나였습니다 — 어떤 단계에서
        멈추더라도 자산이 움직이지 않은 상태로 멈춘다. 서명 직전까지의 모든 상태는 부작용 없이 폐기·재시작할 수 있고,
        서명 이후는 롤백 대신 온체인 사실을 감사 로그에 그대로 기록하는 쪽을 택했습니다. 되돌릴 수 없는 것을 되돌리는
        척하는 코드가 가장 위험하기 때문입니다.
      </P>
      <P>
        운영 결과, 요청부터 브로드캐스트까지의 소요 시간은 크게 줄었지만 더 중요한 변화는 따로 있었습니다. 모든 반려에
        기계가 남긴 명시적 사유가 붙으면서, 내부통제 보고가 &ldquo;재구성&rdquo;에서 &ldquo;조회&rdquo;로
        바뀌었습니다.
      </P>
    </>
  );
};

export default ColdWalletWithdrawalAutomation;
