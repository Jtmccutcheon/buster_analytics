import {
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Radar,
  ResponsiveContainer,
  PolarGrid,
} from 'recharts';

export const BusterRadar = ({ data }) => (
  <ResponsiveContainer width={'100%'} height={400}>
    <RadarChart data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="username" />
      <PolarRadiusAxis allowDecimals={false} angle={30} domain={[0]} />
      <Radar
        name="wins"
        dataKey="wins"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />

      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);
