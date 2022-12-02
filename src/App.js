import app from './firebase.js';
import './App.css';
import {useState, useEffect} from 'react';
import {ref, getDatabase, onValue} from 'firebase/database';


// Setup a state variable to store the user input data
// create a map loop for our data from firebase, itll be an array so this lets me edit the new array created through map
// need to make use of useEffect so that everytime a user makes an input and in turn our code updates useState, it doesnt cause a re render to the whole page
// make use of database, dbref and all those good prebuilt components
// use on click and such to handle changes in form
// use handleSubmit for the submit button
// using the array from map ill be able to display the user choice on the page
// for creating the clear button i think ill just use an if statement that looks for the array length. array.length === 31 {whatever the function ends up being to overwrite the currently displayed data. something silly im sure}
// things to remember:
  // Adding a key to values created from user inputs
  // this is react do not touch the document 
  // use {} when i want to insert vanilla JS


function App() {

  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      console.log(response.val());
      const updatedDbInfo = [];
      const data = response.val();
      for (let key in data) {
        console.log(data[key]);
        updatedDbInfo.push(data[key]);
      }
      setMoods(updatedDbInfo);
    })

  }, [])


  return (
    <div className="App">
      <header>
        <nav>
          <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Calendar</a></li>
          </ul>
        </nav>
        <h1>one day at a time</h1>
      </header>

      <section className="about-section">
        <h2>How does it work?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero dolores adipisci quidem totam nisi voluptas, beatae dolor, nulla porro id odio ullam voluptatum eos provident vero reiciendis quis labore?</p>
      </section>

      <form action="submit">
        <fieldset>
          <legend>How are you feeling today?</legend>

          <label htmlFor="happy">Happy</label>
          <input type="radio" name='mood-options' value={'happy'} id='happy-feeling' />

          <label htmlFor="okay">Okay</label>
          <input type="radio" name='mood-options' value={'okay'} id='okay-feeling' />

          <label htmlFor="sad">Sad</label>
          <input type="radio" name='mood-options' value={'sad'} id='sad-feeling' />
        </fieldset>
      </form>

      {/* This is just gonna be the displayed data section */}
      <div>
        <ul>
          {
            moods.map((moods) => {
              return(
                <li>
                  {moods}
                </li>
              )
            })
          }
        </ul>
      </div>
      

      
    </div>
  );
}

export default App;
