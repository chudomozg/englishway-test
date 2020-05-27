import { TIME_FOR_ONE_QUESTION } from "../constants";

const initialStore = {
  questions: [],
  userAnswers: [],
  total: {
    finishedCount: 0,
    totalCount: 0,
    isPaussed: false,
    timeLeft: 0
  },
  loading: false,
  error: null,
  isFinished: false
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

const rootReducer = (state = initialStore, action) => {
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case "FETCH_TEST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_TEST_SUCCES":
      return {
        ...state,
        total: {
          finishedCount: 0,
          totalCount: action.payload.length,
          isPaussed: false,
          timeLeft: action.payload.length * TIME_FOR_ONE_QUESTION
        },
        loading: false,
        questions: action.payload,
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
        isFinished: true
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

    default:
      return state;
  }
};

export default rootReducer;
