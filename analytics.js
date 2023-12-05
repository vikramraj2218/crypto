// Sample data (replace this with dynamic data fetching)
const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$37,614.70', change: '-0.63%', volume: '$19.39 B', marketCap: '$735.51 B' },
    // Add more data entries as needed
];

document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('tbody');

    cryptoData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name} (${data.symbol})</td>
            <td>${data.price}</td>
            <td>${data.change}</td>
            <td>${data.volume}</td>
            <td>${data.marketCap}</td>
            <td>TODO: Add 7D Chart</td>
        `;
        tbody.appendChild(row);
    });
});
