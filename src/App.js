import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div>
      <h2>Welcome To Susi React Bootstrap Tutorial</h2>
      {/*<h3>Its an application that use an API to fetch images with their
         info, and display them using react bootstrap. Its also use
      react hooks</h3>*/}
      {data.map((character) => (
        <card className="img" key={character.id} style={{ width: "15rem"}}>
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>{character.species}</Card.Text>
            <Button variant="primary" href={character.url} target="_blank">
              More Info
            </Button>
          </Card.Body>
        </card>
      ))}
    </div>
  );
}

export default App;
