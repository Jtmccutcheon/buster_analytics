import React, { useRef, useLayoutEffect, useState } from 'react';
import format from 'date-fns/format';

export const DateTooltip = ({ buster, width }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const element = document.getElementById(buster?.id);
  const target = element?.getBoundingClientRect();

  const verticalValue = target?.y < 560 ? true : false;
  const top = target?.top - window.scrollY;
  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, [element]);
  return (
    buster && (
      <div
        ref={targetRef}
        style={{
          backgroundColor: `${buster.fill}`,
          top: `${
            verticalValue
              ? top + target?.height + 5
              : top -
                target?.height -
                dimensions.height +
                element.offsetHeight -
                11
          }px`,
          left: `${element?.offsetLeft - 25}px`,
          borderBottomColor: `${buster.fill}`,
          borderTopColor: `${buster.fill}`,
        }}
        className={
          verticalValue
            ? 'stats_dates_container_below'
            : 'stats_dates_container_above'
        }
      >
        <div className="stats_dates_title">
          {buster.datesWon.length} Date(s) Won
        </div>
        {buster?.datesWon?.map(d => (
          <div key={d} className="stats_dates">
            {format(new Date(d), 'MM/dd')}
          </div>
        ))}
      </div>
    )
  );
};
