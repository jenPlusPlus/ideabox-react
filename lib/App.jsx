import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      body: '',
    }
  }
  updateState(data, property){
    if( property == 'title') {
      this.setState( {
        title: data,
      })
    }
    if( property == 'body') {
      this.setState( {
        body: data,
      })
    }
  }
  setID() {
    this.setState({
      id: Date.now(),
    })
  }
  render() {
    return (
    <div>
      <h1>ideabox</h1>
      <form>
        <input type='text' name='title' placeholder='Title' className='title' value={this.state.title} onChange={ (event) => this.updateState(event.target.value, 'title')}></input>
        <input type='text' name='body' placeholder='body' className='body' value={this.state.body} onChange={ (event) => this.updateState(event.target.value, 'body')}></input>
          <button className='submit' onClick={this.setID}>Save</button>
      </form>
      <Card id={this.state.id} title={this.state.title} body={this.state.body}/>
      <form>
        <input type='search' className='search' placeholder='Search'></input>
      </form>
    </div>
  )
  }
}
