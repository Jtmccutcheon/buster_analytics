export const BusterUsernames = ({
  userSelectedBusters,
  dispatchUserSelectedBusters,
}) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {userSelectedBusters.map((u, index) => {
        const { username, avatarUrl } = JSON.parse(u);
        console.log(username, avatarUrl);
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#36393F',
              color: 'white',
              borderRadius: '44px',
              padding: '7px 32px',
              margin: '1rem .25rem 0 .25rem',
              textOverflow: 'ellipsis',
              maxHeight: '32px',
            }}
          >
            <img
              alt="buster"
              style={{
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                marginRight: '8px',
              }}
              src={avatarUrl}
            />
            <div>{username}</div>{' '}
            <div
              style={{
                marginLeft: '8px',
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
                  payload: username,
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
