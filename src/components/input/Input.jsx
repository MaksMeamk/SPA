import './Input.module.scss';
function Input({ children, type, name, placeholder }) {
  return (
    <div>
      <label for={name}>{children}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  );
}
export default Input;
