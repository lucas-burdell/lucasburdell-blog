import React, { FunctionComponent } from "react";
import styled from "./Theme";
import { RouteComponentProps, withRouter } from "react-router";
const me = require("./assets/img/me.jpg");

const HeaderContainer = styled.div`
  display: flex;
  flex: 1 1 3em;
  background-color: ${props => props.theme.background.dark};
  justify-content: space-between;
`;

const HeaderGroup = styled.div`
  display: flex;
  flex: 0 1 auto;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const HeaderButton = styled.button`
  font-size: 1.5rem;
  color: #ffffff;
  border: none;
  background-color: transparent;
  border-bottom: 3px solid transparent;
  &:hover,
  &:focus {
    color: ${props => props.theme.primary.light};
    border-color: ${props => props.theme.primary.light};
    outline: 0;
  }
  transition: all 0.5s ease-out;
  margin: 5px 1rem;
  flex: 0 1 auto;
  cursor: pointer;
  text-align: center;
  display: inline-flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  border: 3px solid #000;
  margin: 5px 10px;
  background-color: #fff;
  &:hover,
  &:focus {
    border-color: ${props => props.theme.primary.light};
    transform: scale(1.2);
    outline: 0;
  }
  transition: all 0.5s;
`;

const HeaderRaw: FunctionComponent<RouteComponentProps> = props => (
  <HeaderContainer>
    <HeaderGroup>
      <HeaderButton onClick={() => props.history.push("/")}>
        Home
      </HeaderButton>
      <HeaderButton onClick={() => props.history.push("/blog")}>
        Blog
      </HeaderButton>
    </HeaderGroup>
    <HeaderGroup>
      <Logo onClick={() => props.history.push("/")} tabIndex={0} src={me} />
    </HeaderGroup>
  </HeaderContainer>
);

export const Header = withRouter(HeaderRaw);
