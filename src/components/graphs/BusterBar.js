import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Bar,
  CartesianGrid,
  YAxis,
  XAxis,
} from 'recharts';

export const BusterBar = ({ data }) => (
  <ResponsiveContainer width={'100%'} height={400}>
    <BarChart
      margin={{ top: 20, right: 20, bottom: 20, left: -20 }}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="username" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Bar allowDecimals={false} dataKey="wins" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);
