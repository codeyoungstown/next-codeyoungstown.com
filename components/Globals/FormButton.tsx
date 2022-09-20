export default function FormButton({ formLink, children }) {
  return (
    <a
      className="px-6 py-2 bg-gray-600 text-white text-sm uppercase rounded hover:bg-gray-700 hover:shadow-lg"
      href={formLink}
    >
      {children}
    </a>
  );
}
