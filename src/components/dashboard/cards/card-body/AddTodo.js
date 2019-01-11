import React, { Component } from "react";
import { connect } from "react-redux";
import addTodo from "../../../../store/actions/addTodo";

export class AddTodo extends Component {
  state = { content: "", show: false, error: "" };

  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  handleCancel = () => {
    this.setState(prevState => ({
      show: !prevState.show,
      content: "",
      error: ""
    }));
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.content.trim()) {
      this.props.addTodo(this.state.content, this.props.cardId);
      this.setState({ content: "", show: false, error: "" });
    } else {
      this.setState({ error: "It should not be empty!" });
    }
  };

  render() {
    const error = this.state.error;

    const input = this.state.show ? (
      <div className="form">
        <div className="input-bar">
          <textarea onChange={this.handleChange} value={this.state.content} />
        </div>
        <div className="button-bar">
          <button className="button" onClick={this.handleSubmit}>
            Add
          </button>
          <button className="button right" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
        <span className="error">{error}</span>
      </div>
    ) : (
      <div>
        <i className="fas fa-plus-circle icon" onClick={this.handleClick} />
      </div>
    );

    return <div className="add-todo">{input}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (content, cardId) => dispatch(addTodo(content, cardId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
