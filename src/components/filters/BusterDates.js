export const BusterDates = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <label>Start: </label>
      <input
        style={{
          borderRadius: '14px',
          borderStyle: 'groove',
          marginLeft: '.5rem',
        }}
        placeholder={startDate}
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        type="date"
      ></input>{' '}
      <label style={{ paddingLeft: '1rem' }}> End: </label>
      <input
        style={{
          borderRadius: '14px',
          borderStyle: 'groove',
          marginLeft: '.5rem',
        }}
        placeholder={endDate}
        value={endDate}
        type="date"
        onChange={e => setEndDate(e.target.value)}
        min={startDate}
      ></input>
    </div>
  );
};
