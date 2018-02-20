// LYRIC INFO
const songLyricsArray = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye".split(', ');

// INITIAL REDUX STATE
const initialState = {
  songLyricsArray: songLyricsArray,
  arrayPosition: 0,
}

//REDUCER WILL GO HERE
const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'NEXT_LYRIC':
      let newArrayPosition = state.arrayPosition + 1;
      let newState = {
        songLyricsArray: state.songLyricsArray,
        arrayPosition: newArrayPosition,
      }
      return newState;
      default:
        return state;
  }
}


//JEST TESTS + SETUP WILL GO HERE
const { expect } = window;

expect(reducer(initialState, {type: null })).toEqual(initialState);

expect(reducer(initialState, {type: 'NEXT_LYRIC'})).toEqual({
  songLyricsArray: songLyricsArray,
  arrayPosition: 1
//this tests that our reducer has a NEXT_LYRIC action type that can advance the arrayPosition slice of our state.
});


//REDUX STORE
const { createStore } = Redux;
//Above imports createStore() method from Redux library, it is required.
const store = createStore(reducer);
//uses createStore() to construct a Redux store named store. When creating a store, we must always provide a REDUCER as an arg.
console.log(store.getState());

// CLICK LISTENER
const userClick = () => {
  console.log('click');
}
