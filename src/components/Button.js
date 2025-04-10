function Button({ type, className, isDisabled, children }) {
  return (
    <button type={type} className={className} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
