import PropTypes from 'prop-types';

const Sidebar = ({  setSelectedComponent, setSearchText, searchText, filteredComponents }) => {
    
return (
    
    <div className="w-1/5 bg-dark1  text-white p-6">
  
        
          <div className="relative">
      <input
        type="text"
        className="bg-dark3 text-white rounded-full px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        onClick={() => alert('Search clicked')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 19l-6-6m0 0l-6-6m6 6l6-6M5 5l6 6m0 0l6 6m-6-6l-6 6"
          />
        </svg>
      </button>
    </div>






          {/* Buttons for each component */}
          <div className="p-4"> 
  {filteredComponents?.map((component, index) => (
    <button
      key={index}
      className="w-full bg-dark2 text-white rounded-md py-2 px-4 mb-2 hover:bg-gray-600"
      onClick={() => setSelectedComponent(component)}
    >
      {component.title}
    </button>
  ))}
</div>
        {/* End of Buttons */}
       
    </div>
)
    
    
}
// PropTypes for Sidebar component
Sidebar.propTypes = {
    componentData: PropTypes.array.isRequired,
    filteredComponents: PropTypes.array.isRequired,
    setSelectedComponent: PropTypes.func.isRequired,
    setSearchText: PropTypes.func.isRequired,
    searchText: PropTypes.string,
  };
export default Sidebar
