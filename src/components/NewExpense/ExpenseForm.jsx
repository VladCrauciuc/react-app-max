import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpenseData }) {
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    amount: "",
    date: new Date(),
  });

  function inputChangeHandler(identifier, value) {
    if (identifier === "date") {
      setUserInput((prevState) => {
        return { ...prevState, [identifier]: new Date(value) };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, [identifier]: value };
      });
    }
  }
  function submitHandler(ev) {
    ev.preventDefault();

    onSaveExpenseData(userInput);
    setUserInput({ title: "", description: "", amount: "", date: new Date() });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title*</label>
          <input
            required
            value={userInput.title}
            type="text"
            placeholder="Expense title"
            onChange={(ev) => inputChangeHandler("title", ev.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input
            value={userInput.description}
            type="text"
            placeholder="Expense description"
            onChange={(ev) =>
              inputChangeHandler("description", ev.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount*</label>
          <input
            required
            value={userInput.amount}
            type="number"
            min="0.05"
            step="0.05"
            placeholder="Expense amount"
            onChange={(ev) => inputChangeHandler("amount", ev.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>
            Date (<i>today</i> is default)
          </label>
          <input
            value={userInput.date.toLocaleDateString("en-CA")}
            type="date"
            min={new Date().toLocaleDateString("en-CA")}
            max="2023-12-31"
            onChange={(ev) => inputChangeHandler("date", ev.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
