import ClearButton from "./ClearButton";

const Form = ({ handleInputChange, handleSubmit }) => {

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    console.log(setUserInput)
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
          <ClearButton />
        </div>
        
      </form>
  )
}

export default Form;