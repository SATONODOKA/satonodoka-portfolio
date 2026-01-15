interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "text" | "outline";
}

export default function Tag({ children, className = "", variant = "text" }: TagProps) {
  // TagはTertiary（弱い）に固定
  // 背景は持たせない、または極薄
  const baseStyles = "text-sm text-slate-600";
  
  if (variant === "outline") {
    return (
      <span className={`inline-block px-2 py-1 ${baseStyles} border border-slate-300 rounded-md ${className}`}>
        {children}
      </span>
    );
  }
  
  // text variant（デフォルト）
  return (
    <span className={`inline-block ${baseStyles} ${className}`}>
      {children}
    </span>
  );
}
