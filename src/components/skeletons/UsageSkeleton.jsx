import PropTypes from 'prop-types';
import { CodeBlock, dracula } from 'react-code-blocks';

const UsageSkeleton = ({codeBlockText, propsDisplay, viewDisplay}) => {
    return (
        <>
               <CodeBlock
        text={codeBlockText}
        language={'jsx'}
        showLineNumbers={true}
        startingLineNumber={1}
                          theme={dracula}
            CodeBlock
            
                      />
            <div className="p-8">
                <h2 className="text-lg font-semibold mt-4 text-text2">Try it out:</h2>
                <div className="flex mb-4 justify-between	">
                    {propsDisplay}
                    </div>
          <div className='bg-dark1 p-8 '>
           {viewDisplay}
          </div>
        </div>
                </>
      );
}

UsageSkeleton.propTypes = {

    codeBlockText: PropTypes.node.isRequired,
    propsDisplay: PropTypes.node.isRequired,
    viewDisplay: PropTypes.node.isRequired,
    
  };
export default UsageSkeleton