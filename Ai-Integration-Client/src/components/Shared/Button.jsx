// eslint-disable-next-line react/prop-types
const Button = ({ children, className, ...props }) => {
    return (
      <button
        className={`px-4 py-2 rounded-lg font-medium ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  