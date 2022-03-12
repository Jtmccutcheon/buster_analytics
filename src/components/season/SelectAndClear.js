export const SelectAndClear = ({ selectAll, clearBusters }) => (
  <div className="list_buttons">
    <button className="list_button" onClick={selectAll}>
      select all
    </button>
    <button className="list_button" onClick={clearBusters}>
      clear
    </button>
  </div>
);
