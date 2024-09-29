import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const isUserInputvalid = userInput.duration > 0 && userInput.expectedReturn > 0;

function handleInputChange(inputIdentifier, newValue) {
  setUserInput((prevValue) => {
      return {...prevValue,
          [inputIdentifier] : +newValue // JS syntex to set the value of a property, adding a + will force conversion of this string to number
      }
  });
}
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInputChange} />
      {!isUserInputvalid && <p className="center">Please enter valid input</p>}
      {isUserInputvalid && <Results userInput={userInput} />}
    </>
  );
}

export default App
