import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';

class Menu extends Component {
  render() {
    return (
      <Segment basic>
      <Header as='h1' textAlign='center'>Menu Component</Header>
      </Segment>
    );
  }
}

export default Menu;
