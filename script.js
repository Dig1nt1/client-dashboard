fetch("data.json")
  .then(res => res.json())
  .then(client => {
    document.getElementById("totalInvested").textContent = `₹${client.totalInvested.toLocaleString()}`;
    document.getElementById("currentValue").textContent = `₹${client.currentValue.toLocaleString()}`;
    document.getElementById("dailyPL").textContent = `₹${client.dailyPL.toLocaleString()}`;
    document.getElementById("overallReturn").textContent = `${client.overallReturn}%`;

    const tableBody = document.getElementById("portfolioTable");
    tableBody.innerHTML = "";

    client.holdings.forEach(asset => {
      const row = document.createElement("tr");
      const plClass = asset.pl >= 0 ? 'positive' : 'negative';

      row.innerHTML = `
        <td>${asset.asset}</td>
        <td>${asset.qty}</td>
        <td>₹${asset.avgBuy}</td>
        <td>₹${asset.current}</td>
        <td>₹${asset.invested}</td>
        <td>₹${asset.value}</td>
        <td class="${plClass}">${asset.pl >=0 ? `+₹${asset.pl}` : `₹${asset.pl}`}</td>
      `;
      tableBody.appendChild(row);
    });
  });
