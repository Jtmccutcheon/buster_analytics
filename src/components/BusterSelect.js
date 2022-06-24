import { useState, useEffect, useRef } from 'react';
import { useQuery } from 'graphql-hooks';
import { BUSTER_QUERY } from '../queries';
import { Loading } from './common/Loading';
import { Error } from './common/Error';
import { ShowBustersButton } from './BusterSelect/ShowBustersButton';
import { BusterSelectList } from './BusterSelect/BusterSelectList';

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
          return null;
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

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="buster_select_container">
      <ShowBustersButton
        showBusters={showBusters}
        setShowBusters={setShowBusters}
      />
      <BusterSelectList
        showBusters={showBusters}
        dropdownRef={dropdownRef}
        userSelectedBusters={userSelectedBusters}
        busters={data.busters}
        toggleBuster={toggleBuster}
        onClear={onClear}
      />
    </div>
  );
};
