import { useState } from 'react';
import './App.css';
import ToDoLi from './ToDoLi';

function App() {

  // use state
  const [inputText, setInputText] = useState('');
  // for set list item store the item
  const [arrayInput, setArrayInput] = useState([]);



  const displayItem = (e) => {
    setInputText('');
    return setArrayInput([...arrayInput, inputText])
  }

  const removeItem = (id) => {
    setArrayInput((item) => {
      // filter kore jodi index na mile taile setare return kora hoiche
      return item.filter((itemElem, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div className='container mx-auto bg-yellow-100 min-h-screen'>
      <h1 className='text-center text-5xl font-bold pt-4'>To Do List</h1>
      <h1 className='text-3xl font-bold text-center pt-4'>Hello everyone. Welcome to my to do list app project.</h1>
      <div className='text-center pt-4'>
        <input type="text" value={inputText} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" 

          // take input value and store it
          onChange={ (e) => {
            setInputText(e.target.value);
          }}
        />
        <button className="btn btn-outline btn-primary" onClick={ displayItem }>
          Primary
        </button>
      </div>
      <div className='text-center pt-4 text-green-400 list-none'>
        <ul className='text-3xl font-bold'>
          {/* display item */}
          {
            arrayInput.map((item, index) => {
              return <ToDoLi
                key={index}
                id={index}
                text={item}
                // perfomr remove part
                onSelect={removeItem}
              />
            })
          }

        </ul>
      </div>
    </div>
  );
}

export default App;
