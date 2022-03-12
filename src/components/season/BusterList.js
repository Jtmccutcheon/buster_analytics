import { getColor } from '../utils/getDarkerPastelColor';
import { shapes } from '../utils/shapes';
import { ArrowIcon } from './ArrowIcon';
import { SelectAndClear } from './SelectAndClear';
import { BusterListItem } from './BusterListItem';

export const BusterList = ({
  showMenu,
  data,
  dispatchUserSelectedBusters,
  userSelectedBusters,
  width,
  toggleMenu,
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

  const leftStyles = {
    [!showMenu]: 'left_collapsed',
    [showMenu]: 'left',
    [showMenu && width < 600]: ['left', 'left_mobile'].join(' '),
  }.true;

  return (
    <div className={leftStyles}>
      <div className={width > 600 ? 'left_busters' : 'left_busters_mobile'}>
        {showMenu && (
          <div>
            <SelectAndClear clearBusters={clearBusters} selectAll={selectAll} />
            {data.bustersByYear.map((b, index) => (
              <BusterListItem
                buster={b}
                toggleBuster={toggleBuster}
                index={index}
                userSelectedBusters={userSelectedBusters}
              />
            ))}
          </div>
        )}
      </div>
      <ArrowIcon toggleMenu={toggleMenu} showMenu={showMenu} />
    </div>
  );
};
