import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

export const BusterScatter = ({ busters, data }) => {
  return (
    <ResponsiveContainer
      style={{ display: 'flex', justifySelf: 'flex-end' }}
      width={'100%'}
      height={400}
    >
      <ScatterChart
        width={900}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis allowDuplicatedCategory={false} dataKey="x" />
        <YAxis allowDecimals={false} type="number" dataKey="y" name="wins" />
        <ZAxis type="number" range={[100, 600]} />
        {busters.map((b, index) => {
          return (
            <Scatter
              name="wins"
              data={data[index]}
              fill={b.fill}
              shape={b.shape}
              line
            >
              <LabelList dataKey="y" />
            </Scatter>
          );
        })}
      </ScatterChart>
    </ResponsiveContainer>
  );
};
