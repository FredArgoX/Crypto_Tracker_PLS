const assets = [
    { name: "eHEX (ETH)", url: "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x9e0905249CeEFfFB9605E034b534544684A58BE6" },
    { name: "eHEX (PLS)", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0xF0eA3efE42C11c8819948Ec2D3179F4084863D3F" },
    { name: "HEX", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0xf1F4ee610b2bAbB05C635F726eF8B0C568c8dc65" },
    { name: "PLS", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0xE56043671df55dE5CDf8459710433C10324DE0aE" },
    { name: "PLSX", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x1b45b9148791d3a104184Cd5DFE5CE57193a3ee9" },
    { name: "INC", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0xf808Bb6265e9Ca27002c0A04562Bf50d4FE37EAA" },
    { name: "XEN", url: "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x2a9d2ba41aba912316D16742f259412B681898Db" },
    { name: "pXEN", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x61C8D2DeE20F8e303B999D485cFa577054196B40" },
    { name: "DXN", url: "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x7F808fD904FFA3eb6A6F259e6965Fb1466A05372" },
    { name: "pDXN", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x385de5FB8953DC34dcBB6da9CBa0896653149096" },
    { name: "DWB", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0xe644f9B23375D07f5fE11cC223716C6Db7EA356B" },
    { name: "PEAR", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0x5Ac9Ce15e67ac2c76c030B149EEe4cc73e3238Ae" },
    { name: "PEACH", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0xEC1415fdc0a7f2B8cbcE45D183Eb02b487db00F2" },
    { name: "NANANA", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0xB1133248aB5B307f4C903fA750a44861e13383a1" },
    { name: "pTGC", url: "https://api.dexscreener.com/latest/dex/pairs/pulsechain/0xf5A89A6487D62df5308CDDA89c566C5B5ef94C11" }
];

async function fetchPrice(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.pairs && data.pairs.length > 0) {
            return parseFloat(data.pairs[0].priceUsd); // Convert price to number
        }
    } catch (error) {
        console.error(`Error fetching price for ${url}:`, error);
    }
    return null; // Return null if there's an error
}

async function updateTable() {
    const tableBody = document.querySelector("#cryptoTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    for (const asset of assets) {
        const price = await fetchPrice(asset.url);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${asset.name}</td>
            <td>${price ? price.toFixed(10) : "N/A"}</td>
        `;
        tableBody.appendChild(row);
    }
}

// Fetch prices and update the table
updateTable();
setInterval(updateTable, 600000);

// Show Current Date
document.addEventListener("DOMContentLoaded", function () {
    function formatDate(date) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        let formattedDate = date.toLocaleDateString("en-US", options);
        return formattedDate;
    }

    let dateElement = document.getElementById("currentDate");
    let currentDate = new Date();
    dateElement.textContent = formatDate(currentDate);
});


// LOGO click to Author CV
const logo_x = document.querySelector("#logo_x");

logo_x.addEventListener("click", () => {
    window.open("https://x.com/FredyArgoX", "_blank");
});
