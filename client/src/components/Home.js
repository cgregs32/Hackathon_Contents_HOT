import React, { Component } from 'react';
import { Header, Image, Segment, Card, Grid, List } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div style={styles.homeImage}>
        <Segment style={styles.opacity}>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card style={styles.titleCard}>
                  <Card.Content>
                    <Header as='h1' style={styles.cardHeader}>New Golden Dragon</Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description style={styles.titleDescription}>
                      Welcome to One of the Finest Chinese Restaurants in Salt Lake City
                      the Best Dim Sum in Salt Lake City!
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
                <List style={styles.hoursList}>
                  <List.Item>
                    <Header as='h3'>HOURS:</Header>
                    </List.Item>
                  <List.Item>Sunday 10:30AM-10PM</List.Item>
                  <List.Item>Monday 11AM-9:30PM</List.Item>
                  <List.Item>Tuesday 11AM-9:30PM</List.Item>
                  <List.Item>Wednesday 11AM-9:30PM</List.Item>
                  <List.Item>Thursday 11AM-9:30PM</List.Item>
                  <List.Item>Friday 11AM-10PM</List.Item>
                  <List.Item>Saturday 10:30PM-10PM</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
  },
  titleCard: {
    backgroundColor: 'black',
    color: 'white'
  },
  cardHeader: {
    color: '#FFFFF0',
    fontSize: '18',
    textAlign: 'center',
    fontSize: 40
  },
  titleDescription: {
    color: '#FFFFF0',
    textAlign: 'center',
    fontSize: 18
  },
  hoursList: {
    marginTop: 150,
    marginRight: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
}


export default Home;
