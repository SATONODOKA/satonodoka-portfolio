import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = "", href }: CardProps) {
  const baseStyles = "rounded-lg border border-gray-400 p-6 transition-colors hover:border-gray-500";

  if (href) {
    return (
      <a href={href} className={`${baseStyles} block ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}
