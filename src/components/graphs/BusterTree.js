import { ResponsiveContainer, Treemap } from 'recharts';

export const BusterTree = ({ data }) => (
  <ResponsiveContainer width={'100%'} height={600}>
    <Treemap
      width={730}
      height={250}
      data={data}
      dataKey="wins"
      ratio={6 / 9}
      tooltip
    />
  </ResponsiveContainer>
);
