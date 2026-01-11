import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from 'react'
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
    const [showRules, setShowRules] = useState(false)
    const [error, setError] = useState("")
    const [score, setScore] = useState(0)
    const [numberSelector, setnumberSelector] = useState()
    const [currDice, setcurrDice] = useState(1)
    const randomValue = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const roleDice = () => {
        if (!numberSelector) {
            setError("You have not selected any number")
            return
        }
        const random = randomValue(1, 7);
        setcurrDice((prev) => random)

        if (numberSelector === random) {
            setScore(prev => prev + random)
        } else {
            setScore(prev => prev - 2)
        }
        setnumberSelector(undefined)
    }
    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    setError={setError}
                    numberSelector={numberSelector} setnumberSelector={setnumberSelector} />
            </div>
            <RollDice currDice={currDice} roleDice={roleDice} />
            <div className="btns">
                <OutlineButton onClick={() => {
                    setScore(0);
                }}>Reset</OutlineButton>
                <Button onClick={() => {
                    setShowRules(prev => !prev)
                }}>
                    {!showRules ? "Show" : "Hide"} Rules</Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay


const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`