interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium bg-gray-900 text-white border border-gray-900 rounded ${className}`}>
      {children}
    </span>
  );
}
