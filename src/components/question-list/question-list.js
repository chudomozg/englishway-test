import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import QuestionItem from "../question-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import fetchTest from "../../actions/fetch-test";

import questionListlWithEwStruct from "../hoc/question-list-with-ew-structure";
import withServiceConsumer from "../hoc/with-service-consumer";

import selectAnswer from "../../actions/select-answer";

class QuestionList extends Component {
  render() {
    const { questions, onSelectAnswer } = this.props;
    return (
      <div className="question-items row">
        {questions.map(item => {
          return (
            <div key={item.id}>
              <QuestionItem item={item} onSelectAnswer={onSelectAnswer} />
            </div>
          );
        })}
      </div>
    );
  }
}

class QuestiionListContainers extends Component {
  componentDidMount() {
    this.props.fetchTest();
  }
  render() {
    const { loading, error, ...props } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <QuestionList {...props} />;
  }
}

const mapStateToProps = ({ questions, loading, error }) => {
  return { questions, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    fetchTest: fetchTest(service, dispatch),
    onSelectAnswer: (questionId, AnswerIdx) =>
      dispatch(selectAnswer(questionId, AnswerIdx))
  };
};

export default compose(
  questionListlWithEwStruct(),
  withServiceConsumer(),
  connect(mapStateToProps, mapDispatchToProps)
)(QuestiionListContainers);
