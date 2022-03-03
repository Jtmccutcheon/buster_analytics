import { ResponsiveContainer, Treemap } from 'recharts';

export const BusterTree = ({ data }) => (
  <ResponsiveContainer height={600}>
    <Treemap data={data || []} dataKey="wins" nameKey="username" />
  </ResponsiveContainer>
);
