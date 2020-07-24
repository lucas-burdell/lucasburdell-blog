import * as React from "react";
import { Content } from "../Content";
import { Paragraph } from "../Paragraph";
import { IPost } from "./";
import { FancyLink } from "../FancyLink";

export const Post: IPost = {
    title: "My First Post",
    date: "8/26/2019",
    post: () => (
        <>
            <Paragraph>
                The first post of any blog seems to always be the hardest. What
                to write about? Well, for this one I think I will write about
                myself.
            </Paragraph>
            <Paragraph>
                I grew up on the outskirts of a small midwestern town. What this
                really means is that I grew up in the "country"; a place with
                plenty of trees, animals, and bugs. The country also has an
                incredible lack of neighbors, or entertainment of any kind if
                you aren't the kind of person who likes going outside.
            </Paragraph>
            <img
                src="https://media.giphy.com/media/yArF53HNvsjLy/source.gif"
                width="480"
                height="192"
            ></img>
            <p>
                <a href="https://giphy.com/gifs/wtf-japan-httptumblrcom-yArF53HNvsjLy">
                    via GIPHY
                </a>{" "}
                Who likes this natury junk anyway?
            </p>
            <Paragraph>
                This wasteland of entertainment ultimately is what led to me
                getting into computers. I won't say it's the only influence; my
                mother taught me how to use a computer when I was about 3,
                though that was mostly Reading Rabbit games and a LOT of MS
                Paint!
            </Paragraph>
            <Paragraph>
                The most interesting part of learning to code for me has always
                been the beginning. Most people stumble through how the logic
                works; everything is sequential and strict. Writing things in
                the right order can be daunting at first!
            </Paragraph>
            <Paragraph>
                I had my humble beginnings writing Lua in a game platform called
                <FancyLink href="https://www.roblox.com">Roblox.</FancyLink> I
                remember my first code creation: I created fun little buttons
                that could be clicked on that would play music, and later would
                shoot lights into the sky. I think I was about 12 years old at
                the time. Other players could join the game and see the lights
                and hear the music; it was a social success for the handful of
                friends on the platform I showed it to. I'll always treasure the
                first time I felt the rush after getting the music to play after
                stumbling through documentation and tutorials for what felt like
                hours!
            </Paragraph>
            <Paragraph>
                When I went to college I was quickly recruited as a computer
                science teaching and research assistant. This allowed me to see
                other people experience the same struggles I had as a first-time
                programmer, feel the same rush as they eventually solved their
                problems. I got to participate in their version of the
                experience I cherished as I got older, and it was almost as good
                as the original experience!
            </Paragraph>
        </>
    ),
};
