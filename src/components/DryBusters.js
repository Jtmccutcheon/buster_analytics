import { useQuery } from 'graphql-hooks';
import { differenceInDays } from 'date-fns';
import { DEFAULT_QUERY } from '../queries';
import { Loading } from './common/Loading';
import { Error } from './common/Error';
import { Buster } from './season/Buster';

export const DryBusters = () => {
  const { data, loading, error } = useQuery(DEFAULT_QUERY);
  console.log({ data });
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div>
      <h1 className="dry_title">Days Since Last Bust</h1>
      <div className="dry_busters">
        {data.busters
          .sort(
            (a, b) =>
              differenceInDays(
                new Date(),
                new Date(b.datesWon[b.datesWon.length - 1]),
              ) -
              differenceInDays(
                new Date(),
                new Date(a.datesWon[a.datesWon.length - 1]),
              ),
          )
          .map(b => {
            return (
              <div key={b.username}>
                <div className="dry_days">
                  <Buster buster={b} width={609} />
                  {/* <div className="dry_names">{b.username}: </div>{' '} */}
                  {differenceInDays(
                    new Date(),
                    new Date(b.datesWon[b.datesWon.length - 1]),
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
