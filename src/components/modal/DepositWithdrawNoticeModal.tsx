'use client';

import { useModal } from '@/contexts/ModalContext';
import { ModalNoticeItem, ModalNoticeList } from './ModalNoticeItem';
import { ModalNoticeTable, ModalNoticeTableRow } from './ModalNoticeTable';

export const DepositWithdrawNoticeModal = () => {
  const { closeModal } = useModal();

  return (
    <>
      <div className="px-12 pt-14 pb-4">
        <h2 className="text-headline-md font-bold">가상자산 입출금시 유의사항</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-12 pt-6 pb-12">
        <ModalNoticeList>
          <ModalNoticeItem>
            가상자산은 <strong>오입금 시 영구히 복구가 불가능할 수 있는 리스크가 존재</strong>합니다.
          </ModalNoticeItem>
          <ModalNoticeItem>
            기술적으로 복구 가능한 케이스라도 <strong>복구 비용 및 보안상의 이슈로 복구가 불가능한 경우</strong>가
            빈번히 발생합니다.
          </ModalNoticeItem>
          <ModalNoticeItem>
            가상자산 <strong>특성상 출금신청이 완료되면 취소할 수 없습니다.</strong> 출금 전 주소와 수량을 꼭 확인해
            주세요.
          </ModalNoticeItem>
          <ModalNoticeItem>
            당사 수탁을 위한 입금 시, <strong>당사에서 발행해 드린 고객용 입금주소를 확인하고, 정확하게 입력</strong>
            해주시기 바랍니다.
            <br />
            즉, 주소 체계 및 체인(네트워크)종류를 필수적으로 확인 후 입금해 주시기 바랍니다.
          </ModalNoticeItem>
        </ModalNoticeList>
        <ModalNoticeTable>
          <ModalNoticeTableRow label="지원 네트워크">
            비트코인, 이더리움, 솔라나, 폴리곤, 바이낸스 스마트 체인, 아비트럼 원, 베이스, 카이아, 엑스플라, 오버,
            스토리, 코어, 비즈오토 등
          </ModalNoticeTableRow>
        </ModalNoticeTable>
        <ModalNoticeList>
          <ModalNoticeItem>
            고액 가상자산 <strong>입출금시 최소 수량(ex. 0.001BTC, 0.001ETH 등) 사전 입출금을 통해 검증 후,</strong>{' '}
            입출금 처리를 권장합니다.
          </ModalNoticeItem>
        </ModalNoticeList>
        <ModalNoticeTable>
          <ModalNoticeTableRow label="입금 시">
            입금주소, 메인넷 확인 → 최소수량 입금 → 입금 확인(고객사 대시보드, 당사 문의) → 잔액 입금 진행
          </ModalNoticeTableRow>

          <ModalNoticeTableRow label="출금 시">
            고객사 출금주소 등록 → 당사에서 정당주소 여부 체크 → 최소 수량 출금 → 출금확인(고객 확인, 당사 문의) → 잔액
            출금 진행
          </ModalNoticeTableRow>
        </ModalNoticeTable>
        <ModalNoticeList>
          <ModalNoticeItem>
            <strong>블록체인 주소 형식이 동일</strong>해도 출금하는 가상자산의 블록체인 네트워크와 입금 받은 가상자산
            주소의 <strong>블록체인 네트워크가 다른 경우 오입금이 발생</strong>합니다.(ex, 이더리움 기반의 USDT 및
            솔라나 기반의 USDT)
          </ModalNoticeItem>
          <ModalNoticeItem>
            출금 신청 완료 이후의 송금 과정은{' '}
            <strong>블록체인 네트워크에서 처리되며 네트워크 상태에 따라 출금시간이 지연</strong>될 수 있습니다.
          </ModalNoticeItem>
          <ModalNoticeItem>
            <strong>부정거래가 의심될 경우 출금이 제한</strong>될 수 있습니다.
          </ModalNoticeItem>
          <ModalNoticeItem>
            고객확인 <strong>미등록 계정은 가상자산 출금이 불가</strong>합니다.
          </ModalNoticeItem>
          <ModalNoticeItem>
            <strong>오입금 우려되시는 경우 등, 가상자산 입출금 관련 궁금한 사항은 당사에 문의</strong>를 하신 후에
            입출금을 진행하여 주시기 바랍니다.
          </ModalNoticeItem>
        </ModalNoticeList>
      </div>

      <footer className="border-t border-gray-50 px-4 py-5 lg:px-12 lg:py-6">
        <div className="flex items-center justify-between">
          <address className="flex flex-row text-body-sm lg:text-body-md not-italic">
            <span className="font-bold text-[var(--color-gray-900)] mr-3 lg:mr-4">문의</span>
            <div>
              가상자산 입출금 담당자
              <br className="block lg:hidden" />
              <a href="tel:02-561-4762" className="hover:underline">
                (02-561-4762)
              </a>
            </div>
          </address>
          <button
            onClick={closeModal}
            className="max-w-[80px] lg:max-w-[120px] w-full px-[22px] py-3.5 border rounded-[4px] border-[var(--color-primary-700)] text-label-lg font-semibold text-[var(--color-primary-800)] hover:bg-[var(--color-primary-50)] transition-colors"
          >
            확인
          </button>
        </div>
      </footer>
    </>
  );
};
