export const Loading = ({ color = '#4752C4', size = 80 }) => {
  const circles = [...Array(9)].map((_, index) => (
    <div key={index} style={{ background: `${color}` }} />
  ));

  return (
    <div className="lds-grid" style={{ width: size, height: size }}>
      {circles}
    </div>
  );
};
