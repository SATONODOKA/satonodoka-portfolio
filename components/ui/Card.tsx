import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "dense" | "loose";
}

export default function Card({ children, className = "", href, variant = "dense" }: CardProps) {
  // Cardは「箱」ではなく「余白と幅のユニット」
  // border削除、hover削除、背景透明、角丸基本なし
  const padding = variant === "dense" ? "p-5 md:p-6" : "p-8 md:p-10";
  const baseStyles = `rounded-none bg-transparent ${padding}`;

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
