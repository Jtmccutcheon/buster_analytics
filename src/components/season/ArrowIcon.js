import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

export const ArrowIcon = ({ toggleMenu, showMenu }) => (
  <div
    onClick={toggleMenu}
    className={
      showMenu ? 'left_arrow' : ['left_arrow', 'left_arrow_collapsed'].join(' ')
    }
  >
    <div className="left_arrow_container">
      {showMenu ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
    </div>
  </div>
);
