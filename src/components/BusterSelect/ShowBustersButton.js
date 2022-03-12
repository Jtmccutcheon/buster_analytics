import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';

export const ShowBustersButton = ({ showBusters, setShowBusters }) => (
  <div className="buster_select_container">
    <div
      onClick={() => setShowBusters(!showBusters)}
      className="show_busters_button"
    >
      show busters
      <div className="icon_container">
        {showBusters ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </div>
    </div>
  </div>
);
