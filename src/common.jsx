import FlexContainerUsage from "./components/usages/FlexContainerUsage";
import FontSizeUsage from "./components/usages/FontSizeUsage";
import GridContainerUsage from "./components/usages/GridContainerUsage";

const componentData = [
    {
      title: 'GridContainer',
      explanation: 'A component for creating grid-based layouts.',
      props: {
        numCols: 'Number of grid columns.',
        numRows: 'Number of grid rows.',
        gapSize: 'Gap size between grid items.',
        fullHeight: 'Whether the container should take full height.',
      },
      usage: `
        <GridContainer numCols={3} numRows={2} gapSize={10} fullHeight>
          {/* Add grid items here */}
        </GridContainer>
      `,
      example: <GridContainerUsage/>
      
    },
    {
      title: 'FlexContainer',
      explanation: 'A component for creating flexbox-based layouts.',
      props: {
        gap: 'Gap between flex items.',
        fullHeight: 'Whether the container should take full height.',
        flexDirection: 'Flex direction (row or column).',
        justifyContent: 'Flex justify content.',
      },
      usage: `
        <FlexContainer gap={20} fullHeight flexDirection="row" justifyContent="center">
          {/* Add flex items here */}
        </FlexContainer>
      `,
      example: <FlexContainerUsage/>
    },
    {
      title: 'FontSize (CSS mixin)',
      explanation: 'A mixin for setting font size and line height.',
      props: {
        fontSize: 'Font size (header1, header2, header, body).',
      },
      usage: `
        const StyledText = styled.p\`
          \${FontSize({ fontSize: 'body' })}
          /* Add more styles here */
        \`;
        <StyledText>
          This is a text with the body font size and line height.
        </StyledText>
      `,
      example: <FontSizeUsage/>
    },
  ];
  
  export default componentData;
  