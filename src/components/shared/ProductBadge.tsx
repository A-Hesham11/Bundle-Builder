export function ProductBadge({ children }: { children: string }) {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-[11px] font-black leading-none text-white">
      {children}
    </span>
  );
}
