import { BusterSelectListItem } from './BusterSelectListItem';
import { ViewAllButton } from './ViewAllButton';

export const BusterSelectList = ({
  showBusters,
  dropdownRef,
  userSelectedBusters,
  busters,
  toggleBuster,
  onClear,
}) =>
  showBusters && (
    <div ref={dropdownRef} className="buster_select_menu">
      {busters.map(b => (
        <BusterSelectListItem
          buster={b}
          toggleBuster={toggleBuster}
          userSelectedBusters={userSelectedBusters}
        />
      ))}
      <ViewAllButton onClear={onClear} />
    </div>
  );
