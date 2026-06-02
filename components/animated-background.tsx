const particles = [
  { left: "8%", size: 10, delay: "0s", duration: "16s" },
  { left: "20%", size: 6, delay: "3s", duration: "13s" },
  { left: "33%", size: 14, delay: "6s", duration: "19s" },
  { left: "47%", size: 8, delay: "1.5s", duration: "15s" },
  { left: "61%", size: 11, delay: "4.5s", duration: "18s" },
  { left: "74%", size: 7, delay: "2s", duration: "14s" },
  { left: "86%", size: 13, delay: "5.5s", duration: "20s" },
  { left: "94%", size: 9, delay: "0.8s", duration: "12s" },
];

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Aurora gradient wash */}
      <div
        className="absolute inset-0 opacity-60 animate-aurora"
        style={{
          background:
            "linear-gradient(120deg, #fdf4fa 0%, #fbe4f3 25%, #fff4d6 50%, #fbe4f3 75%, #fdf4fa 100%)",
          backgroundSize: "300% 300%",
        }}
      />

      {/* Floating color orbs */}
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-drift" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-gold/25 blur-3xl animate-drift-rev" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
      <div className="absolute top-2/3 left-1/2 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-drift" />

      {/* Rising particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-gradient-to-br from-accent to-gold animate-rise"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
