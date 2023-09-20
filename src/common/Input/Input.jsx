import "./Input.css";

export const Input = ({ type, value, placeholder, name, manejadora }) => {
  return (
    <input
      type={type}
      value={value || ""}
      placeholder={placeholder}
      name={name}
      className="defaultInput"
      onChange={(e) => manejadora(e)}
    />
  );
};
