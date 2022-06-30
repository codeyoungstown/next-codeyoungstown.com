export default function DataCard({ title, children, className }) {
  return (
    <section className={classNames("mb-5", className)}>
      <h3 className="text-3xl mb-3">{title}</h3>
      {children}
    </section>
  );
}
