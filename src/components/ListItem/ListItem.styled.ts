import styled from "styled-components";

export const ListItemLink = styled.a<{ color: string }>`
  text-decoration: none;
  padding: 10px;
  color: ${(props) => props.color};
`;
