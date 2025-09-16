interface NoticeProps {
  children: React.ReactNode;
}

export const ModalNoticeList = ({ children }: NoticeProps) => {
  return <ul className="pt-[10px] space-y-2.5">{children}</ul>;
};

export const ModalNoticeItem = ({ children }: NoticeProps) => {
  return (
    <li className="text-body-sm lg:text-body-md list-disc list-outside ml-5 pb-3 border-b border-gray-50 last:border-b-0">
      {children}
    </li>
  );
};
