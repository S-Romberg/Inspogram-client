import React, { Component } from 'react';
import logo from './logo.png';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../node_modules/animate.css/animate.min.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import './App.css';

import CardList from './components/CardList.jsx'
import About from './components/About.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Love from './components/Love'
import Travel from './components/Travel'
import Create from './components/Create'
import Edit from './components/Edit'

const quoteURL = 'https://lit-peak-62946.herokuapp.com/insta-quotes'
const imageURL = 'https://lit-peak-62946.herokuapp.com/insta-images'



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      quotes: [],
      images: [],
      editId: 0,
      quote: '',
      author: '',
      category: '',
      previewQuote: '',
      previewAuthor: '',
      sent: false,
      loaded: false
    }
  }

  componentDidMount(){
    fetch(quoteURL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data.quotes,
        })
      })
    fetch(imageURL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        images: data.images,
        loaded: true
      })
    })
    this.addQuote = this.addQuote.bind(this)
    this.onChange = this.onChange.bind(this)
    }


    onChange (event) {
      this.setState({  
        [event.target.name]: event.target.value
      })
    }


    deleteQuote = (event) => {
      event.preventDefault()
      console.log('clicked')
      let deleteURL = `${quoteURL}/${this.state.editId}`
      fetch(deleteURL, {
        method: "DELETE",
        headers: new Headers({"content-type": "application/json"})
      })
      .then(alert('deleted'))
    }
    
    editQuote = (event) => {
      event.preventDefault()
      var PUTurl = `${quoteURL}/${this.state.editId}`
      console.log(PUTurl)
      fetch(PUTurl, {
        method: "PUT",
        headers: new Headers({"content-type": "application/json"}),
        body: JSON.stringify({
          quote: this.state.quote,
          author: this.state.author
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          sent: true
        })
      })
    }
    clearProps = () => {
      this.setState({
        quote: '',
        author: '',
        category: '',
        sent: false
      })
    }

    addQuote = (event) => {
      event.preventDefault()
      this.setState({id: this.state.quotes.length})
      fetch(quoteURL, {
        method: "POST",
        headers: new Headers({"content-type": "application/json"}),
        body: JSON.stringify({
          id: this.state.id, 
          category: this.state.category,
          quote: this.state.quote,
          author: this.state.author 
        })
      })
      .then(response => response.json)
      .then(response => {
        this.setState({
          sent: true
        })
      })
    }
    
    renderCard = (event) => {
      var quote = event.target.parentNode.parentNode.querySelector('.quote')
      var author = event.target.parentNode.parentNode.querySelector('.author')
      this.setState({
        editId: quote.id,
        quote: quote.innerHTML,
        author: author.innerHTML })
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Header clearProps={this.clearProps} logo={logo}/>
          <Switch>
              {this.state.loaded ? 
               <main>
                <Route exact path='/' component={() => <CardList renderCard={this.renderCard} images={this.state.images} quotes={this.state.quotes}/>} />
                <Route exact path='/love' component={() => <Love renderCard={this.renderCard} images={this.state.images} quotes={this.state.quotes}/>} />
                <Route exact path='/travel' component={() => <Travel renderCard={this.renderCard} images={this.state.images} quotes={this.state.quotes}/>} />
                <Route exact path='/add' render={() => <Create sent={this.state.sent} addQuote={this.addQuote} onChange={this.onChange} quote={this.state.quote} author={this.state.author} category={this.state.category} />} />
                <Route exact path='/about' component={() => <About />} />
                <Route exact path='/edit' render={() => <Edit sent={this.state.sent} previewQuote={this.state.previewQuote} previewAuthor={this.state.previewAuthor} onChange={this.onChange} quote={this.state.quote} author={this.state.author} editId={this.state.editId} editQuote={this.editQuote} deleteQuote={this.deleteQuote} getId={this.getId} />} />
              </main>
              : <div className='loading'>
                  <h3 >Loading...</h3> 
                </div>}
          </Switch>
          <Footer />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
