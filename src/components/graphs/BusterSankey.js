export const BusterSankey = ({ data }) => (
  <Sankey
    width={960}
    height={500}
    data={data0}
    node={<MyCustomNode />}
    nodePading={50}
    margin={{
      left: 200,
      right: 200,
      top: 100,
      bottom: 100,
    }}
    link={{ stroke: '#77c878' }}
  >
    <Tooltip />
  </Sankey>
);
