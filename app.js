// // plus minus button handler
// function handleTicketChange(isIncrease) {
//     const economyInput = document.getElementById('economy-count');
//     const economyNumber = parseInt(economyInput.value);
//     let economyNewCount = economyNumber;
//     if (isIncrease == true) {
//         economyNewCount = economyNumber + 1;
//     }
//     if (isIncrease == false && economyNewCount > 0) {
//         economyNewCount = economyNumber - 1;
//     }
//     economyInput.value = economyNewCount;
//     economySubTotal = economyNewCount * 100;
//     document.getElementById("sub-total").innerText = '$' + economySubTotal;
// };

function handleTicketChange(isIncrease) {
    const economyInput = document.getElementById('economy-count');
    const economyNumber = parseInt(economyInput.value);
    let economyNewCount = economyNumber;
    if (isIncrease == true) {
        economyNewCount = economyNumber + 1;
    }
    if (isIncrease == false && economyNewCount > 0) {
        economyNewCount = economyNumber - 1;
    }
    economyInput.value = economyNewCount;
    economySubTotal = economyNewCount * 100;
    document.getElementById("sub-total").innerText = '$' + economySubTotal;
};