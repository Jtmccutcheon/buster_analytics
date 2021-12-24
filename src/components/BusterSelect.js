import { useQuery } from 'graphql-hooks';

const BUSTER_QUERY = `query {
  busters {
    username
    avatarUrl
  }
}`;

export const BusterSelect = ({
  dispatchUserSelectedBusters,
  userSelectedBusters,
}) => {
  const { loading, error, data } = useQuery(BUSTER_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  return (
    <select
      value={'select a buster'}
      onChange={e => {
        if (e.target.value === 'select a buster') return;
        return dispatchUserSelectedBusters({
          type: 'TOGGLE_BUSTER',
          payload: e.target.value,
        });
      }}
    >
      <option value={'select a buster'} disabled>
        select a buster
      </option>
      {data.busters
        .filter(b =>
          userSelectedBusters.length > 0
            ? !userSelectedBusters.includes(b.username)
            : [],
        )
        .map((b, index) => b && <option key={index}>{b.username}</option>)}
    </select>
  );
};