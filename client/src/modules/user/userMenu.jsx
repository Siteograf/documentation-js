import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { userLogout } from './_actions/userActions';

class UserMenu extends Component {
  render() {
    return (
      <Nav className="nav justify-content-end">
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>

        <NavItem>
          <Link to="/catalog" className="nav-link">Catalog</Link>
        </NavItem>

        {!_.isEmpty(this.props.userInfo) &&
        <NavItem>
          <Link to="/user/list" className="nav-link">List</Link>
        </NavItem>
        }

        {_.isEmpty(this.props.userInfo) &&
        <NavItem>
          <Link to="/user/register" className="nav-link">Register</Link>
        </NavItem>
        }

        {_.isEmpty(this.props.userInfo) &&
        <NavItem>
          <Link to="/user/login" className="nav-link">Login</Link>
        </NavItem>
        }

        {!_.isEmpty(this.props.userInfo) &&
        <NavItem>
          <span className="nav-link btn-link" onClick={() => this.props.userLogout()}>Logout</span>
        </NavItem>
        }
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserMenu));