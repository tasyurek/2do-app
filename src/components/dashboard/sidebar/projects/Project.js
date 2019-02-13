import React, { Component } from "react";
import projectFilter from "../../../../store/actions/projectFilter";
import { connect } from "react-redux";
import ProjectSettings from "./ProjectSettings";
import setActiveProject from "../../../../store/actions/setActiveProject";

class Project extends Component {
  state = { active: false, hover: false, openSettings: false };

  handleClick = () => {
    // this.props.filterProject(this.props.project.id);
    this.props.setActiveProject(this.props.project.id);
    this.setState({ active: true });
  };

  mouseEnter = () => {
    this.setState({ hover: true });
  };

  mouseLeave = () => {
    this.setState({ hover: false });
  };

  handleSettings = () => {
    this.setState(state => ({ openSettings: !state.openSettings }));
  };

  render() {
    let project = this.props.project;
    let isActive = this.props.active ? "active" : "inActive";
    let cogAnimation = this.state.openSettings ? "open-cog-animation" : "";

    return (
      <div
        className="project"
        id={isActive}
        onClick={this.handleClick}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div className="project-header">
          <p className="project-title">{project.title}</p>
          {((this.props.active && this.state.hover) ||
            this.state.openSettings) && (
            <i
              className="fas fa-cog"
              id={cogAnimation}
              onClick={this.handleSettings}
            />
          )}
        </div>

        {this.props.active && (
          <div className="project-body">
            {this.state.openSettings && <ProjectSettings />}
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterProject: id => dispatch(projectFilter(id)),
    setActiveProject: id => dispatch(setActiveProject(id))
  };
};
/*
const mapStateToProps = state => {
  return {
    project: state.projectReducer
  };
};
*/
export default connect(
  null,
  mapDispatchToProps
)(Project);
