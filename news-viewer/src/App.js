import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  return <NewsList />;
};

// 66a50d56ff854b35a789ddcaf933be58
// test: https://jsonplaceholder.typicode.com/todos/1
//
 
// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = () => {
//     axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//       setData(response.data);      
//     });
//   };

//   const onClick2 = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=66a50d56ff854b35a789ddcaf933be58',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={onClick2}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   );
// };

export default App;