import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface HeaderLinkProps {
  page: string;
  path: string;
}

export const Header = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setCurrentPage('Home');
        break;
      case '/about':
        setCurrentPage('About');
        break;
      case '/forms':
        setCurrentPage('Forms');
        break;
      default:
        setCurrentPage('Error');
        break;
    }
  }, [location]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const link = e.target as HTMLElement;
    const page = link.textContent as string;
    setCurrentPage(page);
  };

  const HeaderLink = (props: HeaderLinkProps) => {
    return (
      <Link
        to={`/${props.path}`}
        className={`header-item ${currentPage === props.page ? 'active' : ''}`}
        onClick={(e) => handleLinkClick(e)}
      >
        {props.page}
      </Link>
    );
  };

  return (
    <div className="header-container">
      <div className="header">
        <HeaderLink page="Home" path="" />
        <HeaderLink page="About" path="about" />
        <HeaderLink page="Forms" path="forms" />
      </div>
      <div className="header-current-page">{`${currentPage} Page`}</div>
    </div>
  );
};
