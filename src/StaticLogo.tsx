import * as React from "react";
import styled from "./Theme";
const me = require("./assets/img/me_v2.jpg");

const LogoImg = styled.img<{ size: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: ${(props) => props.size};
    border: 3px solid #000;
    margin: 5px 10px;
    background-color: #fff;
    border-color: ${(props) => props.theme.primary.light};
    transform: scale(1.2) rotateY(360deg);
    transition: all 0.5s;
`;

interface IProps {
    size?: string;
}

export const StaticLogo: React.FunctionComponent<IProps> = (props) => (
    <LogoImg {...props} size={props.size || "3rem"} src={me} />
);
