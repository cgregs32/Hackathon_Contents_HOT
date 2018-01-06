import React, { Component } from 'react';
import { Header, Image, Segment, Card, Grid, List, Container } from 'semantic-ui-react';
import '../index.css';

class Home extends Component {
  render() {
    return (
      <div style={styles.homeImage}>
        <Container>
        <Segment style={styles.opacity}>

          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card color='yellow' style={styles.titleCard}>
                  <Card.Content>
                    <Header as='h1' style={styles.cardHeader}>New Golden Dragon</Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description style={styles.titleDescription}>
                      Welcome to One of the Finest Chinese Restaurants in Salt Lake City! Owned and operated by the renowned chef Xiao, New Golden Dragon—specializing in Dim Sum and Asian cuisine—has raised the bar for Chinese food in Utah.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>
                <Card color='yellow' style={styles.hoursCard}>
                  <Card.Content>
                    <Header as='h3' style={styles.hoursHeader}>HOURS</Header>
                  </Card.Content>
                    <Card.Content>
                      <Card.Description>
                        <List style={styles.hoursList}>
                          <List.Item>Sunday 10:30AM-10PM</List.Item>
                          <List.Item>Monday 11AM-9:30PM</List.Item>
                          <List.Item>Tuesday 11AM-9:30PM</List.Item>
                          <List.Item>Wednesday 11AM-9:30PM</List.Item>
                          <List.Item>Thursday 11AM-9:30PM</List.Item>
                          <List.Item>Friday 11AM-10PM</List.Item>
                          <List.Item>Saturday 10:30PM-10PM</List.Item>
                        </List>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <Header as='h3' style={styles.hoursHeader}>CONTACT</Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <List style={styles.contactInfo}>
                        <List.Item>Phone: (801)487-9888</List.Item>
                        <List.Item>Fax: (801)483-1222</List.Item>
                        <br />
                        <List.Item>
                          Address:
                          <br />
                          1716 South State Street
                          <br />
                          Salt Lake City, UT 84115
                        </List.Item>
                      </List>
                  </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>
        </Container>
      </div>
    );
  }
}

const styles = {
  opacity: {
    backgroundColor: 'rgba(200, 200, 200, 0.6)',
  },
  homeImage: {
    backgroundImage: "url(http://res.cloudinary.com/yuriecloud/image/upload/v1515259568/food_small1_qalnzz.jpg)",
    backgroundSize: 'cover'
  },
  titleCard: {
    backgroundColor: 'black',
    color: 'white',
    width: '347px',
    fontFamily: 'Libre Baskerville'
  },
  cardHeader: {
    color: '#FFFFF0',
    fontSize: '18',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Libre Baskerville',

  },
  titleDescription: {
    color: '#FFFFF0',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Libre Baskerville'
  },
  hoursCard: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '347px'
  },
  hoursHeader: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Libre Baskerville',

  },
  hoursList: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Libre Baskerville'
  },
  contactInfo: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Libre Baskerville'
  }
}


export default Home;
