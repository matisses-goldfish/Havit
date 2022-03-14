import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import '@nylas/components-agenda';

// Import our search method
import search from '../utils/Api';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const getCalender = async () => {
    const response = await search();
    console.log(response)
    setResults(response.data.data);
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    getCalender();
  }, []);

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <div>
      <ResultList results={results} />
      </div>
    </div>
  );
};

export default SearchResultContainer;


const calender = ()=>{

}