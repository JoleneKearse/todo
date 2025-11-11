type InputProps = {
  label: string;
  type: string;
  placeholder: string;
};

const Input = ({ label, type, placeholder }: InputProps) => {
  return (
    <>
      <label htmlFor={type} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        name={type}
        id={type}
        aria-label={placeholder}
        autoComplete={type}
        placeholder={placeholder}
        className="bg-gray-100 py-2 pl-6 w-full rounded-sm placeholder:text-purple-600 focus:ring-3 focus:ring-amber-300 outline-none"
      />
    </>
  );
};

export default Input;
