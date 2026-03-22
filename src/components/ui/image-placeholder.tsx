interface ImagePlaceholderProps {
  aspectRatio: string;
  description?: string;
  className?: string;
}

export default function ImagePlaceholder({
  aspectRatio,
  description,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-cream-dark ${className}`}
      style={{ aspectRatio }}
    >
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-sand/30 to-terracotta-light/20" />

      {description && (
        <span className="absolute bottom-4 left-4 font-serif italic text-sm text-brown-mid/70">
          {description}
        </span>
      )}
    </div>
  );
}
