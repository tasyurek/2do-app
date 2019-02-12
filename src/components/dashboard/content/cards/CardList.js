import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import AddCard from "./AddCard";

class CardList extends Component {
  render() {
    const cards = this.props.cards;
    const projects = this.props.projects;

    let activeProject = projects.filter(project => project.active);
    activeProject = activeProject[0];
    console.log(activeProject);
    let cardList = cards.filter(card => {
      return card.pId === activeProject.id;
    });

    cardList = cardList.map(card => {
      return (
        <div key={card.id}>
          <Card title={card.title} id={card.id} />
        </div>
      );
    });
    return (
      <div className="content">
        <h3 className="dark-text">Cards</h3>
        <div className="card-list">
          {cardList}
          <AddCard pId={activeProject.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardReducer,
    projects: state.projectReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(CardList);
