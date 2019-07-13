import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withRouter} from 'next/router'
import {Link} from '../routes';

class NavLink extends Component {
  static propTypes = {
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    return [
      <Link key={this.props.route} route={this.props.route}>
        <a className={classNames({
          "nav-link": true,
          "active": this.props.router.route.indexOf(this.props.route) !== -1
        })}>{this.props.title}</a>
      </Link>
    ]
  }
}

export default withRouter(NavLink);