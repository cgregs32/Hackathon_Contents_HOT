import React, { Component } from 'react';
import { Header, Image, Segment, Card, Grid, List, Container } from 'semantic-ui-react';
import Iframe from 'react-iframe'

class About extends Component {
  render() {
    return (
      <div style={styles.homeImage}>
      
        <Container >
          <Segment style={styles.opacity}>        
            <Grid>
              {/* <Grid.Row> */}
                <Grid.Column width={6}>
                  <div style={styles.title}>
                    <Header as='h1' style={styles.textOnPage}>New Golden Dragon Chinese Restaurant</Header>
                  </div>
                </Grid.Column>
                <Grid.Column width={10}>
                  <div style={styles.map}>
                    <Iframe 
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3160629798485!2d-111.8911381846347!3d40.733070344263275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528acceb3c90a9%3A0x9c09e68e403252!2s1716+S+State+St%2C+Salt+Lake+City%2C+UT+84115!5e0!3m2!1sen!2sus!4v1515276241821" 
                        width="500" 
                        height="350" 
                        frameborder="0" 
                        style="border:0" 
                        allowfullscreen 
                      />
                  </div>
                </Grid.Column>
              {/* </Grid.Row> */}
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }  
}

//       <div style={styles.homeImage}>
//       <Container>
//         <Segment style={styles.opacity}>
//         <div style={styles.title}>
//           <Header as='h1' textAlign='center' style={styles.textOnPage}>About New Golden Dragon Chinese Restaurant</Header>
//         </div>
//         <div style={styles.map}>
//           <Iframe 
//           url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3160629798485!2d-111.8911381846347!3d40.733070344263275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528acceb3c90a9%3A0x9c09e68e403252!2s1716+S+State+St%2C+Salt+Lake+City%2C+UT+84115!5e0!3m2!1sen!2sus!4v1515276241821" 
//           width="500" 
//           height="350" 
//           frameborder="0" 
//           style="border:0" 
//           allowfullscreen />
//         </div>
//         </Segment>
//       </Container>
//       </div>
//     );
//   }


const styles = {
  opacity: {
    backgroundColor: 'rgba(200, 200, 200, 0.8)',
    height: '100vh',
    display: 'flex',

  },
  homeImage: {
    backgroundImage: "url(http://res.cloudinary.com/yuriecloud/image/upload/v1515259568/food_small1_qalnzz.jpg)",
    backgroundSize: 'cover',
    
  },
  textOnPage: {
    fontFamily: 'Libre Baskerville',
    justifyContent: 'center',
  },
  map: {
    marginRight: '20em',
    justifyContent: 'flex-end'
  },
  title: {
    justifyContent: 'center',
  },
}

export default About;
