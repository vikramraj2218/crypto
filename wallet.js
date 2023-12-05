document.addEventListener('DOMContentLoaded', function () {
    // Sample wallet balance data
    let walletBalance = 5000;
    const balanceAmount = document.getElementById('balanceAmount');

    updateBalance();

    // Invest in Bitcoin
    document.getElementById('investBitcoin').addEventListener('click', function () {
        invest('Bitcoin');
    });

    // Invest in Worldcoin
    document.getElementById('investWorldcoin').addEventListener('click', function () {
        invest('Worldcoin');
    });

    // Invest in Dogecoin
    document.getElementById('investDogecoin').addEventListener('click', function () {
        invest('Dogecoin');
    });

    // Invest in Ethereum
    document.getElementById('investEthereum').addEventListener('click', function () {
        invest('Ethereum');
    });

    function invest(coin) {
        // Add logic to handle the investment, deduct amount from the walletBalance
        console.log(`Investing in ${coin}`);
        walletBalance -= 1000; // Sample deduction amount, you can adjust this
        updateBalance();
    }

    function updateBalance() {
        balanceAmount.textContent = `₹${walletBalance}`;
    }
});
