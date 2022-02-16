import { BehaviorSubject } from "rxjs";

const initialState = {
  detail: {
    name: "Ludobia",
    email: "",
  },
  job: "",
  isLoading: false,
  initialized: false,
};

let state = initialState;

const subject = new BehaviorSubject(initialState);

const userStore = {
  init: (newState) => {
    if (!initialState.initialized) {
      state = {
        ...state,
        initialized: true,
        isLoading: false,
      };
      subject.next(initialState);
    }
  },
  observe: (funcCallBack) => {
    subject.subscribe(funcCallBack, console.error);
  },
  userNameChange: (name) => {
    state = {
      ...state,
      detail: {
        ...state.detail,
        name,
      },
    };

    subject.next(state);
  },
  userChangeJob: (job) => {
    state = {
      ...state,
      job,
    };

    subject.next(state);
  },
  setLoading: (isLoading) => {
    state = {
      ...state,
      isLoading,
    };
  },
  initialState,
};

export default userStore;
