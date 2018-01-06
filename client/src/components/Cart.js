import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Table, Header } from 'semantic-ui-react'
import axios from 'axios'

class Cart extends React.Component {
  state = { cartItems: [], loaded:false }

  componentDidMount() {
    axios.get('/api/cart/show')
      .then(res => {
        this.setState( { cartItems: res.data, loaded: !this.state.loaded } )
    })
  }

  mapCartItems = () => {
    const { cartItems } = this.state
    return cartItems.map(item => {
      return (
        <Table.Row>
          <Table.Cell collapsing>
            {item.item}
          </Table.Cell>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell collapsing textAlign='right'>{item.price}$</Table.Cell>
        </Table.Row>
      )
    })
  }

  cart_total = () => {
    const { cartItems } = this.state
    const total = cartItems.reduce( (item, total) =>{
      debugger
      item.price + total
    })
  }

  render () {
    const {loaded} = this.state
    return (
      <Segment className='container'>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Shopping Cart!</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { loaded ? this.mapCartItems() : null }
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Total: { loaded ? this.cart_total() : null }</Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    )
  }
}

export default Cart;
