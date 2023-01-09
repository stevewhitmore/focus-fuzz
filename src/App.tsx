import styled from "styled-components";
import SoundWrapper from "./components/SoundWrapper";

function App() {
  return (
    <AppContainer>
      <Header>
        <Title>Focus Fuzz</Title>
        <Tagline>Drown Out Distractions</Tagline>
      </Header>
      <SoundWrapper></SoundWrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  height: 100vh;
  background: #DDC;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.div`
  padding: 30px 0;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Tagline = styled.span`
  font-style: italic;
  letter-spacing: 2px;
`;