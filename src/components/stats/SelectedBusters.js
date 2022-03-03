import { useState } from 'react';
import { format } from 'date-fns';

const DateTooltip = ({ buster }) => {
  const element = document.getElementById(buster.id);
  return (
    <div
      style={{
        backgroundColor: `${buster.fill}`,
        top: `${element.offsetTop}px`,
        left: `${element.offsetLeft + 90}px`,
        borderRightColor: `${buster.fill}`,
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
  );
};

export const SelectedBuster = ({ userSelectedBusters }) => {
  const [hoveredBuster, setHoveredBuster] = useState(null);
  return (
    <div className="busters_array">
      {userSelectedBusters.map(b => {
        return (
          <div className="stats_selected">
            <div>
              <img
                id={b.id}
                className="avatar"
                src={b.avatarUrl}
                alt="discord_ava"
                onMouseEnter={() => setHoveredBuster(b)}
                onMouseLeave={() => setHoveredBuster(null)}
              ></img>
              <div className="stats_selected_buster">
                <div
                  className="color"
                  style={{
                    backgroundColor: b.fill,
                  }}
                ></div>
                {b.username}
              </div>
            </div>
          </div>
        );
      })}
      {hoveredBuster && <DateTooltip buster={hoveredBuster} />}
    </div>
  );
};
