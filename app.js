function handleTicketChange(ticket, isIncrease) {
    const userTicket = document.getElementById(ticket + '-count');
    const ticketNumber = parseInt(userTicket.value);
    let ticketNewCount = ticketNumber;
    if (isIncrease == true) {
        ticketNewCount = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNewCount > 0) {
        ticketNewCount = ticketNumber - 1;
    }
    userTicket.value = ticketNewCount;
    calculateTicketPrice();
};

function calculateTicketPrice() {
    const firstClassTicket = document.getElementById('firstClass-count');
    const firstClassTicketNumber = parseInt(firstClassTicket.value);
    const economyTicket = document.getElementById('economy-count');
    const economyTicketNumber = parseInt(economyTicket.value);
    const subTotal = firstClassTicketNumber * 150 + economyTicketNumber * 100;
    document.getElementById("sub-total").innerText = '$' + subTotal;
}