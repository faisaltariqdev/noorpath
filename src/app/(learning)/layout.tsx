export const dynamic = "error";

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        overflowY: "auto",
        background: "#f0f4f2",
      }}
    >
      {children}
    </div>
  );
}
