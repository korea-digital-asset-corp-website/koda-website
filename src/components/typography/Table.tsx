interface TableComponentProps {
  children: React.ReactNode;
  className?: string;
  tableClassName?: string;
}

interface TableCellProps extends Omit<TableComponentProps, 'tableClassName'> {
  rowSpan?: number;
  colSpan?: number;
}

export function TableContainer({ children, className = '', tableClassName = '' }: TableComponentProps) {
  return (
    <div className={`overflow-x-auto mb-6 ${className}`}>
      <table
        className={`w-full max-lg:min-w-[800px] border border-gray-200 rounded-lg border-collapse ${tableClassName}`}
      >
        {children}
      </table>
    </div>
  );
}

export function Thead({ children, className = '' }: TableComponentProps) {
  return <thead className={`bg-[var(--color-gray-5020)] ${className}`}>{children}</thead>;
}

export function Tbody({ children, className = '' }: TableComponentProps) {
  return <tbody className={`bg-white ${className}`}>{children}</tbody>;
}

export function Tr({ children, className = '' }: TableComponentProps) {
  return <tr className={`border-b border-gray-50 ${className}`}>{children}</tr>;
}

export function Th({ children, className = '', rowSpan, colSpan }: TableCellProps) {
  return (
    <th
      className={`px-4 py-3 text-center text-body-sm lg:text-body-lg font-bold text-[var(--color-gray-700)] border border-gray-50 ${className}`}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {children}
    </th>
  );
}

export function Td({ children, className = '', rowSpan, colSpan }: TableCellProps) {
  return (
    <td
      className={`p-2 text-body-sm lg:text-body-md text-[var(--color-gray-700)] border border-gray-50 ${className}`}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {children}
    </td>
  );
}
