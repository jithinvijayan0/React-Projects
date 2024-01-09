import styled from "styled-components"
import { Button } from "../styled/Button";
const Startgame = ({ toggle }) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />
        </div>
    <div className="content">
        <h1>DICE GAME</h1>
        <Button
        onClick={toggle}
        >play Now</Button>
    </div>
    </Container>
  );
};

export default Startgame;


const Container = styled.div`
max-width: 1180px;
align-items: center;
height: 100vh;
display: flex;
margin: o auto;

.content  {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }

}

`;

