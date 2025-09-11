interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function P({ children, className = '' }: TextProps) {
  return <p className={`text-body-sm lg:text-body-lg my-6 ${className}`}>{children}</p>;
}
