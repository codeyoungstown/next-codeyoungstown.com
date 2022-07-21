/*
    Companies: name, city, website, careers?, servicesOrProduct
    Local Jobs: title, company, location, salary?, listing link/contact email
*/

export default function DataCard({ children }) {
  return (
    <div className="rounded overflow-hidden shadow-lg border border-white m-4">
      <div className="flex flex-col h-full p-2">{children}</div>
    </div>
  );
}
