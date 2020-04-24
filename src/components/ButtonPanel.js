import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  renderButton(name) {
    return (
      <Button
        buttonName={name}
        clickHandler={this.handleClick}
      />
    );
  }

  render() {
    return (
      <div className="btn-panel">
        <div className="group1 board-row">
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷', true)}
        </div>
        <div className="group2 board-row">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('x', true)}
        </div>
        <div className="group3 board-row">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-', true)}
        </div>
        <div className="group4 board-row">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+', true)}
        </div>
        <div className="group5 board-row">
          {this.renderButton('0', false, true)}
          {this.renderButton('.')}
          {this.renderButton('=', true)}
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
