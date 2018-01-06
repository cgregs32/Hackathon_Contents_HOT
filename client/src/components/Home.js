import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div style={styles.homeImage}>
        <Segment style={styles.opacity}>
        </Segment>
      </div>
    );
  }
}

const styles = {
  opacity: {
    backgroundColor: 'rgba(200, 200, 200, 0.8)',
    height: '100vh'
  },
  homeImage: {
    backgroundImage: "url(http://res.cloudinary.com/yuriecloud/image/upload/v1515259568/food_small1_qalnzz.jpg)",
    backgroundSize: 'cover'    
  }
}


export default Home;
