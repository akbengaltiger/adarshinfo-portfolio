interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 shadow-xl hover:border-cyan-400 transition duration-300">
      {children}
    </div>
  );
}