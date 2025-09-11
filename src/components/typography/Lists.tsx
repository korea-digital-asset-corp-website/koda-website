interface ListProps {
  children: React.ReactNode;
  className?: string;
}

interface LiProps {
  children: React.ReactNode;
  className?: string;
}

export function Ol({ children, className = '' }: ListProps) {
  return <ol className={`text-body-sm lg:text-body-lg my-6 list-decimal list-inside pl-4 ${className}`}>{children}</ol>;
}

export function Ul({ children, className = '' }: ListProps) {
  return <ul className={`text-body-sm lg:text-body-lg my-3 list-disc list-inside pl-4 ${className}`}>{children}</ul>;
}

export function Li({ children, className = '' }: LiProps) {
  return <li className={`text-body-sm lg:text-body-lg ${className}`}>{children}</li>;
}
