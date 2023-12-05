document.addEventListener('DOMContentLoaded', function () {
    // Sample transaction data
    const transactions = [
        { coin: 'Bitcoin', amount: '$500', date: '2023-01-01' },
        { coin: 'Worldcoin', amount: '$200', date: '2023-01-02' },
        { coin: 'Dogecoin', amount: '$1000', date: '2023-01-03' },
        { coin: 'Ethereum', amount: '$300', date: '2023-01-04' }
        // Add more transactions as needed
    ];

    const transactionList = document.getElementById('transactionList');

    // Display transactions
    transactions.forEach(transaction => {
        const transactionDiv = document.createElement('div');
        transactionDiv.classList.add('transaction');

        const coinHeading = document.createElement('h3');
        coinHeading.textContent = transaction.coin;
        transactionDiv.appendChild(coinHeading);

        const amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${transaction.amount}`;
        transactionDiv.appendChild(amountParagraph);

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${transaction.date}`;
        transactionDiv.appendChild(dateParagraph);

        transactionList.appendChild(transactionDiv);
    });
});
