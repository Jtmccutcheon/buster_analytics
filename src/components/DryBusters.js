import { useQuery } from 'graphql-hooks';
import { differenceInDays, format } from 'date-fns';
import { DRY_QUERY } from '../queries';
import { Loading } from './common/Loading';
import { Error } from './common/Error';
import { Buster } from './season/Buster';

export const DryBusters = () => {
  const { data, loading, error } = useQuery(DRY_QUERY);
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div>
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
      <div>
        <h1 className="dry_title">Longest Dry Streaks</h1>
        <div className="dry_busters">
          {data.busterLongestDry
            .sort((a, b) => b.diff - a.diff)
            .map(b => {
              return (
                <div key={b.username} className="dryest_container">
                  <div className="dry_days">
                    <Buster buster={b} width={609} />
                    <div className="dry_longest">
                      <div className="dry_streak">
                        {b.diff.toString().padStart(23)}
                        <span className="dry_title_small"> days between</span>
                      </div>
                      <div>{format(new Date(b.d1), 'MM dd yyyy')}</div>-
                      <div>{format(new Date(b.d2), 'MM dd yyyy')}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
