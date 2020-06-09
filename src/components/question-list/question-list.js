import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MediaQuery from "react-responsive";

import QuestionItem from "../question-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import fetchTest from "../../actions/fetch-test";

import questionListlWithEwStruct from "../hoc/question-list-with-ew-structure";
import withServiceConsumer from "../hoc/with-service-consumer";

import selectAnswer from "../../actions/select-answer";

class QuestionList extends Component {
  _questionsMap() {
    const { questions, onSelectAnswer, isPaussed } = this.props;
    return questions.map((item, idx) => {
      return (
        <QuestionItem
          idx={idx + 1}
          item={item}
          onSelectAnswer={onSelectAnswer}
          isPaussed={isPaussed}
        />
      );
    });
  }

  render() {
    const carouselOptions = {
      showArrows: true,
      showStatus: false,
      showIndicators: false,
      infiniteLoop: false,
      showThumbs: false,
      useKeyboardArrows: true,
      autoPlay: false,
      stopOnHover: true,
      swipeable: true,
      dynamicHeight: true,
      emulateTouch: false
    };
    return (
      <Fragment>
        <MediaQuery maxWidth={992}>
          <div className="question-items">
            <Carousel {...carouselOptions}>{this._questionsMap()}</Carousel>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={993}>
          <div className="question-items row">{this._questionsMap()}</div>
        </MediaQuery>
      </Fragment>
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

const mapStateToProps = ({
  questions,
  loading,
  error,
  total: { isPaussed }
}) => {
  return { questions, loading, error, isPaussed };
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
