export const BusterUsernames = ({
  userSelectedBusters,
  dispatchUserSelectedBusters,
}) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {userSelectedBusters.map((u, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#393C42',
              color: 'white',
              borderRadius: '44px',
              padding: '7px 32px',
              margin: '1rem .25rem 0 .25rem',
              textOverflow: 'ellipsis',
              maxHeight: '32px',
            }}
          >
            <div>{u}</div>{' '}
            <div
              style={{
                marginLeft: '12px',
                backgroundColor: '#FF0000',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
              }}
              onClick={e => {
                dispatchUserSelectedBusters({
                  type: 'TOGGLE_BUSTER',
                  payload: u,
                });
              }}
            >
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};
