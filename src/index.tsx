import React, { FunctionComponent } from "react";
import { render } from "react-dom";
import "./assets/styles/main.css";
import styled, { ThemeProvider } from "styled-components";
import { Routes } from "./Routes";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./Theme";
import { ContentArea } from "./ContentArea";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppContainer>
        <Header />
        <ContentArea>
          <Routes />
        </ContentArea>
      </AppContainer>
    </BrowserRouter>
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
