/*
    Companies: name, city, website, careers?, servicesOrProduct
    Local Jobs: title, company, location, salary?, listing link/contact email
*/

export default function DataCard({ children }) {
  return (
    <div className="shadow-black shadow-md rounded overflow-hidden border border-white m-4 max-w-screen-sm">
      <div className="flex flex-col h-full p-4 leading-8 text-left">
        {children}
      </div>
    </div>
  );
}
