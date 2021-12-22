import { useReducer, useState } from 'react';
import { useQuery } from 'graphql-hooks';
import {
  DEFAULT_QUERY,
  BUSTERS_NO_DATES,
  BUSTERS_WITHIN,
  BUSTERS_SELECTED_WITHIN,
} from '../constants';
import { BusterSelect } from './BusterSelect';
import { BusterLine } from './graphs/BusterLine';
import { BusterBar } from './graphs/BusterBar';
import { BusterCompose } from './graphs/BusterCompose';
import { BusterPieA } from './graphs/BusterPieA';
import { BusterPieB } from './graphs/BusterPieB';
import { BusterRadar } from './graphs/BusterRadar';
import { BusterRadical } from './graphs/BusterRadical';
import { BusterFunnel } from './graphs/BusterFunnel';
import { BusterTree } from './graphs/BusterTree';
import { BusterUsernames } from './active_filters/BusterUsername';
import { BusterDates } from './active_filters/BusterDates';
import { formattedData } from './utils/formatData';

const initialBusters = [];

function busterReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_BUSTER':
      return state.includes(action.payload)
        ? state.filter(i => i).filter(i => i !== action.payload)
        : [...state, action.payload];

    case 'RESET':
      return initialBusters;
    default:
      throw new Error();
  }
}

export const Graphs = () => {
  const [userSelectedBusters, dispatchUserSelectedBusters] = useReducer(
    busterReducer,
    initialBusters,
  );
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const defaultFilter = !(
    userSelectedBusters.length > 0 &&
    startDate.length > 0 &&
    endDate.length > 0
  );

  const bustersWithin =
    userSelectedBusters.length < 1 &&
    startDate.length > 0 &&
    endDate.length > 0;

  const bustersNoDate =
    userSelectedBusters.length > 0 && !startDate.length && !endDate.length;

  const bustersSelectedWithin =
    userSelectedBusters.length > 0 &&
    startDate.length > 0 &&
    endDate.length > 0;

  const getQueryString = () =>
    ({
      [defaultFilter]: DEFAULT_QUERY,
      [bustersWithin]: BUSTERS_WITHIN,
      [bustersNoDate]: BUSTERS_NO_DATES,
      [bustersSelectedWithin]: BUSTERS_SELECTED_WITHIN,
    }.true);

  const query = {
    string: getQueryString(),
    var: { variables: { usernames: userSelectedBusters, startDate, endDate } },
  };

  const { loading, error, data } = useQuery(query.string, query.var);

  const onClear = () => {
    setEndDate('');
    setStartDate('');
    dispatchUserSelectedBusters({ type: 'RESET' });
  };
  // console.log({ startDate, endDate, userSelectedBusters });
  // console.log(getQueryString({ userSelectedBusters, startDate, endDate }));
  // console.log(data);

  return (
    <div style={{ margin: '1rem' }}>
      <BusterSelect
        userSelectedBusters={userSelectedBusters}
        dispatchUserSelectedBusters={dispatchUserSelectedBusters}
      />
      <BusterUsernames
        userSelectedBusters={userSelectedBusters}
        dispatchUserSelectedBusters={dispatchUserSelectedBusters}
      />
      {userSelectedBusters.length > 0 && (
        <button onClick={onClear} style={{ margin: '1rem' }}>
          clear
        </button>
      )}
      <BusterDates setStartDate={setStartDate} setEndDate={setEndDate} />
      <BusterLine data={formattedData(data)} />
      <BusterBar data={formattedData(data)} />
      <BusterCompose data={formattedData(data)} />
      <BusterTree data={formattedData(data)} />
      <BusterPieB data={formattedData(data)} />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <BusterRadical data={formattedData(data)} />
        <BusterPieA data={formattedData(data)} />
        <BusterRadar data={formattedData(data)} />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <BusterFunnel data={formattedData(data)} />
      </div>
    </div>
  );
};
