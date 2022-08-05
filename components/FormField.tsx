export default function FormField({ name, label, type = "text" }) {
  return (
    <div className="w-full my-2 leading-4">
      <label className="w-full block text-left" htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        className="bg-gray-600 p-1 w-full mb-2 rounded-md
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
        id={name}
        name={name}
        type={type}
        required
      />
    </div>
  );
}
