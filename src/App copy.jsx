import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading>The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in & out</Heading>
              <Button onClick={() => alert("Check In")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check Out")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form action="">
              <Input
                type="number"
                placeholder="Number of guests"
                min={0}
              ></Input>
              <Input
                type="number"
                placeholder="Number of guests"
                min={0}
              ></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
