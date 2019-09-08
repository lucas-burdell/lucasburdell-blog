import * as React from "react";
import { Content } from "../Content";
import { Paragraph } from "../Paragraph";
import { IPost } from "./";

export const Post: IPost = {
  title: "My First Post",
  date: "8/26/2019",
  post: () => (
    <>
      <Paragraph>
        The first post of any blog seems to always be the hardest. What to write
        about? Well, for this one I think I will write about myself.
      </Paragraph>
      <Paragraph>
        I grew up on the outskirts of a small midwestern town. What this really
        means is that I grew up in the "country"; a place with plenty of trees,
        animals, and bugs. The country also has an incredible lack of neighbors,
        or entertainment of any kind if you aren't the kind of person who likes
        going outside.
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
        This wasteland of entertainment ultimately is what led to me getting
        into computers. I won't say it's the only influence; my mother taught me
        how to use a computer when I was 3 years old.
      </Paragraph>
    </>
  )
};
