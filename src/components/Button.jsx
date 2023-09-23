const Button = ({
  label,
  iconURL,
  BackgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      BackgroundColor
        ? `${BackgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red  text-white border-coral-red"
    } rounded-full`}
    >
      {label}
      {iconURL ? (
        <img
          src={iconURL}
          alt="arrow-right icon"
          className="m1-2 rounded-full w-5 h-5"
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
