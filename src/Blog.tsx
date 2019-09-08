import * as React from "react";
import { Posts } from "./Posts";
import { RouteComponentProps, withRouter, RouteChildrenProps, Route, Switch } from "react-router";
import { Content } from "./Content";
import { FancyLink } from "./FancyLink";
import { Link } from "react-router-dom";
import { Paragraph } from "./Paragraph";


const PostRenderer: React.FunctionComponent<RouteChildrenProps<{ postId: string }>> = (props) => {
    try {
        const index = parseInt(props.match.params.postId);
        const post = Posts[index];
        return <post.post />;
    } catch (exception) {
        return (<Paragraph>
            There doesn't seem to be anything here.
        </Paragraph>);
    }
}

const BlogRaw: React.FunctionComponent<RouteComponentProps> = (props) => {
    return (<Content>
        <Switch>
            <Route path={"/blog/:postId"} component={PostRenderer} />
            <Route exact path={"/blog"}>
                <ul>
                    {Posts.map((post, index) => (
                        <li key={index}>
                            <Link to={`/blog/${index}`} className={FancyLink}>
                                {post.title} - {post.date}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Route>
        </Switch>
    </Content>)
}

export const Blog = withRouter(BlogRaw);