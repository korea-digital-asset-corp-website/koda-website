interface HeadingProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function H1({ children, id, className = '' }: HeadingProps) {
  return (
    <h1 id={id} className={`text-headline-lg font-bold ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, id, className = '' }: HeadingProps) {
  return (
    <h2 id={id} className={`text-headline-xs lg:text-headline-sm font-bold my-6 ${className}`}>
      {children}
    </h2>
  );
}

export function H3({ children, id, className = '' }: HeadingProps) {
  return (
    <h3 id={id} className={`text-title-md lg:text-headline-xs font-bold ${className}`}>
      {children}
    </h3>
  );
}
