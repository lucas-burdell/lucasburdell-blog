import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10em;
`;

const Text = styled.div`
  display: block;
  flex: 1 1 auto;
  background-color: #000;
  color: #fff;
`;

const App = (props: { children?: React.ReactNode }) => (
  <AppContainer>
    <Text>
      Hello, world! This is a React Application served from GitHub Pages!
    </Text>
  </AppContainer>
);

ReactDOM.render(<App />, document.getElementById("root"));
