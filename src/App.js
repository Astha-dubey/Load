import React, { useEffect, useState } from 'react'

import './App.css';
function App() {
  const [count, setCount ]=useState(0);
  useEffect(() => {
    console.warn("useEffect")
  },[]);
  return (
    <div className='app'>

      <h1>useEffect is React({count})</h1>
      <button onClick= {()=>setCount(count +1)}>Update counter</button>
    


    </div >
  );
}
export default App;