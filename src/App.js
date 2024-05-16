import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import data from '../src/components/data';
import { Accordian, Button } from './components';
import { useState } from 'react';

function App() {

  const[show, setShow] = useState(data.map(() => false));
  const[multView, setMultView] = useState(false);

  function handleClick(index) {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  }

  function handleMultView(index){
    let newShow = [...show];
    newShow = newShow.map((item,current)=> current !== index? false : true )
    setShow(newShow); 
  }

  return (
    <div className="App">
      <h3>Accordian App</h3>
      <Button onClick={() => setMultView(!multView)}/>
      {data.map((item, index) => 
                        <Accordian question={item.question} 
                                  moreInfo={item.answer}
                                  showMore={show[item.id - 1]}
                                  key = {item.id}
                                  onClick={() => {multView ? handleMultView(index) : handleClick(index)}}
                                  />)}
    </div>
  );
}

export default App;
