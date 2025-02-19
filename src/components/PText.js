import React from 'react';
import styled from 'styled-components';

const PStyle = styled.p`
  font-size: 1.2rem;
  color: #444;
  line-height: 1.6;
  max-width: 600px;
`;

export default function PText({ children }) {
  return <PStyle>{children}</PStyle>;
}
