export default function FormField({ name, label, type = "text" }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className="bg-CYgray
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
