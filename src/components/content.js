import BudgetList from "./budgetlist";

export default function Content() {
  return (
    <div className="container clearfix">
      <div className="income">
        <h2 className="icome__title">Income</h2>
        <BudgetList type="income" />
      </div>
      <div className="expenses">
        <h2 className="expenses__title">Expenses</h2>
        <BudgetList type="expenses" />
      </div>
    </div>
  );
}
