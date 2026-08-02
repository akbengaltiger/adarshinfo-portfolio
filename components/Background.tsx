export default function Background() {
  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 -z-50 bg-slate-950"></div>

      {/* Top Left Glow */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-sky-500/20 blur-[140px] rounded-full -z-40"></div>

      {/* Bottom Right Glow */}
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-700/20 blur-[140px] rounded-full -z-40"></div>

      {/* Grid */}
      <div
        className="fixed inset-0 -z-30 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}