import {useEffect, useState } from 'react';
import axios from "axios";


export default function App() {
  const [actresses, setActresses] = useState([]);

  function actressesList () {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
    .then((response) => {
      setActresses(response.data);
      console.log(response.data);
    })
  }
  useEffect(actressesList, []);
  
  return (
    <div>

    </div>
  )
}
