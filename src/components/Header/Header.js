import React from 'react';
import { connect } from 'react-redux';
import './header.scss';

class Header extends React.Component {

    render() {
        return (
            <div className="main-header">
                <a href="#">
                    <img className="logo-image" src={`${this.props.rootURL}${this.props.logo}`} alt="Moderna"/>
                </a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logo: state.insuranceReducer.logohref,
        rootURL: state.insuranceReducer.rootURL
    };
}

export default connect(mapStateToProps)(Header);
