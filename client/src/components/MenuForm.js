import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

class MenuForm extends Component {
  state = { item: '', price: ''}

  handleItem = (e) => {
    this.setState({ item: e.target.value })
  }

  handlePrice = (e) => {
    this.setState({ price: e.target.value })
  }

  handleSubmit = (e) => {
    const {item, price} = this.state
    const menu = { item, price }
    e.preventDefault();
    axios.post('/api/menus', { menu })
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Dish Name</label>
          <input placeholder='Dish Name' value={this.state.item} onChange={this.handleItem} />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input placeholder='"00.00"' value={this.state.price} onChange={this.handlePrice} />
        </Form.Field>
        <Button floated='left' type='submit' color='green' onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default MenuForm;