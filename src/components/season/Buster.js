import { BusterSymbol } from './BusterSymbol';

export const Buster = ({ buster, setHoveredBuster, width }) => {
  return (
    <div
      key={buster.id + buster.shape + buster.color}
      id={buster.id}
      className="stats_selected"
    >
      <div className="seleceted_group">
        <img
          className={width > 600 ? 'avatar' : 'small_avatar'}
          src={buster.avatarUrl}
          alt="discord_ava"
          onMouseEnter={() => setHoveredBuster(buster)}
          onMouseLeave={() => setHoveredBuster(null)}
        ></img>
        <div className="stats_selected_buster">
          <div className="stats_selected_buster_username">
            {buster.username}
          </div>
        </div>
      </div>
      <BusterSymbol buster />
    </div>
  );
};
