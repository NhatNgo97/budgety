export default function Item({
  type,
  description,
  amount,
  percentage,
  onCancelClick,
}) {
  return (
    <div className="item clearfix">
      <div className="item__description">{description}</div>
      <div className="right clearfix">
        <div className="item__value">{amount}</div>
        {type === "expenses" && (
          <div className="item__percentage">{parseInt(percentage)} %</div>
        )}
        <div className="item__delete">
          <button className="item__delete--btn">
            <i onClick={onCancelClick} className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
