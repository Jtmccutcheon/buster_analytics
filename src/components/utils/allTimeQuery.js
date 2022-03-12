import {
  DEFAULT_QUERY,
  BUSTERS_NO_DATES,
  BUSTERS_WITHIN,
  BUSTERS_SELECTED_WITHIN,
} from '../../queries';

export const allTimeQuery = ({ startDate, endDate, userSelectedBusters }) => {
  const defaultFilter = !(
    userSelectedBusters.length > 0 &&
    startDate.length > 0 &&
    endDate.length > 0
  );

  // no buseter selected but date range is passed
  const bustersWithin =
    userSelectedBusters.length < 1 &&
    startDate.length > 0 &&
    endDate.length > 0;

  // busters selected but no date range passed
  const bustersNoDate =
    userSelectedBusters.length > 0 && !startDate.length && !endDate.length;

  // busters selected and date range is passed
  const bustersSelectedWithin =
    userSelectedBusters.length > 0 &&
    startDate.length > 0 &&
    endDate.length > 0;

  const queryString = {
    [defaultFilter]: DEFAULT_QUERY,
    [bustersWithin]: BUSTERS_WITHIN,
    [bustersNoDate]: BUSTERS_NO_DATES,
    [bustersSelectedWithin]: BUSTERS_SELECTED_WITHIN,
  }.true;

  return {
    string: queryString,
    var: { variables: { usernames: userSelectedBusters, startDate, endDate } },
  };
};
