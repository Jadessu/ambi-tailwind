import  { useState } from 'react';

import componentData from './common';
import Sidebar from './components/Sidebar';
import { MainContent } from './components/MainContent';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [searchText, setSearchText] = useState('');

  // Filter componentData based on the searchText
  const filteredComponents = componentData.filter(component => {
    return component.title.toLowerCase().includes(searchText.toLowerCase());
  });


  
  
  
  
 

  return (
    <div className="flex h-screen">
      <Sidebar componentData={componentData} setSelectedComponent={setSelectedComponent} setSearchText={setSearchText} searchText={searchText} filteredComponents={filteredComponents} />
      <MainContent selectedComponent={selectedComponent} filteredComponents={filteredComponents} searchText={searchText} setSelectedComponent={setSelectedComponent} />
    </div>
  )
};

export default App;
