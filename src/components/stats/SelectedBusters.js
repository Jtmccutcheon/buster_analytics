import { useState } from 'react';
import { format } from 'date-fns';
import useWindowSize from '../../hooks/useWindowSize';
import { getSymbol } from '../utils/getSymbol';

const DateTooltip = ({ buster, width }) => {
  const element = document.getElementById(buster.id);
  const extraTopOffset = width > 600 ? 98 : 68;
  return (
    buster &&
    width > 600 && (
      <div
        style={{
          backgroundColor: `${buster.fill}`,
          top: `${element.offsetTop + extraTopOffset}px`,
          left: `${element.offsetLeft}px`,
          borderBottomColor: `${buster.fill}`,
        }}
        className="stats_dates_container"
      >
        Dates Won
        {buster?.datesWon?.map(d => (
          <div key={d} className="stats_dates">
            {format(new Date(d), 'MM/dd')}
          </div>
        ))}
      </div>
    )
  );
};

export const SelectedBuster = ({ userSelectedBusters, showMenu }) => {
  const { width } = useWindowSize();
  const [hoveredBuster, setHoveredBuster] = useState(null);
  return (
    userSelectedBusters.length > 0 && (
      <div className="busters_array">
        {userSelectedBusters.map(b => {
          return (
            <div
              key={b.id + b.shape + b.color}
              id={b.id}
              className="stats_selected"
            >
              <div className="seleceted_group">
                <img
                  className={width > 600 ? 'avatar' : 'small_avatar'}
                  src={b.avatarUrl}
                  alt="discord_ava"
                  onMouseEnter={() => setHoveredBuster(b)}
                  onMouseLeave={() => setHoveredBuster(null)}
                ></img>
                <div className="stats_selected_buster">
                  <div className="stats_selected_buster_username">
                    {b.username}
                  </div>
                </div>
              </div>

              <div style={{ height: '20px', width: '20px' }}>
                <svg
                  style={{
                    overflow: 'visible',
                    marginRight: '1rem',
                    height: '20px',
                    width: '20px',
                  }}
                >
                  {getSymbol(b.shape, b.fill)}
                </svg>
              </div>
            </div>
          );
        })}
        {hoveredBuster && <DateTooltip buster={hoveredBuster} width={width} />}
      </div>
    )
  );
};
