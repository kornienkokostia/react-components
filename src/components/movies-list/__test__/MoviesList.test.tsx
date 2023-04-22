import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { MoviesList } from '../MoviesList';
import store from '../../../store/store';

describe('MoviesList', () => {
  it('should render the component', () => {
    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );
    expect(screen.getByText('Popular Movies')).toBeInTheDocument();
  });
});
