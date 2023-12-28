const Emoji = ({
  label,
  className,
  children,
}) => (
  <span
    role='img'
    aria-label={label}
    className={className}
  >
    {children}
  </span>
);

export default Emoji;
