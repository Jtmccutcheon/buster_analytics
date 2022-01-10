import { useState, useEffect, useRef } from 'react';
import { useQuery } from 'graphql-hooks';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';

const BUSTER_QUERY = `query {
  busters {
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

  const onClear = () => {
    setEndDate('');
    setStartDate('');
    dispatchUserSelectedBusters({ type: 'RESET' });
  };

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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          onClick={() => setShowBusters(!showBusters)}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#0250BB',
            padding: '12px 20px',
            borderRadius: '44px',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          show busters
          <div style={{ paddingLeft: '12px' }}>
            {showBusters ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </div>
        </div>
      </div>
      {showBusters && (
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            top: '7%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            zIndex: '2',
            backgroundColor: '#DBDCDD',
            padding: '1rem',
            borderRadius: '8px',
            minWidth: '200px',
            display: 'grid',
            gridTemplateColumns: '200px 200px',
          }}
        >
          {data.busters.map(
            (b, index) =>
              b && (
                <div
                  key={index}
                  style={{
                    textAlign: 'left',
                    margin: '0 0 1rem 0',
                    cursor: 'pointer',
                  }}
                  onClick={() =>
                    dispatchUserSelectedBusters({
                      type: 'TOGGLE_BUSTER',
                      payload: b.username,
                    })
                  }
                >
                  <input
                    checked={userSelectedBusters.includes(b.username)}
                    type={'checkbox'}
                    value={b.username}
                  ></input>
                  {b.username}
                </div>
              ),
          )}
          <br />
          <div
            style={{
              gridColumnStart: 'span 2',
            }}
          >
            <button style={{ cursor: 'pointer' }} onClick={onClear}>
              View All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
