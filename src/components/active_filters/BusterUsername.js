import { useQuery } from 'graphql-hooks';

const BUSTER_QUERY = `query {
  busters {
    username
    avatarUrl
  }
}`;

export const BusterUsernames = ({
  userSelectedBusters,
  dispatchUserSelectedBusters,
}) => {
  const { loading, error, data } = useQuery(BUSTER_QUERY);

  const getAvatarUrl = (u, data) => {
    data.busters.find(b => (b.username = u));
  };

  console.log(data);
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {userSelectedBusters.map((u, index) => {
        if (data.busters) {
          console.log(getAvatarUrl(u, data));
        }
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
            <div>{u}</div>{' '}
            <div
              style={{
                marginLeft: '16px',
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
