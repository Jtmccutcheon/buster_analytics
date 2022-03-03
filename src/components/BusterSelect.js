import { useState, useEffect, useRef } from 'react';
import { useQuery } from 'graphql-hooks';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';

const BUSTER_QUERY = `query {
  busters {
    id
    username
    avatarUrl
  }
}`;

export const BusterSelect = ({
  dispatchUserSelectedBusters,
  userSelectedBusters,
  setEndDate,
  setStartDate,
}) => {
  const { loading, error, data } = useQuery(BUSTER_QUERY);
  const [showBusters, setShowBusters] = useState(false);
  const dropdownRef = useRef(null);

  const onClear = () => dispatchUserSelectedBusters({ type: 'RESET' });
  const toggleBuster = username =>
    dispatchUserSelectedBusters({
      type: 'TOGGLE_BUSTER',
      payload: username,
    });

  useEffect(() => {
    const handleOutsideClick = e => {
      if (dropdownRef.current !== null) {
        if (dropdownRef.current.contains(e.target)) {
          return;
        } else {
          setShowBusters(!showBusters);
        }
      }
    };
    if (showBusters) {
      document.addEventListener('mousedown', handleOutsideClick, false);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick, false);
    };
  }, [showBusters]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  return (
    <div className="buster_select_container">
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
      {showBusters && (
        <div ref={dropdownRef} className="buster_select_menu">
          {data.busters.map(b => (
            <div
              key={b.id}
              className="buster_list"
              onClick={() => toggleBuster(b.username)}
            >
              <input
                checked={userSelectedBusters.includes(b.username)}
                type={'checkbox'}
                value={b.username}
                onChange={() => {}}
              ></input>
              {b.username}
            </div>
          ))}
          <div className="button_container">
            <button className="view_button" onClick={onClear}>
              View All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
