import BackToListButton from '@/components/notice/BackToListButton';

interface NoticeDetailPageProps {
  params: Promise<{ id: string }>;
}

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
}

const notices: Notice[] = [
  {
    id: 1,
    title: '가상자산 입출금시 유의사항',
    date: '2025.04.18',
    content: `
  가상자산 입출금 시 다음 사항들을 반드시 확인해 주시기 바랍니다.
  
  1. 네트워크 확인
  - 입출금하려는 가상자산의 네트워크를 정확히 확인해 주세요
  - 잘못된 네트워크로 전송할 경우 자산 손실이 발생할 수 있습니다
  
  2. 주소 확인  
  - 지갑 주소를 정확히 입력했는지 반드시 확인해 주세요
  - 복사/붙여넣기를 권장하며, 주소의 앞뒤 몇 자리를 다시 한번 확인해 주세요
  
  3. 최소 입금액
  - 각 가상자산별로 최소 입금액이 설정되어 있습니다
  - 최소 입금액 미만으로 입금할 경우 입금이 반영되지 않을 수 있습니다
  
  4. 출금 수수료
  - 출금 시 네트워크 수수료가 차감됩니다
  - 수수료는 네트워크 상황에 따라 변동될 수 있습니다
  
  문의사항이 있으시면 고객센터로 연락해 주시기 바랍니다.
      `.trim(),
  },
];

const NoticeDetailPage = async ({ params }: NoticeDetailPageProps) => {
  // todo mdx , components 방식 구조 고민 필요
  // const { id } = await params;
  // const noticeId = parseInt(id);

  // const notice = notices.find((notice) => notice.id === noticeId);

  return (
    <div className="max-w-[1440px] w-full mt-32 px-5 lg:px-[200px] mx-auto">
      <header className="mb-12 pb-6 border-b border-[color:var(--color-gray-100)]">
        <h1 className="text-[24px] lg:text-[32px] font-bold text-gray-900 mb-4">{notices[0].title}</h1>
        <p className="text-body-md text-[color:var(--color-gray-500)]">{notices[0].date}</p>
      </header>

      <main className="mb-16">
        <div className="text-body-lg text-gray-900 leading-relaxed whitespace-pre-line">{notices[0].content}</div>
      </main>
      <BackToListButton />
    </div>
  );
};

export default NoticeDetailPage;
