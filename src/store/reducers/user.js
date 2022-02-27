const ADD_USER = 'ADD_USER';

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

const initialState = [
  {
    details: {},
  },
];
export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          details: action.user,
        },
      ];
    default:
      return state;
  }
}
