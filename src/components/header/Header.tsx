import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  page: string;
  path: string;
}

interface Props {
  page: string;
}

export const Header = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(props.page);

  const HeaderLink = (props: HeaderLinkProps) => {
    return (
      <Link
        to={`/${props.path}`}
        className={`header-item ${currentPage === props.page ? 'active' : ''}`}
        onClick={() => setCurrentPage(props.page)}
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
