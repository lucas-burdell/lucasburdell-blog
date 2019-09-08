import styled from "./Theme";
export const FancyLink = styled.a`
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
`;
