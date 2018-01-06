import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Table, Header } from 'semantic-ui-react'
import axios from 'axios'

class Cart extends React.Component {
  state = { cartItems: [], loaded:false, total:'' }

  componentDidMount() {
    axios.get('/api/cart/show')
      .then(res => {
        this.setState( { cartItems: res.data, loaded: !this.state.loaded } )
    })
    axios.get('/api/cart/total')
      .then(res => {
        debugger
        this.setState( { total: res.data } )
      })
  }

  mapCartItems = () => {
    debugger
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

  render () {
    return (
      <Segment className='container'>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Shopping Cart!</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.loaded ? this.mapCartItems() : null }
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Total: </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    )
  }
}

export default Cart;
