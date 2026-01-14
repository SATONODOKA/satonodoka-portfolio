import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = "", href }: CardProps) {
  const baseStyles = "bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-shadow hover:shadow-md";

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
