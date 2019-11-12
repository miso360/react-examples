import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
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