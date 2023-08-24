import React, { useState } from 'react'
import { FlexContainer } from '../../commonStyles';
import { CodeBlock, dracula } from 'react-code-blocks';
import UsageSkeleton from '../skeletons/UsageSkeleton';
const optionalJustifyContentValues = [
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'end',
    'start',
    'left',
    'right',
    'flex-start',
    'flex-end'
];
  
const FlexContainerUsage = () => {
    const [gap, setGap] = useState(16);
    const [fullHeight, setFullHeight] = useState(false);
    const [flexDirection, setFlexDirection] = useState('row');
    const [justifyContent, setJustifyContent] = useState('center');
    
    const codeblockText = ` <FlexContainer gap={${gap}} fullHeight flexDirection={${flexDirection}} justifyContent={${justifyContent}}>
    {/* Add flex items here */}
    </FlexContainer>`



    const propsComponent = (
        <>
                               

        <div className="flex items-center space-x-4">
          <label className="text-white">gap:</label>
          <input
            type="number"
            value={gap}
            onChange={(e) => setGap(parseInt(e.target.value))}
            className="bg-dark3 text-white rounded p-2 w-20 focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-white">fullHeight:</label>
          <input
            type="checkbox"
            checked={fullHeight}
            onChange={(e) => setFullHeight(e.target.checked)}
            />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-white">flexDirection:</label>
          <select
            value={flexDirection}
            onChange={(e) => setFlexDirection(e.target.value)}
            className="bg-dark3 text-white rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
            <option value="row">row</option>
            <option value="column">column</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-white">justifyContent:</label>
          <select
            value={justifyContent}
            onChange={(e) => setJustifyContent(e.target.value)}
            className="bg-dark3 text-white rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
            {optionalJustifyContentValues.map((value) => (
                <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      
            </>
    )

    const viewDisplay = (
        <FlexContainer
        gap={gap}
        fullHeight={fullHeight}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        >

        <div className="bg-dark3 text-white p-4 rounded shadow-lg mr-4 mb-4">
          Item 1
        </div>
        <div className="bg-dark3 text-white p-4 rounded shadow-lg mr-4 mb-4">
          Item 2
        </div>
        <div className="bg-dark3 text-white p-4 rounded shadow-lg mr-4 mb-4">
          Item 3
        </div>
      </FlexContainer>
    )

    return (
        <UsageSkeleton
            codeBlockText={codeblockText}
            propsDisplay={propsComponent}
            viewDisplay={viewDisplay}
        />
      );
    }
    

export default FlexContainerUsage