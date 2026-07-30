import Image from 'next/image';

interface ChildrenProps {
  children: React.ReactNode;
}

interface CodeBlockProps extends ChildrenProps {
  language?: string;
}

// 노션 code 블록 대응. 신택스 하이라이팅 없음(의존성 0 원칙) — 면과 테두리로만 구분한다.
export function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className="my-6 border border-gray-50 rounded-[4px] overflow-hidden">
      {language && (
        <div className="px-4 py-2 border-b border-gray-50 text-caption-lg text-gray-500 font-medium">{language}</div>
      )}
      <pre className="bg-gray-5020 p-4 overflow-x-auto">
        <code className="font-mono text-body-sm text-gray-700 whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}

// 노션 인라인 코드 대응.
export function InlineCode({ children }: ChildrenProps) {
  return (
    <code className="bg-gray-5020 text-primary-800 font-mono text-body-sm rounded-[4px] px-1.5 py-0.5">{children}</code>
  );
}

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

// 노션 image 블록 대응.
export function Figure({ src, alt, caption, width, height }: FigureProps) {
  return (
    <figure className="my-8">
      <Image src={src} alt={alt} width={width} height={height} className="mx-auto rounded-[4px]" />
      {caption && <figcaption className="mt-3 text-caption-lg text-gray-500 text-center">{caption}</figcaption>}
    </figure>
  );
}

// 노션 quote 블록 대응.
export function Blockquote({ children }: ChildrenProps) {
  return (
    <blockquote className="my-6 border-l-2 border-primary-700 pl-5 text-body-sm lg:text-body-lg text-gray-700">
      {children}
    </blockquote>
  );
}

// 노션 callout 블록 대응.
export function Callout({ children }: ChildrenProps) {
  return (
    <aside className="my-6 bg-primary-50 rounded-[4px] p-5 text-body-sm lg:text-body-lg text-gray-700">{children}</aside>
  );
}
