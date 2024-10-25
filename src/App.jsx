import { useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [Ques, setQues] = useState('');
  const [ans, setAns] =useState('');

  async function generateAnswer() {
    try {
      console.log("loading");
      const response = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDD7X4xSUDrydKTIOcvAO7-sj8dJr6pIJo',
        method: 'POST',
        data: {
          contents: [{ parts: [{ text: Ques}] }]
        }
      });
      setAns(
        response['data']['candidates'][0]['content']['parts'][0]['text']);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <h1>ABHI PUCHO ABHI ANSWER</h1>
      <textarea type="text" value={Ques} onChange={
        (e) => setQues(e.target.value)}
        cols='70' rows='5' />
      <br />
      <button onClick={generateAnswer}>Get Answer</button>
      <br />

      <pre>{ans}</pre>

    </>
  );
}

export default App;
