// document.getElementById('ticket-increase').addEventListener('click',function(){
//     const fcticketInput = document.getElementById('firstClassTicket-count');
//     const ticketCount = parseInt(fcticketInput.value);
//     const ticketNew  = ticketCount + 1;
    
//     fcticketInput.value = ticketNew;
//     const tcTicketTotal = ticketNew * 150;
//     console.log(tcTicketTotal);
// })

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
    let ticketTotal = 0;
    if(ticketType == 'firstClass'){
        ticketTotal = ticketIsCount * 150;
    }
    calculateTotal();
}

function calculateTotal(){
    const firstClassTicket = getTicket('firstClass');

    //subtotal
    const subTotal = firstClassTicket*150;

    document.getElementById('subtotal').innerText = '$'+ subTotal;
}

function getTicket(ticketType){
    const getTickets = document.getElementById(ticketType+'-count');
    const ticketCount = parseInt(getTickets.value);
    return ticketCount;
}