import {ref, getDatabase, remove,} from 'firebase/database';
import app from '../firebase.js';

const ClearAllButton = () => {

  const fullClearCalendar = (e) => {
    e.preventDefault();

    const database = getDatabase(app);
    const dbRef = ref(database);

    remove(dbRef)
  }

  return(
    <button onClick={fullClearCalendar}>Clear</button>
  )
}

export default ClearAllButton;