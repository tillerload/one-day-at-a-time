import app from './firebase.js';
import './App.css';
import {useState, useEffect} from 'react';
import {ref, getDatabase, onValue, push, remove,} from 'firebase/database';
import Form from './comp/Form.js';
import Footer from './comp/Footer';





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

  // This is good to stay here! ^^^


  const handleSubmit = (e) => {
    e.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    push(dbRef, userInput);

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
            <p>one day at a time is a daily mood tracker. Just pop on once a day, enter how you're feeling on that given day from our options and BAM you're all set!</p>
          </div>
        </div>
        
        <div className="user-submit">
          <div className="wrapper">
          <Form
          handleSubmit={handleSubmit}
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
