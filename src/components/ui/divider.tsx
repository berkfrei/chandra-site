interface DividerProps {
  center?: boolean;
  wide?: boolean;
  className?: string;
}

export default function Divider({ center, wide, className = "" }: DividerProps) {
  return (
    <hr
      className={`border-0 ${
        wide ? "w-full bg-cream-dark" : "w-[60px] bg-sand"
      } h-px ${center ? "mx-auto" : ""} ${className}`.trim()}
    />
  );
}
