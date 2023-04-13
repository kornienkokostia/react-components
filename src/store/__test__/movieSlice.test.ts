import movieReducer, { setSearch } from '../movieSlice';

describe('movieSlice reducer', () => {
  const initialState = {
    search: '',
  };

  it('should handle setSearch', () => {
    const nextState = movieReducer(initialState, setSearch('test search'));

    expect(nextState.search).toEqual('test search');
  });
});
