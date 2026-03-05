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
    <section className="container">
      <h1>Cast Fetching</h1>
      <section className="actresses">
        {actresses.map(actresses => (
          <article key={actresses.id}>
            
            <div className="actress-info">
              <p className="actress-name">
                {actresses.name}
              </p>
              <p className="actress-birth-year">
                {actresses.birth_year}
              </p>
              <p className="actress-nationality">
                {actresses.nationality}
              </p>
              <p className="actress-biography">
                {actresses.biography}
              </p>
              <div className="actress-image">
              <img src={actresses.image} alt="actress image" />
              </div>
              <p className="actress-awards">
                {actresses.awards}
              </p>
            </div>
          </article>
        ))}

      </section>
    </section>
  )
}
