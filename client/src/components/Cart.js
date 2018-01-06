import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Table, Header } from 'semantic-ui-react'
import axios from 'axios'

class Cart extends React.Component {
  state = { cart_items: [] }

  componentDidMount() {
    axios.get('/cart/show')
      .then(res => {
        debugger
        this.setState( { cartItems: res.body } )
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
            Item
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>

              </Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell collapsing textAlign='right'>price</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

export default Cart;
