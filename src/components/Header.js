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
        <Link to="/awards" className="header_item">
          Awards
        </Link>
        <Link to="/dry" className="header_item">
          Dry Streaks
        </Link>
      </div>
    </div>
  );
};
