import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import Header from "./Header";

export default class Page extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <>
        <style jsx="true">{`
                  .wrap {
                    margin-top: 20px;
                    margin-bottom: 20px;
                  }
                `}</style>
        <Header title={this.props.title}/>,
        <Container className="wrap">
          {this.props.children}
        </Container>
      </>
    );
  }
}