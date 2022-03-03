import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <div className="header_cont">
        <Link to="/" className="header_item">
          Home
        </Link>
        <Link to="/stats" className="header_item">
          Stats
        </Link>
        <Link to="/history" className="header_item">
          History
        </Link>
      </div>
    </div>
  );
};
