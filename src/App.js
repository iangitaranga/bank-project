import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the local server when the component mounts
    fetch(' http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  // Event handler for adding a new transaction to the table
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Event handler for deleting a transaction from the table
  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  // Event handler for updating the search term
  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div>
      <h1>Bank Transactions</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} onDelete={deleteTransaction} />
      <TransactionForm onAddTransaction={addTransaction} />
    </div>
    </>
  );
};

export default App;
