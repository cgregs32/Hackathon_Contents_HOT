import React, { Component } from 'react';
import { Header, Card, Button, Input, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Turn this component into MenuCards (parent that loops thrpough and renders each card)
// Create a MenuCard component
// render MenuCard component instead of your current card
// Move current card into new MenuCard comp

class MenuCard extends Component {
  state = { editing: false, item: this.props.menus.item, price: this.props.menus.price }

  getMenu = () => {
    const { menus } = this.props;
    return menus.map(menu => {
      return (
        <Card key={menu.id}>
          <Card.Content>
            <Card.Header>
              {this.state.editing ? 
              <Input type='text' defaultValue={this.state.item} /> :
              <Link to='/'>{menu.item} - ${menu.price}</Link> 
              }
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Segment>
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
            </Segment>
          </Card.Content>
        </Card>
      )
    })
  }

  deleteItem = () => {
    console.log('Delete')
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    return (
      <Segment>
        <Card.Group itemsPerRow={2}>
          {this.getMenu()}
        </Card.Group>
      </Segment>
    );
  }
}

export default connect()(MenuCard);
