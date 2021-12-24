import { ResponsiveContainer, Treemap } from 'recharts';

export const BusterTree = ({ data }) => (
  <ResponsiveContainer width={'100%'} height={600}>
    <Treemap data={data} dataKey="wins" nameKey="username" />
  </ResponsiveContainer>
);
