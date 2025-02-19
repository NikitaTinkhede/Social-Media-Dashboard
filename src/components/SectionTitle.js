import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
  margin-bottom: 2rem;
  .subheading {
    font-size: 1.2rem;
    color: #6c63ff;
    margin-bottom: 0.5rem;
  }
  .heading {
    font-size: 2rem;
    color: #222;
    font-weight: bold;
  }
`;

export default function SectionTitle({ subheading, heading }) {
  return (
    <TitleStyle>
      <p className="subheading">{subheading}</p>
      <h2 className="heading">{heading}</h2>
    </TitleStyle>
  );
}
