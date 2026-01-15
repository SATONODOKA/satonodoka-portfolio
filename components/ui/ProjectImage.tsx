interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className = '' }: ProjectImageProps) {
  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
    />
  );
}
