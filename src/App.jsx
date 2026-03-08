import {useEffect, useState } from 'react';
import axios from "axios";


export default function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  function actressesList () {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
    .then((response) => {
      setActresses(response.data);
      console.log(response.data);
    })
  }
  function actorsList () {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
    .then((response) => {
      setActors(response.data);
      console.log(response.data);
    })
  }
  useEffect(actressesList, []);
  useEffect(actorsList, []);

  return (
    <section className="container">
      <section className='row'>
        <section className="actress col-6">
          <h1>Actresses List</h1>
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
                <p className="actress-awards">
                  {actresses.awards}
                </p>
              </div>
              <div className="actress-image">
                <img src={actresses.image} className="actress-img" alt={actresses.name} 
                  onError={(event) => {
                    event.currentTarget.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCTwsgxYd4LhL6lORmydMfwB6unVuBUv0Q97l6hOSE7iJYJEpg2nDXOGxQISWeTzOnSE&usqp=CAU"
                  }}
                />
              </div>
            </article>
          ))}
        </section>
        <section className="actors col-6">
          <h1>Actors List</h1>
          {actors.map(actors => (
            <article key={actors.id}>
              <div className="actress-info">
                <p className="actress-name">
                  {actors.name}
                </p>
                <p className="actress-birth-year">
                  {actors.birth_year}
                </p>
                <p className="actress-nationality">
                  {actors.nationality}
                </p>
                <p className="actress-biography">
                  {actors.biography}
                </p>
                <p className="actress-awards">
                  {actors.awards}
                </p>
              </div>
              <div className="actress-image">
                <img src={actors.image} className="actress-img" alt={actors.name} 
                  onError={(event) => {
                    event.currentTarget.src = "https://cdn.vectorstock.com/i/500p/28/59/flat-style-male-avatar-person-icon-vector-59492859.jpg"
                  }}
                />
              </div>
            </article>
          ))}
        </section>
      </section>
      <hr />
    </section>
  )
}
