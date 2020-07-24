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
                developer and 3D printer hobbyist. I believe in the art of
                collaboration and the distribution of knowledge, and as such
                I'll occassionally write blog posts here about anything
                interesting I've stumbled across that others might want to know
                about.
            </Paragraph>
            <Paragraph>
                I believe in collaboration: if you have a cool project that
                you're working on that you'd think I'd want to help with, feel
                free to ping me at{" "}
                <FancyLink
                    href={
                        "mailto:lucas@lucasburdell.com?Subject=Interested+in+My+Cool+Project%3F"
                    }
                >
                    lucas@lucasburdell.com
                </FancyLink>
                . Please don't spam me! I promise I'll read your emails, and
                will always respond.
            </Paragraph>
            <Paragraph>
                You can also{" "}
                <FancyLink href={"https://github.com/lucas-burdell"}>
                    find me on GitHub!
                </FancyLink>{" "}
                I have a lot of interesting projects up there and I'd be
                thankful if someone had something they want to contribute.
            </Paragraph>
        </Content>
    </Fragment>
);
