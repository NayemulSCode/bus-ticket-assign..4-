//clik handler function
function handleTicket(ticketType, isIncrement){
    const ticketInput = document.getElementById(ticketType+'-count');
    const ticketCount = getTicket(ticketType);
    let ticketIsCount = ticketCount;

    if(isIncrement == true){
        ticketIsCount = ticketCount + 1;
    }
    if(isIncrement == false && ticketCount>0 ){
        ticketIsCount = ticketCount -1;
    }
    ticketInput.value = ticketIsCount;

    //amount calculation
    // let ticketAmount = 0;
    // if(ticketType == 'firstClass'){
    //     ticketAmount = ticketIsCount * 150;
    // }
    // if(ticketType == 'economyClass'){
    //     ticketAmount = ticketIsCount * 100;
    // }
    calculateTotal();
}

function calculateTotal(){
    const firstClassTicket = getTicket('firstClass');
    const ecomomyClassTicket = getTicket('economyClass');

    //subtotal
    const subTotal = firstClassTicket * 150 + ecomomyClassTicket * 100;
    document.getElementById('subtotal').innerText = '$'+ subTotal;
    //tax
    const totalTax = Math.round(subTotal * 0.10);
    document.getElementById('tax').innerText = '$' + totalTax;
    //total
    const total = subTotal + totalTax;
    document.getElementById('total').innerText = '$'+ total;
}
//getting input from user
function getTicket(ticketType){
    const getTickets = document.getElementById(ticketType+'-count');
    const ticketCount = parseInt(getTickets.value);
    return ticketCount;
}
// booking section
document.getElementById('booking').addEventListener('click', function(){
    const bookingMessage = document.getElementById('booking-message');
        bookingMessage.style.display = 'block';
        bookingMessage.style.color = 'green';
        bookingMessage.style.textAlign = 'center';

    const bookingId = document.getElementById('bookingId');
    bookingId.innerHTML = Math.floor((Math.random() * 1000) + 1);
});