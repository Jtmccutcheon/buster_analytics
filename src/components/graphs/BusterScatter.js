import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import moment from 'moment';
import { createXaxisTicks } from '../utils/createXaxisTicks';

const CustomTooltip = props => {
  if (!props || !props.active) return null;
  return (
    <div
      style={{
        padding: '15px 10px',
        border: '1px solid lightgrey',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `${props.payload[0].payload.f}`,
      }}
    >
      <div>{props.payload[0].payload.u}</div>
      <div>{moment(props.payload[0].value).format('MM-DD')}</div>
    </div>
  );
};

const xFormat = date => moment(date).startOf('month').format('MMM');
const ticks = createXaxisTicks();

export const BusterScatter = ({ busters, data }) => {
  return (
    busters.length > 0 && (
      <div className="stats_graph">
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
              left: -20,
            }}
          >
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid />
            <XAxis
              scale={'point'}
              interval={0}
              tickFormatter={xFormat}
              tickCount={new Date().getMonth() + 1}
              ticks={ticks}
              allowDuplicatedCategory={false}
              allowDataOverflow={true}
              dataKey="x"
              type={'category'}
            ></XAxis>
            <YAxis
              domain={[0, 'auto']}
              allowDecimals={false}
              allowDataOverflow={true}
              type="number"
              dataKey="y"
              name="wins"
            />
            {/* <ZAxis type="number" range={[100, 600]} /> */}
            <Scatter
              name="wins"
              data={data.defaultData}
              fill={'none'}
              line
            ></Scatter>
            {busters.map((b, index) => {
              return (
                <Scatter
                  key={b.id}
                  name="wins"
                  data={data.busterData[index]}
                  fill={b.fill}
                  shape={b.shape}
                  line
                ></Scatter>
              );
            })}
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    )
  );
};
