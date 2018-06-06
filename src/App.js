import React, { Component } from 'react';
import logo from './logo.png';
import '../node_modules/animate.css/animate.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import './App.css';

import Card from './components/Card'
import CardList from './components/CardList'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'

const quoteURL = 'https://lit-peak-62946.herokuapp.com/insta-quotes'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      quotes: [],
      about: false
    }
  }

  componentDidMount(){
    fetch(quoteURL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          quotes: data.quotes,
        })
      })
    }

  render() {
    var about = this.state.about
    return (
      <div className="App">
        <Header logo={logo}/>
        <main>
          <Card />
          <CardList quotes={this.state.quotes}/>
        </main>
        <Footer />
        {about && <About />}
      </div>
    );
  }
}

export default App;
