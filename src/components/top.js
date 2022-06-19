export default function Top({ income, expenses }) {
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">%Month%</span>:
        </div>

        <div className="budget__value">+ {income - expenses}</div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">+ {income}</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">- {expenses}</div>
            <div className="budget__expenses--percentage">
              {" "}
              {parseInt((expenses * 100) / income)} %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
