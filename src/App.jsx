import Header from "./Components/Header/Header.jsx"
import SubsPlan from "./Components/SubsPlan/SubsPlan.jsx"
import { useState } from "react";

function App() {
  const [ isChecked, setIsChecked ] = useState(true);
  const [ selectedPlan, setSelectedPlan ] = useState("monthly");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if(isChecked) {
      setSelectedPlan("monthly")
    } else {
      setSelectedPlan("annually");
    }
  }

  return (
    
    <div className="main-container">
      
      <Header 
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <SubsPlan 
        selectedPlan={selectedPlan}
      />
      
    </div>
    
  )
}

export default App
