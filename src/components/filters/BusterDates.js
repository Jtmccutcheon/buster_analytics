export const BusterDates = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div className="dates">
      <div className="date_container">
        <label>start date</label>
        <input
          className="date_input"
          placeholder={startDate}
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          type="date"
          max={endDate}
        />
      </div>
      <div className="date_container">
        <label className="end_label">end date</label>
        <input
          className="date_input"
          placeholder={endDate}
          value={endDate}
          type="date"
          onChange={e => setEndDate(e.target.value)}
          min={startDate}
        />
      </div>
    </div>
  );
};
