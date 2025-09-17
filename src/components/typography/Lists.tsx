import React from 'react';

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

interface LiProps {
  children: React.ReactNode;
  className?: string;
}

export function Ol({ children, className = '' }: ListProps) {
  return <ol className={`k-ol mt-3 mb-6 text-body-sm lg:text-body-lg ${className}`}>{children}</ol>;
}

export function Li({ children, className = '' }: LiProps) {
  return <li className={`text-body-sm lg:text-body-lg ${className}`}>{children}</li>;
}

export function SubOl({ children, className = '' }: ListProps) {
  return <ol className={`k-subol ml-6 text-body-sm lg:text-body-lg ${className}`}>{children}</ol>;
}

export function SubLi({ children, className = '' }: LiProps) {
  return <li className={`text-body-sm lg:text-body-lg ${className}`}>{children}</li>;
}

export function Ul({ children, className = '' }: ListProps) {
  return <ul className={`my-3 pl-4 list-disc list-outside ${className}`}>{children}</ul>;
}

export function SubCircledOl({ children, className = '' }: ListProps) {
  return <ol className={`k-circleol py-0 ml-6 text-body-sm lg:text-body-lg ${className}`}>{children}</ol>;
}

export function SubCircledLi({ children, className = '' }: LiProps) {
  return <li className={`k-subcircled-li text-body-sm lg:text-body-lg ${className}`}>{children}</li>;
}
