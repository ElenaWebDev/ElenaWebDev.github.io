
import React, { Component } from 'react';

import data from './my.json';
console.log(data)

export function registerMe(data) {
    return fetch('https://rubizza.com/register', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

class App extends Component {
  render() {
      return(
        
                  <div>
                    <p>{data.secret_code}</p>
                    <p>{data.github}</p>
                    </div>
      )
  }
}

export default App;