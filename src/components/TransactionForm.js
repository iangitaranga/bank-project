import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a random ID for the new transaction
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      description,
      category,
      amount: parseFloat(amount),
    };

    // Call the parent component's function to add the new transaction
    onAddTransaction(newTransaction);

    // Clear the form fields
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
