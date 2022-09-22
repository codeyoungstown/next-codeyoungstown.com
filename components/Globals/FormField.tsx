interface FormProps {
  name: string;
  label: string;
  textarea?: boolean;
  type?: string;
  notRequired?: boolean;
}

export default function FormField({
  name,
  label,
  textarea,
  type,
  notRequired,
}: FormProps) {
  notRequired = notRequired ? true : false;

  return textarea ? (
    <TextArea name={name} label={label} />
  ) : (
    <TextField
      name={name}
      label={label}
      type={type}
      notRequired={notRequired}
    />
  );
}

const TextArea = ({ name, label }) => {
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
        required
      />
    </div>
  );
};

const TextField = ({ name, label, type, notRequired }) => {
  type = type ? type : "text";
  if (notRequired) {
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
        />
      </div>
    );
  } else {
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
          required
        />
      </div>
    );
  }
};
