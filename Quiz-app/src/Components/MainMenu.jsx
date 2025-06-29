import { useContext } from "react";
import { QuizContext } from "./Helpers/Context";
function MainMenu(){
    const {gameState, setGameState} = useContext(QuizContext);
    return(
        <div className="menu">
            <h3>Main Menu</h3>
            <button onClick={()=>setGameState("quiz")}>Start Quiz</button>
        </div>
    )

}
export default MainMenu;