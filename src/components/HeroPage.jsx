import styled from 'styled-components';
import componentData from '../common';
import PropTypes from 'prop-types';

const HeroSection = styled.section`
width: 100%;
  background-color: var(--dark2);
  color: var(--text1);
  padding: 100px 0;
  text-align: center;
 
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: var(--text2)
`;

const ComponentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const ComponentCard = styled.div`
cursor: pointer;
  background-color: var(--dark3);
  color: var(--text2);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const HeroPage = ({setSelectedComponent}) => {
  return (
    <HeroSection>
      <HeroTitle>Welcome to the Styled Components Dictionary</HeroTitle>
      <HeroSubtitle>Our collection of beautifully crafted styled components on the ambient app.</HeroSubtitle>
      <ComponentList>
        {componentData.map(component => (
          <ComponentCard key={component.title} onClick={() => setSelectedComponent(component)}>
            <h2>{component.title}</h2>
            <p>{component.explanation}</p>
           
          </ComponentCard>
        ))}
      </ComponentList>
    </HeroSection>
  );
};

export default HeroPage;
  HeroPage.propTypes = {
    setSelectedComponent: PropTypes.func.isRequired,
     
      
    };
    