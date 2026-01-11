import styled from "styled-components"
const RollDice = ({ currDice, roleDice }) => {

    return (
        <RollContainer>
            <div
                onClick={roleDice}
                className="dice">
                <img src={`/images/dice_${currDice}.png`} alt="" />
            </div>
            <p>Click on Dice to roll</p>
        </RollContainer>
    )
}

export default RollDice

const RollContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }
`  