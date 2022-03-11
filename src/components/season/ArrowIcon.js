import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

export const ArrowIcon = ({ toggleMenu, showMenu }) => (
  <div
    onClick={toggleMenu}
    className={
      showMenu ? 'left_arrow' : ['left_arrow', 'left_arrow_collapsed'].join(' ')
    }
  >
    {showMenu ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
  </div>
);
