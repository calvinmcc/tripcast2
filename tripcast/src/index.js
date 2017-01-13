import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';
// create a new component, this component should produce html

class App extends Component{
  render() {
    return (
      <div>
        <Map />
     </div>
   );
 }
}

ReactDOM.render(<App/>, document.getElementById('root'));
