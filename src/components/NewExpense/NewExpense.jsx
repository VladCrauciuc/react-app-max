import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  function saveExpenseDataHandler(data) {
    const expenseData = { ...data, id: Math.random().toFixed(3).toString() };

    onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
