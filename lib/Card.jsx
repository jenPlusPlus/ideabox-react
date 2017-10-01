import React from 'react';
import Idea from './Idea';

export default class Card extends React.Component {

  render() {
    return (
      <div>
        <Idea id={null} title={''} body={''} quality={0} />
      </div>
    );
  }
};
