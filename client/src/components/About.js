import React, { Component } from 'react';
import { Header, Image, Segment, Card, Grid, List } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div style={styles.homeImage}>
      <Segment style={styles.opacity}>
      <Header as='h1' textAlign='center'>About New Golden Dragon Chinese Restaurant</Header>
      </Segment>
      </div>
    );
  }
}

const styles = {
  opacity: {
    backgroundColor: 'rgba(200, 200, 200, 0.7)',
    height: '100vh'
  },
  homeImage: {
    backgroundImage: "url(http://res.cloudinary.com/yuriecloud/image/upload/v1515259568/food_small1_qalnzz.jpg)",
    backgroundSize: 'cover'
    
  }
}

export default About;
