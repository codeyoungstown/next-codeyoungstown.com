export default function DataCard({ title, children }) {
  return (
    <section>
      <h3 className="text-3xl mb-3">{title}</h3>
      {children}
    </section>
  );
}
