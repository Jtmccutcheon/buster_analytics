import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { DateTooltip } from './DateToolTip';
import { Buster } from './Buster';

export const SelectedBuster = ({ userSelectedBusters, showMenu }) => {
  const { width } = useWindowSize();
  const [hoveredBuster, setHoveredBuster] = useState(null);
  useEffect(() => {
    document.addEventListener('scroll', setHoveredBuster(null), false);
    return () => {
      document.removeEventListener('mousedown', setHoveredBuster(null), false);
    };
  }, []);
  return (
    userSelectedBusters.length > 0 && (
      <div className="busters_array">
        {userSelectedBusters.map(buster => {
          return (
            <Buster
              buster={buster}
              width={width}
              setHoveredBuster={setHoveredBuster}
            />
          );
        })}
        <DateTooltip buster={hoveredBuster} width={width} />
      </div>
    )
  );
};
