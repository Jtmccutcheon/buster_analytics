import format from 'date-fns/format';

export const DateTooltip = ({ buster, width }) => {
  if (!buster) return null;
  const element = document.getElementById(buster.id);
  const extraTopOffset = width > 600 ? 98 : 68;
  return (
    buster &&
    width > 600 && (
      <div
        style={{
          backgroundColor: `${buster.fill}`,
          top: `${element.offsetTop + extraTopOffset}px`,
          left: `${element.offsetLeft - 25}px`,
          borderBottomColor: `${buster.fill}`,
        }}
        className="stats_dates_container"
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
