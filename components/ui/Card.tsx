import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = "", href }: CardProps) {
  const baseStyles = "bg-white rounded-xl shadow-lg border border-gray-300 p-6 transition-all hover:shadow-xl hover:border-gray-400";

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
