import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './styles.css';

const users = [
  { id: 0, name: 'Michelle', friends: [1, 2, 3] },
  { id: 1, name: 'Sean', friends: [0, 3] },
  { id: 2, name: 'Kim', friends: [0, 1, 3] },
  { id: 3, name: 'David', friends: [1, 2] },
];

const find = id => users.find(user => user.id === id);

const Person = ({ match }) => {
  const person = find(Number(match.params.id));

  return (
    <div>
      <h3>{person.name}'s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${Number(id)}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  );
};

function App() {
  return (
    <Router className="App">
      <Person match={{ params: { id: 0 }, url: '' }} />
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
