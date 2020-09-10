import React from 'react';
import './App.css';
import {  DatePicker } from 'antd';
import { reduxForm, Field } from 'redux-form';

function App() {
  return (
    <div className="App">
      <br></br><br></br><br></br><br></br>
      < form>
       <br></br><br></br><br></br>
       
        <label class="" for="Tweet">ENTER TWEET :</label><br></br>
			<textarea name="Tweet"></textarea>
       <br></br><br></br>
        <>
    <h>SELECT DATE</h>
    <br></br><br></br>
    <DatePicker placeholder="select date" />
    <br></br><br></br>
    <button type="submit">SUBMIT</button>
  </>

        <br></br><br></br><br></br><br></br><br></br><br></br>
      </form>
       
      
    </div>
  );
  
}

export default App;
