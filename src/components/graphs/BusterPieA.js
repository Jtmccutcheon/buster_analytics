import { useState } from 'react';
import { ResponsiveContainer, PieChart, Tooltip, Pie } from 'recharts';
import { format } from 'date-fns';

export const BusterPieA = ({ data }) => {
  const [pieTT, setPieTT] = useState('');

  const PieTip = ({ active, payload }) => {
    if (!active || !payload.length) return null;
    return payload.map(
      (i, index) =>
        i.dataKey === pieTT && (
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
            {i.payload.datesWon.map(d => (
              <div>{format(new Date(d), 'MM/dd/yyyy')}</div>
            ))}
          </div>
        ),
    );
  };

  const PieLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer
      style={{ display: 'flex', justifyContent: 'center' }}
      width={'100%'}
      height={600}
    >
      <PieChart onMouseOver={() => setPieTT('wins')}>
        <Tooltip content={<PieTip />} />
        <Pie
          data={data}
          dataKey="wins"
          nameKey="username"
          labelLine={false}
          fill="#8884d8"
          label={<PieLabel />}
        ></Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
