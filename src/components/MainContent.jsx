
import PropTypes from 'prop-types';

import HeroPage from './HeroPage';

export const MainContent = ({ selectedComponent, setSelectedComponent }) => {

  if (!selectedComponent) return <HeroPage setSelectedComponent={setSelectedComponent} />
    return (
      <div className="w-4/5 bg-dark2  p-6" style={{overflowY: 'scroll'}}>
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        {selectedComponent && (
          <div>
            <h2 className="text-xl font-semibold mb-2">{selectedComponent.title}</h2>
            <p className='text-text2'>{selectedComponent.explanation}</p>
                    <h3 className="text-lg font-semibold mt-4">Usage:</h3>
                    
                    <div className="space-y-2">
            {Object.entries(selectedComponent.props).map(([propName, propDescription], index) => (
              <div key={index} className="flex items-start">
                <p className="text-text2 font-medium">{propName}:</p>
                <p className="ml-2 text-text2">{propDescription}</p>
              </div>
            ))}
          </div>
                 
<div>
  { selectedComponent.example && selectedComponent.example}
</div>

                    
                </div>
                
                
        )}
      </div>
    );
  };

  // PropTypes for MainContent component
MainContent.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
    selectedComponent: PropTypes.shape({
      title: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired,
        usage: PropTypes.node.isRequired, 
        example: PropTypes.node,
      props: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
        

        
    }),
    
  };
  