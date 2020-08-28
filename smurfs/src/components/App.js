import React, { Component } from 'react';
import axios from "axios";
import SmurfList from './SmurfList';
import SmurfForm from "./SmurfForm";


 class App extends Component {
    state = {
      smurfs: []
    }
    
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        // console.log(response.data)
        const smurfsList = response.data
        this.setState({smurfs: smurfsList})
      })
      .catch(( err) => (err))
  };
  
  render() {
    return (
      <div>
        <h1>Smurfs 3.0! Again W/ FKN Redux! ;)</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    )
  }
}

export default App
