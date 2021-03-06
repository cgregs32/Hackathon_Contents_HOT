import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
          <Link to='/menu'>
            <Menu.Item name='Menu' style={styles.textOnPage}/>
          </Link>
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' style={styles.textOnPage}/>
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' style={styles.textOnPage}/>
        </Link>
        <Link to='/menu'>
          <Menu.Item name='Menu' style={styles.textOnPage}/>
        </Link>
        <Link to='/about'>
          <Menu.Item name='About' style={styles.textOnPage}/>
        </Link>
        <Link to='/cart'>
          <Menu.Item name='Cart' style={styles.textOnPage}/>
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' style={styles.textOnPage}/>
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  textOnPage: {
    fontFamily: 'Libre Baskerville'
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
