import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

export const ArrowIcon = ({ toggleMenu, showMenu }) => (
  <div onClick={toggleMenu} className="left_arrow">
    {showMenu ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
  </div>
);
