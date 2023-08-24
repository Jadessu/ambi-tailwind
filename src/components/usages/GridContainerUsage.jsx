import { useState } from "react";
import { GridContainer } from "../../commonStyles";
import UsageSkeleton from "../skeletons/UsageSkeleton";

export default function GridContainerUsage() {


    
    const [numCols, setNumCols] = useState(3);
    const [numRows, setNumRows] = useState(2);
    const [gapSize, setGapSize] = useState(16);
    const [fullHeight, setFullHeight] = useState(true);

    const fullHeightProp = fullHeight !== null ? ' fullHeight' : '';
    const codeBlockText = 
     ` <GridContainer numCols={${numCols}} numRows={${numRows}} gapSize={${gapSize}}${fullHeightProp}>
        {/* Add grid items here */}
      </GridContainer>
    `;
    const propsDisplay = (
      
        <>
          <div className="flex items-center space-x-4">
            <label className="text-white">numCols:</label>
            <input
              type="number"
              value={numCols}
              onChange={(e) => setNumCols(parseInt(e.target.value))}
              className="bg-dark3 text-white rounded p-2 w-20 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-white">numRows:</label>
            <input
              type="number"
              value={numRows}
              onChange={(e) => setNumRows(parseInt(e.target.value))}
              className="bg-dark3 text-white rounded p-2 w-20 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-white">gapSize:</label>
            <input
              type="number"
              value={gapSize}
              onChange={(e) => setGapSize(parseInt(e.target.value))}
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
        </>

    )
    
    const viewDisplay = (
        <GridContainer numCols={numCols} numRows={numRows} gapSize={gapSize} fullHeight>
        {Array.from({ length: numRows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <p
                key={colIndex}
                className="bg-dark3 text-white p-4 rounded shadow-lg mr-4 mb-4"
              >
                Item {rowIndex * numCols + colIndex + 1}
              </p>
            ))}
          </div>
        ))}
      </GridContainer>
    )

    return (
        <UsageSkeleton
            codeBlockText={codeBlockText}
            propsDisplay={propsDisplay}
            viewDisplay={viewDisplay}
            />

       
    )
}