export default function FormField({ name, label, type = "text" }) {
  return (
    <div className="grid grid-cols-2 my-2">
      <label className="text-right mr-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-gray-600 p-0 mr-5
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
