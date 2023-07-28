import { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
const messages = ["Learn React", "Apply For jobs", "Invest your new income"];

const App = () => {
	const [step, setStep] = useState(0);
	// console.log(step);

	const handleNextStep = () => {
		// step = step + 1
		setStep(step + 1);
	};
	const handlePreviousStep = () => {
		setStep(step - 1);
	};
	return (
		<div className="steps">
			<div className="numbers">
				<div className={`${step >= 0 ? "active" : ""}`}>1</div>
				<div className={`${step >= 1 ? "active" : ""}`}>2</div>
				<div className={`${step >= 2 ? "active" : ""}`}>3</div>
			</div>
			<Message>{messages[step]}</Message>
			<div className="buttons">
				<Button color="previous" onClick={handlePreviousStep}>
					Previous
				</Button>
				<Button color="next" onClick={handleNextStep}>
					Next
				</Button>
			</div>
		</div>
	);
};
export default App;
