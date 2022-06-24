export const SeasonTitle = ({ busters }) => (
  <div className="season">
    {new Date().getFullYear()} Season
    {busters.length < 1 && <div>Select a Buster</div>}
  </div>
);
