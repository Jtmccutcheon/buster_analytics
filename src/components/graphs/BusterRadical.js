import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Tooltip,
} from 'recharts';

export const BusterRadical = ({ data }) => {
  let tooltip;
  const RadicalTooltip = ({ active, payload }) => {
    if (!active || !tooltip || !payload.length) return null;

    return payload.map(
      (i, index) =>
        i.dataKey === tooltip && (
          <div
            key={index}
            style={{
              backgroundColor: '#FFF',
              padding: '15px 10px',
              border: '1px solid lightgrey',
            }}
          >
            <div>{i.payload.username}</div>
            <div>
              {i.name} : {i.value}
            </div>
          </div>
        ),
    );
  };

  const RadicalLabel = props => {
    return (
      <div>
        {props.name} : {props.value}
      </div>
    );
  };

  return (
    <ResponsiveContainer width={'100%'} height={500}>
      <RadialBarChart
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
        onMouseOver={() => (tooltip = 'wins')}
      >
        <Tooltip content={<RadicalTooltip />} />
        <RadialBar
          minAngle={15}
          label={<RadicalLabel />}
          background
          clockWise={true}
          dataKey="wins"
          nameKey="username"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
