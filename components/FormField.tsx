interface FormProps {
  name: string;
  label: string;
  textarea?: boolean;
  type?: string;
}

export default function FormField({
  name,
  label,
  textarea,
  type = "text",
}: FormProps) {
  return textarea ? (
    <div className="w-full my-2 leading-4">
      <label className="w-full block text-left" htmlFor={name}>
        {label}
      </label>
      <br />
      <textarea
        className="bg-gray-600 p-1 w-full mb-2 rounded-md
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
        id={name}
        name={name}
        required
      />
    </div>
  ) : (
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
