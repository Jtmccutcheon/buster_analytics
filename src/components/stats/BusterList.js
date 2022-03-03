import { getColor } from '../utils/getDarkerColor';
import { shapes } from '../utils/shapes';

export const BusterList = ({
  showMenu,
  data,
  dispatchUserSelectedBusters,
  userSelectedBusters,
}) => {
  const toggleBuster = (buster, index) =>
    dispatchUserSelectedBusters({
      type: 'TOGGLE_BUSTER',
      payload: {
        ...buster,
        fill: getColor(),
        shape: shapes[index],
      },
    });

  const clearBusters = () => dispatchUserSelectedBusters({ type: 'RESET' });

  const selectAll = () => {
    clearBusters();
    data.bustersByYear.forEach((buster, index) =>
      dispatchUserSelectedBusters({
        type: 'TOGGLE_BUSTER',
        payload: {
          ...buster,
          fill: getColor(),
          shape: shapes[index],
        },
      }),
    );
  };

  return (
    <div className="left_busters">
      {showMenu && (
        <div className="list_buttons">
          <button className="list_button" onClick={selectAll}>
            select all
          </button>
          <button className="list_button" onClick={clearBusters}>
            clear
          </button>
        </div>
      )}
      {showMenu &&
        data.bustersByYear.map((b, index) => (
          <div
            key={b.id}
            className="stats_busters"
            onClick={() => toggleBuster(b, index)}
          >
            <div
              className={
                userSelectedBusters.find(q => q.id === b.id)
                  ? 'buster_list_stats'
                  : ''
              }
            >
              {b.username}
            </div>
          </div>
        ))}
    </div>
  );
};
