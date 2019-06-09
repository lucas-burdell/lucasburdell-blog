import React, { FunctionComponent, Fragment } from "react";
import styled from "./Theme";
import { CountupClock } from "./CountupClock";
const me = require("./assets/img/me.jpg");

const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  border: 3px solid #000;
  margin: 5px 10px;
  background-color: #fff;
  border-color: ${props => props.theme.primary.light};
  transform: scale(1.2) rotateY(360deg);
  transition: all 0.5s;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  margin: 2rem 0;
  padding: 5px;
`;

const Paragraph = styled.p`
  margin: 2em 0;
`

const FancyLink = styled.a`
  color: ${(props) => props.theme.primary.medium};
  border: none;
  border-bottom: 1px solid transparent;

  &:hover, &:focus {
    color: ${(props) => props.theme.primary.light};
    border-color: ${(props) => props.theme.primary.medium};
    outline: 0;
  }

  &:link {
    color: ${(props) => props.theme.primary.medium};
  }

  &:visited {
    color: ${(props) => props.theme.primary.medium};
  }

  *:active {
    color: ${(props) => props.theme.accent.medium};
  }
`

const hiredDate = "August 10, 2018 08:00:00 CST";

export const Home: FunctionComponent = () => (
  <Fragment>
    <CenteredContainer>
      <Logo src={me} />
    </CenteredContainer>
    <Content>
      <Paragraph>
        Hey, I'm Lucas Burdell! Writer, gamer, tech enthusiast, software
        developer and 3D printer hobbyist. Science and technology are my main
        passions, and passion is the fuel that drives me to tinker and build. My day
        job is as a software developer, which gives me an outlet for my
        urge for passion-fueled creation and also keeps the lights on!
      </Paragraph>
      <Paragraph>
        I've been a software developer for <b><CountupClock date={hiredDate} /></b>.
        <br />
        However, I've always been interested in computer programming. I wrote my first program somewhere in 2009.
      </Paragraph>
      <Paragraph>
        I believe in collaboration: if you have a cool project that you're
        working on that you'd think I'd want to help with, feel free to ping me
        at <FancyLink href={"mailto:lucas@lucasburdell.com?Subject=Interested+in+My+Cool+Project%3F"}>lucas@lucasburdell.com</FancyLink>.
        Please don't spam me. I promise I'll read your emails, and will respond if I feel like it. 😉
      </Paragraph>
    </Content>
  </Fragment>
);
