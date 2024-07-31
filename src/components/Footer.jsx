import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Intro>
          <Title>An Online Pomodoro Timer to Boost Your Productivity</Title>
        </Intro>
        <Section>
          <SectionTitle>What is Pomofocus?</SectionTitle>
          <SectionContent>
            Pomofocus is a customizable Pomodoro timer that works on desktop & mobile browsers. The aim of this app is to help you focus on any task you are working on, such as studying, writing, or coding. This app is inspired by the Pomodoro Technique, a time management method developed by Francesco Cirillo.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>What is the Pomodoro Technique?</SectionTitle>
          <SectionContent>
            The Pomodoro Technique was created by Francesco Cirillo for a more productive way to work and study. It uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - Wikipedia
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>How to Use the Pomodoro Timer?</SectionTitle>
          <StepsList>
            <Step>1. Add tasks to work on today.</Step>
            <Step>2. Set estimated pomodoros (1 = 25 minutes of work) for each task.</Step>
            <Step>3. Select a task to work on.</Step>
            <Step>4. Start the timer and focus on the task for 25 minutes.</Step>
            <Step>5. Take a break for 5 minutes when the alarm rings.</Step>
            <Step>6. Iterate 3-5 times until you finish the tasks.</Step>
          </StepsList>
        </Section>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  border-top: 1px solid #e0e0e0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  color: #333;
`;

const Intro = styled.div`
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-size: 6rem; /* Increased font size */
  font-weight: bold;
  color: #333;
  line-height: 1.3; /* Adjusted line-height for better readability */
`;

const Section = styled.section`
  margin-bottom: 3rem; /* Increased spacing between sections */
`;

const SectionTitle = styled.h2`
  font-size: 3.6rem; /* Increased font size */
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1.5rem; /* Increased spacing below the title */
`;

const SectionContent = styled.p`
  font-size: 1.8rem; /* Increased font size */
  line-height: 1.8; /* Adjusted line-height for better readability */
  color: #666;
`;

const StepsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.8rem; /* Increased font size */
  line-height: 1.8; /* Adjusted line-height for better readability */
  color: #333;
`;

const Step = styled.li`
  margin-bottom: 1rem; /* Increased spacing between steps */
  &::before {
    content: '•';
    color: #007bff;
    margin-right: 0.5rem;
  }
`;
