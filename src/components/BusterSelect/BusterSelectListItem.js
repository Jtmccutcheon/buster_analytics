export const BusterSelectListItem = ({
  buster,
  toggleBuster,
  userSelectedBusters,
}) => (
  <div
    key={buster.id}
    className="buster_list"
    onClick={() => toggleBuster(buster.username)}
  >
    <input
      checked={userSelectedBusters.includes(buster.username)}
      type={'checkbox'}
      value={buster.username}
      onChange={() => {}}
    ></input>
    <img
      src={buster.avatarUrl}
      alt="discord_ava"
      style={{
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        margin: '0 .25rem',
      }}
    />
    <div className="buster_list_username">{buster.username}</div>
  </div>
);
