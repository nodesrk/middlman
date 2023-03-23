


const Button = ({ primary, modifier, children, ...rest }) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-[#000000] transition-all duration-300 text-white hover:bg-gray-100 hover:text-black`
    : `bg-white transition-all duration-300 text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button type="button" className={`${baseStyle} ${styles} ${modifier ?? ``}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
