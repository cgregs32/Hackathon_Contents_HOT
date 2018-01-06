import React, { Component } from 'react';
import { Header, Card, Button, Input, Image, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuCard from './MenuCard';

class Menu extends Component {
  state = { editing: false, menus: [] }

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => {
      this.setState( {menus: res.data})
      })
      .catch( err => {
        console.log(err)
      })
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleChange = (e) => {
    this.setState({ menus: e.target.value})
  }

  editItem = () => {
    const { id } = this.state.menus;
    axios.put(`/api/menus/${id}`), { menus: this.state.menus.item}
  }

  editMenu = () => {
    <Input type='text' defaultValue={this.state.menus.item} onChange={this.handleChange} />
  }

  deleteItem = () => {
    console.log('Delete')
  }

  render() {
    return (
      <div>
        <MenuCard menus={this.state.menus} />
      </div>
    )
  }
}

export default connect()(Menu);
