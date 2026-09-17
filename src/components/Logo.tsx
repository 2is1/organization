export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div
      className={`${className} relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-600 shadow-lg shadow-cyan-500/20`}
    >
      <span className="text-[0.7em] font-black tracking-tighter text-slate-950">2≡1</span>
    </div>
  );
}
