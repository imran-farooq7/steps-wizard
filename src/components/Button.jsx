const Button = ({ children, color, onClick }) => {
	return (
		<button className={color} onClick={onClick}>
			{children}
		</button>
	);
};
export default Button;
