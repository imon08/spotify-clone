export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.loga(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
