import { useReducer, useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { allTimeQuery } from './utils/allTimeQuery';
import { initialBusters, busterReducer } from '../reducers/busterReducer';
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
import { BusterUsernames } from './filters/BusterUsername';
import { BusterDates } from './filters/BusterDates';
import { formattedData } from './utils/formatData';

export const Graphs = () => {
  const [userSelectedBusters, dispatchUserSelectedBusters] = useReducer(
    busterReducer,
    initialBusters,
  );
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const query = allTimeQuery({ startDate, endDate, userSelectedBusters });

  const { data } = useQuery(query.string, query.var);

  const d = formattedData(data);

  return (
    <div className="container">
      <BusterSelect
        userSelectedBusters={userSelectedBusters}
        dispatchUserSelectedBusters={dispatchUserSelectedBusters}
        setEndDate={setStartDate}
        setStartDate={setStartDate}
      />
      <BusterUsernames
        userSelectedBusters={userSelectedBusters}
        dispatchUserSelectedBusters={dispatchUserSelectedBusters}
      />
      <BusterDates setStartDate={setStartDate} setEndDate={setEndDate} />
      <BusterLine data={d} />
      <BusterBar data={d} />
      <BusterCompose data={d} />
      <BusterTree data={d} />
      <BusterPieB data={d} />
      <BusterPieA data={d} />
      <BusterRadical data={d} />
      <BusterRadar data={d} />
      <div className="funnel">
        <BusterFunnel data={d} />
      </div>
    </div>
  );
};
