import React, { FunctionComponent, Fragment } from "react";
import { CountupClock } from "./CountupClock";
import { CenteredContainer } from "./CenteredContainer";
import { Content } from "./Content";
import { Paragraph } from "./Paragraph";
import { FancyLink } from "./FancyLink";
import { StaticLogo } from "./StaticLogo";

const hiredDate = "10 Aug 2018 08:00:00 CST";

export const Home: FunctionComponent = () => (
  <Fragment>
    <CenteredContainer>
      <StaticLogo size="10rem" />
    </CenteredContainer>
    <Content>
      <Paragraph>
        Hey, I'm Lucas Burdell! Writer, gamer, tech enthusiast, software
        developer and 3D printer hobbyist. Science and technology are my main
        passions, and passion is the fuel that drives me to tinker and build. My
        day job is as a software developer, which gives me an outlet for my
        creativity and also keeps the lights on!
      </Paragraph>
      <Paragraph>
        I've been a software developer for{" "}
        <b>
          <CountupClock date={hiredDate} />
        </b>
        .
        <br />
        However, I've always been interested in computer programming. I wrote my
        first program somewhere in 2009.
      </Paragraph>
      <Paragraph>
        I believe in collaboration: if you have a cool project that you're
        working on that you'd think I'd want to help with, feel free to ping me
        at{" "}
        <FancyLink
          href={
            "mailto:lucas@lucasburdell.com?Subject=Interested+in+My+Cool+Project%3F"
          }
        >
          lucas@lucasburdell.com
        </FancyLink>
        . Please don't spam me. I promise I'll read your emails, and will
        respond if I feel like it. 😉
      </Paragraph>
    </Content>
  </Fragment>
);
