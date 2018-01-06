import React, { Component } from 'react';
import { Header, Card, Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MenuCard extends Component {
  state = { editing: false}

  getMenu = () => {
    const { menus } = this.props;
    return menus.map(menu => {
      return (
        <Card>
          <Card.Content>
            <Card.Header>
              <Link to='/'>{menu.item} - ${menu.price}</Link>
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button
                basic
                color='green'
                onClick={() => this.toggleEdit()}
              >Edit</Button>
              <Button
                basic
                color='red'
                onClick={() => this.deleteItem()}
              >Delete</Button>
            </div>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    if (this.state.editing)
      return (
        <div>
          <Header textAlign='center' as='h2'>Menu</Header>
          <Card.Group itemsPerRow={2}>
            {this.editMenu()}
          </Card.Group>
        </div>
      );
    else
      return (
        <div>
          <Header textAlign='center' as='h2'>Menu</Header>
          <Card.Group itemsPerRow={2}>
            {this.getMenu()}
          </Card.Group>
        </div>
      );
  }
}

export default connect()(MenuCard);
