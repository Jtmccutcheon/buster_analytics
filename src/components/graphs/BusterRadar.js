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
      <PolarRadiusAxis />
      <Radar dataKey="wins" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />

      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);
