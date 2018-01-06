import React, { Component } from 'react';
import { Header, Card, Button, Input, Image, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuCard from './MenuCard';
import MenuForm from './MenuForm';

class Menu extends Component {
  state = { menus: [], form: false }

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => {
      this.setState( {menus: res.data})
      })
      .catch( err => {
        console.log(err)
      })
  }

  newItem = () => {
  }

  toggleForm = () => {
    this.setState({ form: !this.state.form })
  }

  render() {
    if (this.state.form)
    return (
      <Segment>
        <Header textAlign='center' as='h2'>Menu</Header>
        <MenuForm />
        <Button 
          primary 
          color='green'
          onClick={() => this.toggleForm()}
          >Cancel</Button>
        <MenuCard menus={this.state.menus} />
      </Segment>
    )
    else 
    return (
      <Segment>
        <Header textAlign='center' as='h2'>Menu</Header>
        <Button
          primary
          color='green'
          onClick={() => this.toggleForm()}
        >Add New Item</Button>
        <MenuCard menus={this.state.menus} />
      </Segment>
    )
  }
}

export default connect()(Menu);
