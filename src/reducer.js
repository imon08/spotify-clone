export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQC_S5Y4XUvFBz8t3ipQ-1ixQyBvNK1rr12SKCjqAYlmfqq_oGVrP3PNOH7hKceasYQqeszsZrZZGU4x76DbCOnOoVoFHkvfbD5feD2vfTAcVgTLshj2Gd-ln8tnJJlE_ZguPYH8fb5oyGCOG0cFPu3aHpOh-ZKPQ0sp36nqpKcG99jC3c5JBT56UB9M-URFtRSpwxxU7UXQ6ujaXcRc",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
