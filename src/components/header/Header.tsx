import React from 'react';
import './header.scss';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";


interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

const withRouter = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) => {
 
  return function res (props: Omit<Props, keyof WithRouterProps>) {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component
        {...(props as Props)}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  };
};

interface HeaderProps extends WithRouterProps{
  children?: React.ReactNode
}

interface PageState {
  currentPage: string;
}
class Header extends React.Component<HeaderProps, PageState > {
  
  state = {
    currentPage: 'Home'
  };
  
  
  handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const link = e.target as HTMLElement
    const page = link.textContent as string
    this.setState({ currentPage: page });
  }

  componentDidMount(): void {
    const { location } = this.props;
   switch (location.pathname) {
    case '/':
      this.setState({ currentPage: 'Home' })
      break;
    case '/about':
      this.setState({ currentPage: 'About' })
      break;
    default:
      this.setState({ currentPage: 'Error' })
      break;
   }
  }

  render(): JSX.Element {
    
    return (
      <div className="header-container">
        <div className="header">
          <Link to={'/'} className="header-item" onClick={(e) => this.handleLinkClick(e)}>
            Home
          </Link>
          <Link to={'/about'} className="header-item" onClick={(e) => this.handleLinkClick(e)}>
            About
          </Link>
        </div>
        <div className='header-current-page'>{`${this.state.currentPage} Page`}</div>
      </div>
    );
  }
  
};

export default withRouter(Header)
