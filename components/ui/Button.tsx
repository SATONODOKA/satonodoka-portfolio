import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyles = "inline-block font-semibold transition-all rounded-xl";
  
  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent/90",
    secondary: "border border-accent text-accent hover:bg-accent/10 hover:border-accent/80",
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
    // 外部リンク（http:// または https:// で始まる）の場合は通常のaタグを使用
    if (href.startsWith("http://") || href.startsWith("https://")) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
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
