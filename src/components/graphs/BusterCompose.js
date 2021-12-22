import {
  ResponsiveContainer,
  ComposedChart,
  Tooltip,
  Area,
  CartesianGrid,
  YAxis,
  XAxis,
  Legend,
} from 'recharts';

export const BusterCompose = ({ data }) => (
  <ResponsiveContainer width={'100%'} height={300}>
    <ComposedChart
      allowDecimals={false}
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: -20 }}
    >
      <XAxis dataKey="username" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="wins" fill="#8884d8" stroke="#8884d8" />
    </ComposedChart>
  </ResponsiveContainer>
);
