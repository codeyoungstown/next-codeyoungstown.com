interface FormProps {
  name: string;
  label: string;
  textarea?: boolean;
  type?: string;
  required?;
}

export default function FormField({
  name,
  label,
  textarea,
  type,
  required,
}: FormProps) {
  return textarea ? (
    <TextArea name={name} label={label} required={required} />
  ) : (
    <TextField name={name} label={label} type={type} required={required} />
  );
}

const TextArea = ({ name, label, required }) => {
  return (
    <div className="w-full my-2 leading-4">
      <label className="w-full block text-left my-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="bg-gray-600 p-1 w-full mb-2 rounded-md
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
        id={name}
        name={name}
        required={required}
      />
    </div>
  );
};

const TextField = ({ name, label, type, required }) => {
  return (
    <div className="w-full my-2 leading-4">
      <label className="w-full block text-left my-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-gray-600 p-1 w-full mb-2 rounded-md
                    border-0 border-b-2 border-gray-500
                    focus:ring-0 focus:border-gray-100"
        id={name}
        name={name}
        type={type}
        required={required}
      />
    </div>
  );
};
