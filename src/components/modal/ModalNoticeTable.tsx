interface ModalNoticeTableRowProps {
  label: string;
  children: React.ReactNode;
}

export const ModalNoticeTableRow = ({ label, children }: ModalNoticeTableRowProps) => {
  return (
    <tr className="border-b border-t border-gray-50">
      <td className="text-center bg-primary-50 py-2 text-body-sm lg:text-body-md font-bold text-gray-900 align-middle min-w-[120px]">
        {label}
      </td>
      <td className="pl-3 py-2 text-body-sm lg:text-body-md text-gray-900 align-top">{children}</td>
    </tr>
  );
};

interface ModalNoticeTableProps {
  children: React.ReactNode;
}

export const ModalNoticeTable = ({ children }: ModalNoticeTableProps) => {
  return (
    <table className="w-full">
      <tbody>{children}</tbody>
    </table>
  );
};
