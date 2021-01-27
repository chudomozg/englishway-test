import { TIME_FOR_ONE_QUESTION } from "../constants";

const initialStore = {
  questions: [],
  userAnswers: [],
  profLevels: [],
  total: {
    finishedCount: 0,
    totalCount: 0,
    isPaussed: true,
    timeLeft: 0
  },
  langName: null,
  langId: null,
  title: null,
  loading: false,
  error: null,
  isFinished: false,
  timerId: null,
  isSubmitted: false,
  userName: null,
  userEmail: null,
  userPhone: null,
  testResult: {
    correctAnswersCount: null,
    incorrectAnswersCount: null,
    userLevel: null
  },
  sureCloseConfWindShow: false,
  smallTimeLeftNotifWindShow: false,
  finishTestMsgWindowShow: false
};

const updateUserAnswers = (
  { userAnswers: oldUserAnswers, total },
  newUserAnswer
) => {
  const { finishedCount } = total;
  const { questionId: newQuestionId } = newUserAnswer;
  const itemIdx = oldUserAnswers.findIndex(({ questionId }) => {
    return questionId == newQuestionId;
  });
  if (itemIdx == -1) {
    return {
      userAnswers: [...oldUserAnswers, newUserAnswer],
      total: { ...total, finishedCount: finishedCount + 1 }
    };
  }
  return {
    userAnswers: [
      ...oldUserAnswers.slice(0, itemIdx),
      newUserAnswer,
      ...oldUserAnswers.slice(itemIdx + 1)
    ]
  };
};

const getUserLevel = (correctAnswersCount, profLevels) => {
  const lev = profLevels.reduce((level, { answCount, name }) => {
    return correctAnswersCount >= Number(answCount) ? name : level;
  }, 0);
  return lev;
};

const getTestResult = (questions, userAnswers, profLevels) => {
  const correctAnswersCount = userAnswers.reduce(
    (counter, { questionId, answerIdx }) => {
      const answ = questions.find(question => {
        return question.id == questionId;
      }).correctAnswerIdx;
      if (answ == answerIdx) {
        counter++;
      }
      return counter;
    },
    0
  );
  const incorrectAnswersCount = questions.length - correctAnswersCount;
  return {
    correctAnswersCount,
    incorrectAnswersCount,
    userLevel: getUserLevel(correctAnswersCount, profLevels)
  };
};

const rootReducer = (state = initialStore, action) => {
  // console.log(state);
  // console.log(action.type);
  switch (action.type) {
    case "FETCH_TEST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_TEST_SUCCES":
      const { timeLeft, questions, ...options } = action.payload;
      return {
        ...state,
        total: {
          finishedCount: 0,
          totalCount: questions.length,
          isPaussed: false,
          timeLeft: timeLeft
        },
        questions,
        ...options,
        loading: false,
        error: null
      };

    case "FETCH_TEST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "USER_SELECT_ANSWER":
      return {
        ...state,
        ...updateUserAnswers(state, action.payload)
      };

    case "TEST_FINISHED":
      return {
        ...state,
        isFinished: true,
        total: {
          ...state.total,
          timeLeft: 0
        },
        testResult: getTestResult(
          state.questions,
          state.userAnswers,
          state.profLevels
        )
      };

    case "SET_TIMER":
      return {
        ...state,
        timerId: action.payload
      };

    case "TIMER_TICK":
      return {
        ...state,
        total: {
          ...state.total,
          timeLeft: state.total.timeLeft - 1000
        }
      };

    case "CHANGE_USER_EMAIL":
      return {
        ...state,
        userEmail: action.payload
      };

    case "CHANGE_USER_NAME":
      return {
        ...state,
        userName: action.payload
      };

    case "CHANGE_USER_PHONE":
      return {
        ...state,
        userPhone: action.payload
      };

    case "FETCH_SEND_MAIL_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "FETCH_SEND_MAIL_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "FETCH_SEND_MAIL_SUCCES":
      return {
        ...state,
        loading: false,
        isSubmitted: true
      };

    case "PAUSE_TOGGLED":
      return {
        ...state,
        total: {
          ...state.total,
          isPaussed: !state.total.isPaussed
        }
      };

    case "TOGGLE_SURE_CONFIRM_WINDOW":
      return {
        ...state,
        sureCloseConfWindShow: !state.sureCloseConfWindShow
      };

    case "TOGGLE_SMALL_TIME_LEFT_NOTIFICATION_WINDOW_SHOW":
      return {
        ...state,
        smallTimeLeftNotifWindShow: !state.smallTimeLeftNotifWindShow
      };

    case "TOGGLE_FINISH_TEST_MESSAGE_WINDOW_SHOW":
      return {
        ...state,
        finishTestMsgWindowShow: !state.finishTestMsgWindowShow
      };

    case "SET_TIME_LEFT":
      return {
        ...state,
        total: {
          ...state.total,
          timeLeft: action.payload
        }
      };

    default:
      return state;
  }
};

export default rootReducer;
