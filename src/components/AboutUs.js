import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  background-color:rgb(248, 248, 248); // Same background color as the Contact Form
  color: #ffffff; // Text color to match the theme

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
    color: #00aced; // Text color for the section title
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles id="about">
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Track & Optimize Your Social Media"
            heading="About Social Media Activity Tracker"
          />
          <PText>
            Our Social Media Activity Tracker helps users monitor, analyze, and optimize their
            social media usage. Whether you're a content creator, marketer, or casual user,
            gain insights into your activity trends, engagement, and time spent across platforms.
            Stay informed and take control of your digital presence with our powerful tracking tools.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Explore Features" btnLink="/features" />
            <Button btnText="Learn More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          {/* Image removed due to missing file */}
        </div>
      </div>
    </AboutSectionStyles>
  );
}
