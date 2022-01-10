import { useState } from 'react';
import {
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  Tooltip,
  LabelList,
} from 'recharts';

export const BusterFunnel = ({ data }) => {
  const [tt, setTT] = useState('');

  const renderTooltip = ({ active, payload }) => {
    if (!active || !payload.length) return null;

    return payload.map(
      (i, index) =>
        i.dataKey === tt && (
          <div
            key={index}
            style={{
              backgroundColor: '#FFF',
              padding: '15px 10px',
              border: '1px solid lightgrey',
            }}
          >
            <div>{i.payload.username}</div>
            <div>wins : {i.value}</div>
          </div>
        ),
    );
  };
  return (
    <ResponsiveContainer width={'50%'} height={800}>
      <FunnelChart onMouseOver={() => setTT('wins')}>
        <Funnel dataKey="wins" data={data} isAnimationActive>
          <Tooltip content={renderTooltip} />
          <LabelList
            position="center"
            fill="black"
            stroke="black"
            dataKey="username"
          />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
};
