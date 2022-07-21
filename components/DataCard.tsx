/*
    Companies: name, city, website, careers?, servicesOrProduct
    Local Jobs: title, company, location, salary?, listing link/contact email
*/

/*
    type="company"? name, website, city, careers?, services/product
    or
    type="job"? title, company, location, salary?, link
*/

export default function DataCard({ children }) {
  return (
    <div className="rounded overflow-hidden shadow-lg border border-white m-4">
      <div className="px-2 py-2">{children}</div>
    </div>
  );
  //C:name J:title
  //C:website J:company
  //C:city J:location
  //C:careers? J:salary?
  //C:services/product J:link
}
