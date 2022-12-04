

const Form = ({ handleInputChange, handleSubmit}) => {


  return(
  <form action="submit">
        <fieldset>
          <legend>How are you feeling today?</legend>

          <label htmlFor="happy">Happy</label>
          <input type="radio" name='mood-options' value={'happy'} id='happy-feeling' onChange={handleInputChange}/>

          <label htmlFor="okay">Okay</label>
          <input type="radio" name='mood-options' value={'okay'} id='okay-feeling' onChange={handleInputChange}/>

          <label htmlFor="sad">Sad</label>
          <input type="radio" name='mood-options' value={'sad'} id='sad-feeling' onChange={handleInputChange}/>
        </fieldset>

        <button onClick={handleSubmit}>Submit</button>
        
      </form>
  )
}

export default Form;