const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center 
    gap-2 px-7 py-4 border font-montserrat text-lg 
    leading-none rounded-full ${fullWidth && 'w-full'}
     ${
       borderColor
         ? `${backgroundColor} ${textColor} ${borderColor}`
         : 'bg-coral-red text-white border-coral-red'
     }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 w-5 h-5 rounded-full'
        />
      )}
    </button>
  );
};

export default Button;
