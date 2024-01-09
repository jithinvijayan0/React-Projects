import styled from "styled-components"
import NumberSelect from "./NumberSelect"
import Totalscore from "./Totalscore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./rules"

const GamePlay = () => {
  const [score, setScore]=useState(0);
  const [SelectedNumber,SetSelectedNumber] = useState();
  const [CurrentDice,setCurrentDice]= useState(1);
  const [error,setError ] = useState("");
  const [showRules,setShowRules] = useState(false);

  const  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const rollDice = () => {
    if (!SelectedNumber) {
      setError("You have not selected any number")
      return; 
    }
    const RandomNumber = generateRandomNumber(1,7);
    setCurrentDice ((prev) => RandomNumber );


    if (SelectedNumber === RandomNumber ){ 
      setScore((prev) => prev + RandomNumber);
    }else{
      setScore((prev) => prev - 2); 
    }

    SetSelectedNumber(undefined); 

  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
        <div className="topsection">
        <Totalscore score={score}  />
        <NumberSelect  
        error={error}
        setError={setError}
        SelectedNumber={SelectedNumber}
        SetSelectedNumber={SetSelectedNumber}
        />
        </div>
        <RollDice  CurrentDice={CurrentDice} rollDice={rollDice}/>

        <div className="btn">
          <OutlineButton
          onClick={resetScore}
          >Reset</OutlineButton>
          <Button onClick={()=> setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"}Show rules</Button>
        </div>

           {showRules && <Rules />}
         

    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
padding-top: 70px;
.topsection{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
}
`;