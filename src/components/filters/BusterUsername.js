export const BusterUsernames = ({
  userSelectedBusters,
  dispatchUserSelectedBusters,
}) => {
  const remove = username =>
    dispatchUserSelectedBusters({
      type: 'TOGGLE_BUSTER',
      payload: username,
    });

  return (
    <div className="selected_container">
      {userSelectedBusters.map((u, index) => {
        return (
          <div key={index} className="user_tags">
            <div>{u}</div>
            <div className="delete_selected" onClick={() => remove(u)}>
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};
