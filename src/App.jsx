import React,{ useState } from 'react';
import { useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index,setIndex] = useState(0);
  const {id,image,name,title,quote} = people[index];

  useEffect(()=>{
    const interval = setInterval(()=>{
      index === people.length-1 ? setIndex(0) : setIndex(index +1);
    },3000);
    return ()=> clearInterval(interval) //use cleanup 
  },[index]) // useeffect runs when index changes


  return (
    <div className="app">
      <h1>Slider</h1>
      <main>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="mid-container">
        <FiChevronLeft className='chevron' onClick={()=> index === 0 ? setIndex(people.length-1) : setIndex(index -1)}/>
          <div className="person">
            <h3 className='name'>{name}</h3>
            <p className='job'>{title}</p>
          </div>
          <FiChevronRight className='chevron' onClick={()=> 
            index === people.length-1 ? setIndex(0) : setIndex(index +1)}/>
        </div>
        <div className="review">
          <p>{quote}</p>
        </div>
      </main>
    </div>
  )
}

export default App
