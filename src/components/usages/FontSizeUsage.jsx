import { useState } from 'react'

import UsageSkeleton from '../skeletons/UsageSkeleton';
const fontSizeOptions = ['header1', 'header2', 'header', 'body'];
import styled from 'styled-components'
  
const FontSizeUsage = () => {
    const [selectedFontSize, setSelectedFontSize] = useState('body');

    const FontSize = ({ fontSize }) => {
        let fontSizeValue = '';
        let lineHeightValue = '';
      
        switch (fontSize) {
          case 'header1':
            fontSizeValue = 'var(--header1-size)';
            lineHeightValue = 'var(--header1-lh)';
            break;
          case 'header2':
            fontSizeValue = 'var(--header2-size)';
            lineHeightValue = 'var(--header2-lh)';
            break;
          case 'header':
            fontSizeValue = 'var(--header-size)';
            lineHeightValue = 'var(--header-size)';
            break;
          case 'body':
            fontSizeValue = 'var(--body-size)';
            lineHeightValue = 'var(--body-lh)';
            break;
          default:
            fontSizeValue = 'var(--body-size)';
            lineHeightValue = 'var(--body-lh)';
        }
      
        return `
          font-size: ${fontSizeValue};
          line-height: ${lineHeightValue};
        `;
      };
      
  

    const codeBlockText = ` const StyledText = styled.p\`
    \${FontSize({ fontSize: ${selectedFontSize} })}
    /* Add more styles here */
  \`;
  <StyledText>
  This is a text with the selected font size and line height.
  </StyledText>
`


    const propsComponent = (
        <>
                               
                               {fontSizeOptions.map(option => (
          <button
            key={option}
            className={`${
              selectedFontSize === option
                ? 'bg-dark1'
                : 'bg-dark3'
            } rounded p-2 focus:outline-none focus:ring focus:border-blue-300`}
            onClick={() => setSelectedFontSize(option)}
          >
            {option}
          </button>
        ))}
      
            </>
    )
    

const StyledText = styled.p`
${FontSize}
`;
    const viewDisplay = (
        <StyledText fontSize={selectedFontSize}>
        This is a text with the selected font size and line height.
      </StyledText>
        
    )

    return (
        <UsageSkeleton
            codeBlockText={codeBlockText}
            propsDisplay={propsComponent}
            viewDisplay={viewDisplay}
        />
      );
    }
    

export default FontSizeUsage