import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Header extends Component {
    render() {

        const authButton = () => {
            if (this.props.authenticated) {
                return (
                    <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
                )
            }
            return (
                <button onClick={() => this.props.authenticate(true)}>Sign In</button>
            )
        }

        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {authButton()}
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.authentication
    };
}

export default connect(mapStateToProps, actions)(Header);