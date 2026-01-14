interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full ${className}`}>
      {children}
    </span>
  );
}
