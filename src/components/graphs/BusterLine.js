import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
} from 'recharts';

export const BusterLine = ({ data }) => (
  <ResponsiveContainer width={'100%'} height={300}>
    <LineChart
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: -20 }}
    >
      <Tooltip />
      <Line
        type="linear"
        dataKey="wins"
        stroke="#8884d8"
        dot={{ stroke: 'skyblue', strokeWidth: 2 }}
        strokeWidth={5}
      />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="username" />
      <YAxis allowDecimals={false} dataKey="wins" />
    </LineChart>
  </ResponsiveContainer>
);
