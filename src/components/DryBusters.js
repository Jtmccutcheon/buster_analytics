import { useQuery } from 'graphql-hooks';
import { differenceInDays } from 'date-fns';
import { DEFAULT_QUERY } from '../queries';
import { Loading } from './common/Loading';
import { Error } from './common/Error';

export const DryBusters = () => {
  const { data, loading, error } = useQuery(DEFAULT_QUERY);
  console.log({ data });
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="dry_busters">
      {data.busters.map(b => {
        return (
          <div key={b.username}>
            <div className="dry_days">
              <div className="dry_names">{b.username}: </div>{' '}
              {differenceInDays(
                new Date(),
                new Date(b.datesWon[b.datesWon.length - 1]),
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
