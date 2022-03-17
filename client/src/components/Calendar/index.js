import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import ActivityCalendar from 'react-activity-calendar';
import { QUERY_HABITS, QUERY_STATS, QUERY_TYPES } from '../../utils/queries';

// Import our search method
import search from '../../utils/Api';

const data = [
  {
    count: 3,
    date: '2022-01-01',
    level: 2
  },
  {
    count: 2,
    date: '2022-01-02',
    level: 1
  },
  {
    count: 5,
    date: '2022-01-03',
    level: 2
  },
  {
    count: 6,
    date: '2022-01-04',
    level: 3
  },
  {
    count: 0,
    date: '2022-01-05',
    level: 0
  },
  {
    count: 1,
    date: '2022-01-06',
    level: 1
  },
  {
    count: 1,
    date: '2022-01-07',
    level: 1
  },
  {
    count: 0,
    date: '2022-01-08',
    level: 0
  },
  {
    count: 6,
    date: '2022-01-09',
    level: 3
  },
  {
    count: 3,
    date: '2022-01-10',
    level: 2
  },
  {
    count: 5,
    date: '2022-01-11',
    level: 2
  },
  {
    count: 0,
    date: '2022-01-12',
    level: 0
  },
  {
    count: 2,
    date: '2022-01-13',
    level: 1
  },
  {
    count: 6,
    date: '2022-01-14',
    level: 3
  },
  {
    count: 0,
    date: '2022-01-15',
    level: 0
  },
  {
    count: 0,
    date: '2022-01-16',
    level: 0
  },
  {
    count: 3,
    date: '2022-01-17',
    level: 2
  },
  {
    count: 2,
    date: '2022-01-18',
    level: 1
  },
  {
    count: 0,
    date: '2022-01-19',
    level: 0
  },
  {
    count: 0,
    date: '2022-01-20',
    level: 0
  },
  {
    count: 0,
    date: '2022-01-21',
    level: 0
  },
  {
    count: 6,
    date: '2022-01-22',
    level: 3
  },
  {
    count: 0,
    date: '2022-01-23',
    level: 0
  },
  {
    count: 0,
    date: '2022-01-24',
    level: 0
  },
  {
    count: 0,
    date: '2022-01-25',
    level: 0
  },
  {
    count: 3,
    date: '2022-01-26',
    level: 2
  },
  {
    count: 0,
    date: '2022-01-27',
    level: 0
  },
  {
    count: 4,
    date: '2022-01-28',
    level: 2
  },
  {
    count: 3,
    date: '2022-01-29',
    level: 2
  },
  {
    count: 1,
    date: '2022-01-30',
    level: 1
  },
  {
    count: 0,
    date: '2022-01-31',
    level: 0
  },
  {
    count: 8,
    date: '2022-02-01',
    level: 4
  },
  {
    count: 0,
    date: '2022-02-02',
    level: 0
  },
  {
    count: 4,
    date: '2022-02-03',
    level: 2
  },
  {
    count: 1,
    date: '2022-02-04',
    level: 1
  },
  {
    count: 3,
    date: '2022-02-05',
    level: 2
  },
  {
    count: 6,
    date: '2022-02-06',
    level: 3
  },
  {
    count: 5,
    date: '2022-02-07',
    level: 2
  },
  {
    count: 1,
    date: '2022-02-08',
    level: 1
  },
  {
    count: 0,
    date: '2022-02-09',
    level: 0
  },
  {
    count: 0,
    date: '2022-02-10',
    level: 0
  },
  {
    count: 2,
    date: '2022-02-11',
    level: 1
  },
  {
    count: 3,
    date: '2022-02-12',
    level: 2
  },
  {
    count: 8,
    date: '2022-02-13',
    level: 4
  },
  {
    count: 4,
    date: '2022-02-14',
    level: 2
  },
  {
    count: 0,
    date: '2022-02-15',
    level: 0
  },
  {
    count: 0,
    date: '2022-02-16',
    level: 0
  },
  {
    count: 1,
    date: '2022-02-17',
    level: 1
  },
  {
    count: 3,
    date: '2022-02-18',
    level: 2
  },
  {
    count: 0,
    date: '2022-02-19',
    level: 0
  },
  {
    count: 1,
    date: '2022-02-20',
    level: 1
  },
  {
    count: 0,
    date: '2022-02-21',
    level: 0
  },
  {
    count: 8,
    date: '2022-02-22',
    level: 4
  },
  {
    count: 0,
    date: '2022-02-23',
    level: 0
  },
  {
    count: 0,
    date: '2022-02-24',
    level: 0
  },
  {
    count: 6,
    date: '2022-02-25',
    level: 3
  },
  {
    count: 0,
    date: '2022-02-26',
    level: 0
  },
  {
    count: 7,
    date: '2022-02-27',
    level: 3
  },
  {
    count: 4,
    date: '2022-02-28',
    level: 2
  },
  {
    count: 7,
    date: '2022-03-01',
    level: 3
  },
  {
    count: 1,
    date: '2022-03-02',
    level: 1
  },
  {
    count: 0,
    date: '2022-03-03',
    level: 0
  },
  {
    count: 2,
    date: '2022-03-04',
    level: 1
  },
  {
    count: 0,
    date: '2022-03-05',
    level: 0
  },
  {
    count: 0,
    date: '2022-03-06',
    level: 0
  },
  {
    count: 2,
    date: '2022-03-07',
    level: 1
  },
  {
    count: 0,
    date: '2022-03-08',
    level: 0
  },
  {
    count: 0,
    date: '2022-03-09',
    level: 0
  },
  {
    count: 3,
    date: '2022-03-10',
    level: 2
  },
  {
    count: 2,
    date: '2022-03-11',
    level: 1
  },
  {
    count: 1,
    date: '2022-03-12',
    level: 1
  },
  {
    count: 0,
    date: '2022-03-13',
    level: 0
  },
  {
    count: 0,
    date: '2022-03-14',
    level: 0
  },
  {
    count: 0,
    date: '2022-03-15',
    level: 0
  },
  {
    count: 0,
    date: '2022-03-16',
    level: 0
  },
  {
    count: 2,
    date: '2022-03-17',
    level: 1
  },
  {
    count: 6,
    date: '2022-03-18',
    level: 3
  },
  {
    count: 0,
    date: '2022-03-19',
    level: 0
  },
  {
    count: 5,
    date: '2022-03-20',
    level: 2
  },
  {
    count: 0,
    date: '2022-03-21',
    level: 0
  },
  {
    count: 2,
    date: '2022-03-22',
    level: 1
  },
  {
    count: 3,
    date: '2022-03-23',
    level: 2
  },
  {
    count: 9,
    date: '2022-03-24',
    level: 4
  },
  {
    count: 4,
    date: '2022-03-25',
    level: 2
  },
  {
    count: 0,
    date: '2022-03-26',
    level: 0
  }
];

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  // const [results, setResults] = useState([]);

  // const { statsQuery, data } = useQuery(QUERY_STATS);
  // const { habitsQuery, habits } = useQuery(QUERY_TYPES);

  // // Method to get calender and set results
  // const getCalender = async () => {
  //   const response = await search();
  //   console.log(response)
  //   //setResults(response.data.data);
  // };

  
  // useEffect(() => {
  //   getCalender();
  // }, []);


  // try {
  //   const { data } = await statsQuery({
  //     variables: { bookId },
  //   });

  //   // upon success, remove book's id from localStorage
  //   removeBookId(bookId);
  // } catch (err) {
  //   console.error(err);
  // }


//   return (
//     <div>
//       {/* Pass our results to the ResultsList component to map over */}//need to work 
//       <div>
//       <ResultList results={results} />
//       </div>
//     </div>
//   );

    return (<ActivityCalendar
              blockMargin={5}
              blockRadius={17}
              blockSize={24}
              theme={{
                level0: '#F0F0F0',
                level1: '#C4EDDE',
                level2: '#7AC7C4',
                level3: '#F73859',
                level4: '#384259'
              }}
              data={data}
              hideTotalCount={true}
  />);
}

export default SearchResultContainer;
