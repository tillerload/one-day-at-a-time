import app from './firebase.js';
import './App.css';
import {useState, useEffect} from 'react';
import {ref, getDatabase, onValue, push, remove,} from 'firebase/database';
import Form from './Form.js';
import Footer from './Footer';



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

  const [userInput, setUserInput] = useState('');





  useEffect(() => {
    document.title = 'one day at a time';

    const database = getDatabase(app);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const updatedDbInfo = [];
      const data = response.val();
      for (let key in data ) {
        updatedDbInfo.push({key: key, name: data[key]});
      }
      setMoods(updatedDbInfo);
    })

  }, [])


  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    push(dbRef, userInput);

  }

  const handleClearBoard = (e) => {
    e.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    remove(dbRef)
  }


  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>one day at a time</h1>
        </div>
      </header>

      <section className="about-and-submit">
        <div className="about-section">
          <div className="wrapper">
            <h2>How does it work?</h2>
            <p>idk</p>
          </div>
        </div>
        
        <div className="user-submit">
          <div className="wrapper">
          <Form
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleClearBoard={handleClearBoard}
          />
          </div>
        </div>

      </section>

      <section className="calendar">
        <div className="wrapper">
          <ul>
            {
              moods.map(moods => {
                return(
                  <li key={moods.key} className={ moods.name }>
                    {moods.name}
                  </li>
                )
              })
            }
          </ul>
      
          

        </div>
      </section>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
