import ClearAllButton from "./ClearAllButton";
import {ref, getDatabase, onValue, push, remove,} from 'firebase/database';
import {useState, useEffect} from 'react';
import app from '../firebase.js';

const Form = () => {

  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    console.log(setUserInput)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    push(dbRef, userInput);

  }

  return(
  <form action="submit">

        <fieldset>
          <legend>How are you feeling today?</legend>

          <label htmlFor="happy">Happy</label>
          <input type="radio" name='mood-options' className="happy-input" value={'hap'} id='happy-feeling' onChange={handleInputChange}/>

          <label htmlFor="okay" className="okay-label">Okay</label>
          <input type="radio" name='mood-options' className="okay-input" value={'okay'} id='okay-feeling' onChange={handleInputChange}/>

          <label htmlFor="sad">Sad</label>
          <input type="radio" name='mood-options' className="sad-input" value={'sad'} id='sad-feeling' onChange={handleInputChange}/>
        </fieldset>

        <div className="input-buttons">
          <button onClick={handleSubmit}>Submit</button>
          <ClearAllButton />
        </div>
        
      </form>
  )
}

export default Form;