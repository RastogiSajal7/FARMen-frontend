import React from 'react';

function SearchBar() {
  return (
   
    <div id="searchbar" className='mt-32 mb-32 mx-4 md:mx-10 lg:mx-50'>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-full">
          <div id="bar1" className="flex-grow mr-0">
            <div className="flex">
                <button className="bg-emerald-900 text-white px-4 py-2 rounded-l-lg hover:bg-red-700 focus:outline-none focus:bg-red-700" type="submit">Go</button>
                <input id="search1" className="border border-emerald-950 px-4 py-2 focus:outline-none focus:border-red-700 flex-grow" type="text" placeholder="Enter what you are looking" />  
            </div>
          </div>
          <div id="bar2" className="flex-grow ml-0">
            <div className="flex">
              <input id="search2" className="border border-emerald-950 px-4 py-2 focus:outline-none focus:border-red-700 flex-grow" type="text" placeholder="Enter your location" />
              <button className="bg-emerald-900 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 focus:outline-none focus:bg-red-700" type="submit">Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
