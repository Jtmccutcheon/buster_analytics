import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <div className="header_cont">
        <Link to="/" className="header_item">
          All Time
        </Link>
        <Link to="/season" className="header_item">
          Season
        </Link>
        <Link to="/history" className="header_item">
          History
        </Link>
      </div>
    </div>
  );
};
