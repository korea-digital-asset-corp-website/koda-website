interface NoticeDetailTableRowProps {
  label: string;
  children: React.ReactNode;
}

export const NoticeDetailTableRow = ({ label, children }: NoticeDetailTableRowProps) => {
  return (
    <tr className="border-b border-t border-gray-50">
      <td className="text-center bg-primary-50 py-2 text-body-sm lg:text-body-md font-bold text-gray-900 align-middle min-w-[120px]">
        {label}
      </td>
      <td className="pl-3 py-2 text-body-sm lg:text-body-md text-gray-900 align-top">{children}</td>
    </tr>
  );
};

interface NoticeDetailTableProps {
  children: React.ReactNode;
}

export const NoticeDetailTable = ({ children }: NoticeDetailTableProps) => {
  return (
    <table className="w-full ml-0 lg:ml-4">
      <tbody>{children}</tbody>
    </table>
  );
};
