// Use `const` for variables that don't change
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction() {
    // Use `const` for variables that don't change
    const type = document.getElementById('transaction-type').value;
    const name = document.getElementById('transaction-name').value.trim(); // Trim whitespace
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    const date = new Date().toLocaleDateString();

    // Validate input
    if (name && !Number.isNaN(amount) && amount > 0) {
        const transaction = { type, name, amount, date };
        transactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        renderTransactions();
    } else {
        alert('Please enter valid transaction details.'); // Add error handling
    }
}

function deleteTransaction(index) {
    if (index >= 0 && index < transactions.length) { // Validate index
        transactions.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        renderTransactions();
    }
}

function renderTransactions() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = ''; // Clear the list
    let total = 0;

    transactions.forEach((transaction, index) => {
        const entry = document.createElement('div');
        entry.classList.add('expense-item');
        entry.innerHTML = `
            ${transaction.date} - ${transaction.type.toUpperCase()} - ${transaction.name}: Rp${transaction.amount.toFixed(2)}
            <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>
        `;
        expenseList.appendChild(entry);

        // Update total balance
        if (transaction.type === 'income') {
            total += transaction.amount;
        } else {
            total -= transaction.amount;
        }
    });

    // Update total balance display
    document.getElementById('total-balance').innerText = `Total Balance: Rp${total.toFixed(2)}`;
}

// Initial render
renderTransactions();