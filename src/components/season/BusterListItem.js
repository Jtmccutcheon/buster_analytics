export const BusterListItem = ({
  buster,
  toggleBuster,
  index,
  userSelectedBusters,
}) => (
  <div
    key={buster.id}
    className="stats_busters"
    onClick={() => toggleBuster(buster, index)}
  >
    <div
      className={
        userSelectedBusters.find(q => q.id === buster.id)
          ? 'buster_list_stats'
          : 'buster_list_busters'
      }
    >
      {buster.username}
    </div>
  </div>
);
