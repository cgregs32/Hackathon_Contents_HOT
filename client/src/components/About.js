import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Segment basic>
      <Header as='h1' textAlign='center'>About Component</Header>
      </Segment>
    );
  }
}

export default About;
