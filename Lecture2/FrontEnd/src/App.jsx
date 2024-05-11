import { useEffect, useState } from 'react'
import axios from  'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>(setJokes(response.data)))
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    < >
    <div>
      <h1>Jokes</h1>
      <p>{jokes.length}</p>
        {
          jokes.map((jokes)=>(
            <p>
              {jokes.text}
            </p>
          ))
        }
    </div>
    </>
  )
}

export default App
