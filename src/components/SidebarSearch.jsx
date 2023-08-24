import PropTypes from 'prop-types';

const SidebarSearch = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-dark3 text-white rounded-full px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search..."
      />
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        onClick={onSearch}
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
  );
};
// PropTypes for SidebarSearch component
SidebarSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
export default SidebarSearch;
