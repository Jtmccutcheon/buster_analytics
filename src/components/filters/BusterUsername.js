export const BusterUsernames = ({
  userSelectedBusters,
  dispatchUserSelectedBusters,
}) => {
  return (
    <div className="selected_container">
      {userSelectedBusters.map((u, index) => {
        return (
          <div key={index} className="user_tags">
            <div>{u}</div>{' '}
            <div
              className="delete_selected"
              onClick={e => {
                dispatchUserSelectedBusters({
                  type: 'TOGGLE_BUSTER',
                  payload: u,
                });
              }}
            >
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};
