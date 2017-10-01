import React from 'react';

export default class Idea extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.title = this.props.title;
    this.body = this.props.body;
    this.quality = this.props.quality;

  }
  getQuality() {
    let quality = [ 'swill', 'plausible', 'genius' ];

    return quality[this.quality];
  }
  render() {
    console.info(this)
    return (
      <div>
        <h2>{this.title}</h2>
        <button className='delete'>x</button>
        <p>{this.body}</p>
        <button className='upvote'>up</button>
        <button className='downvote'>down</button>
        <p>{this.getQuality()}</p>
      </div>
    )
  }
};
