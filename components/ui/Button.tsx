import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-block font-medium transition-colors rounded-lg";
  
  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent/90",
    secondary: "border-2 border-accent text-accent hover:bg-accent/5",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    // アンカーリンク（#で始まる）の場合は通常のaタグを使用
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    // 通常のページ遷移はNext.jsのLinkを使用
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
