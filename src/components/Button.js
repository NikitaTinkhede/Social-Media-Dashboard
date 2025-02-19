import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.a`
  display: inline-block;
  background: ${(props) => (props.outline ? 'transparent' : '#6c63ff')};
  padding: 0.8rem 2rem;
  border: 2px solid #6c63ff;
  border-radius: 8px;
  color: ${(props) => (props.outline ? '#6c63ff' : '#fff')};
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: 0.3s ease all;

  &:hover {
    background: ${(props) => (props.outline ? '#6c63ff' : '#534dff')};
    color: #fff;
  }
`;

export default function Button({ btnText, btnLink, outline = false }) {
  return <ButtonStyle href={btnLink} outline={outline}>{btnText}</ButtonStyle>;
}
