        // main function for calling onclick() in html 
        function busTicketPriceHandling(ticket,isIncrease){
            let ticketClassVal =ticketInput(ticket)
            let newTicketClassVal= ticketClassVal
            if(isIncrease == true){
                newTicketClassVal= ticketClassVal +1
            }
            if(isIncrease == false && ticketClassVal >0){
                newTicketClassVal= ticketClassVal -1
            }
            document.getElementById(ticket + '-class-value').value =newTicketClassVal
            let ticketTotal =0
            if(ticket=='first'){
                ticketTotal =  newTicketClassVal * 150
            }
            if(ticket == 'economy'){
                ticketTotal =  newTicketClassVal * 100
            }
            //document.getElementById(ticket+'-class-price').innerText =  ticketTotal
            calculateTotal()
        }

        // function for calculation part
        function calculateTotal(){ 
            let firstClassVal =ticketInput('first') 
            let economyClassVal = ticketInput('economy')
            const total =(firstClassVal * 150) + (economyClassVal * 100)
            document.getElementById('subtotal').innerText =total
        
            const vat = Math.round(total * 0.1)
            document.getElementById('vat').innerText =vat
        
            const grandTotal =total + vat 
            document.getElementById('total').innerText = grandTotal

           if(grandTotal == 0){
               alert('you select nothing')
           }
          // showing input and const value in ticket details modal
            let noOfTotalTicket=firstClassVal+economyClassVal
            //console.log(totalT)
           document.getElementById('noOfTicket').innerText =noOfTotalTicket
           document.getElementById('noOfFirstClass').innerText =firstClassVal
           document.getElementById('noOfEconoClass').innerText =economyClassVal
           document.getElementById('totalTicketPrice').innerText=grandTotal 
           document.getElementById('vatTicketPrice').innerText= vat 
          
        }
        
        // function for getting input form input value
        function ticketInput(ticket){
            let ticketClassInput =document.getElementById(ticket +'-class-value')
            let ticketClassVal=parseInt(ticketClassInput.value)
            return ticketClassVal
        }

     









































// previous coding -------------------------------------------------------- 

// /* function busTicketPriceHandling(ticket,isIncrease){
//    /*  let getTicketClass= document.getElementById(ticket + '-class-value') */

//    /*  let  ticketClassVal= parseInt(getTicketClass.value) */
//    let  ticketClassVal =ticketInput(ticket)
//     //console.log(firstClassVal)
//     //let newFirstClassVal= firstClassVal +1
//     let newTicketClassVal= ticketClassVal
//     if(isIncrease == true){
//         newTicketClassVal= ticketClassVal +1
//     }
//     if(isIncrease == false && ticketClassVal >0){
//         newTicketClassVal= ticketClassVal -1
//     }
//     document.getElementById(ticket + '-class-value').value =newTicketClassVal
//     //getTicketClass.value = newTicketClassVal
//   // console.log(firstClassVal)
//     //let totalFirstClassValPlus = newFirstClassVal * 150
//     let ticketTotal =0
//     if(ticket=='first'){
//         ticketTotal =  newTicketClassVal * 150
//     }
//     if(ticket == 'economy'){
//         ticketTotal =  newTicketClassVal * 100
//     }
//     //console.log(ticketTotal)
//     document.getElementById(ticket+'-class-price').innerText =  ticketTotal
//     calculateTotal()
// }
// function calculateTotal(){
//     let firstClassVal =ticketInput('first') 
//     let economyClassVal = ticketInput('economy')
//     const total =(firstClassVal * 150) + (economyClassVal * 100)
//     document.getElementById('subtotal').innerText =total

//     const vat = Math.round(total * 0.1)
//     document.getElementById('vat').innerText =vat

//     const grandTotal =total + vat 
//     document.getElementById('total').innerText = grandTotal

// }
// function ticketInput(ticket){
//     let ticketClassInput =document.getElementById(ticket +'-class-value')
//     let ticketClassVal=parseInt(ticketClassInput.value)
//     return ticketClassVal
// }
//  */
// /* function calculateTotal(){
//     let firstClassInput =document.getElementById('first-class-value')
//     let firstClassVal=parseInt(firstClassInput.value)
//     let economyClassInput=document.getElementById('economy-class-value')
//     let economyClassVal= parseInt(economyClassInput.value)

//     const total =(firstClassVal * 150) + (economyClassVal * 100)
//     document.getElementById('subtotal').innerText =total

// }
 
/* function busTicketPriceHandlingFirstClass(isIncrease){
    let getFirstClass= document.getElementById('first-class-value')

    let  firstClassVal= parseInt(getFirstClass.value)
    //console.log(firstClassVal)
    //let newFirstClassVal= firstClassVal +1
    let newFirstClassVal= firstClassVal
    if(isIncrease == true){
        newFirstClassVal= firstClassVal +1
    }
    if(isIncrease == false && firstClassVal >0){
        newFirstClassVal= firstClassVal -1
    }
    getFirstClass.value = newFirstClassVal
  // console.log(firstClassVal)
    let totalFirstClassValPlus = newFirstClassVal * 150
    console.log(totalFirstClassValPlus)
    document.getElementById('first-class-price').innerText = totalFirstClassValPlus

}
function busTicketPriceHandlingEconomyClass(isIncrease){
    let getEconomyClass= document.getElementById('economy-class-value')

    let  EconomyClassVal= parseInt(getEconomyClass.value)
    //console.log(firstClassVal)
    //let newFirstClassVal= firstClassVal +1
    let newEconomyClassVal= EconomyClassVal
    if(isIncrease == true){
        newEconomyClassVal= EconomyClassVal +1
    }
    if(isIncrease == false && EconomyClassVal >0){
        newEconomyClassVal= EconomyClassVal -1
    }
    getEconomyClass.value = newEconomyClassVal
  // console.log(firstClassVal)
    let totalEconomyClassValPlus = newEconomyClassVal * 100
    console.log(totalEconomyClassValPlus)
    document.getElementById('economy-class-price').innerText = totalEconomyClassValPlus

} */

/* document.getElementById('first-class-icon-plus').addEventListener('click', function(){
    busTicketPriceHandling(true)
}) */

/* document.getElementById('first-class-icon-minus').addEventListener('click', function(){
    busTicketPriceHandling(false)
})
 */

// row coding for first class plus and minus
//  document.getElementById('first-class-icon-plus').addEventListener('click', function(){
//      let getFirstClass= document.getElementById('first-class-value')

//      let  firstClassVal= parseInt(getFirstClass.value)
//      //console.log(firstClassVal)
//      let newFirstClassVal= firstClassVal +1
//      getFirstClass.value = newFirstClassVal
//    // console.log(firstClassVal)
//      let totalFirstClassValPlus = newFirstClassVal * 150
//      console.log(totalFirstClassValPlus)
//      document.getElementById('first-class-price').innerText = totalFirstClassValPlus


    
// })

// document.getElementById('first-class-icon-minus').addEventListener('click', function(){
//     let getFirstClass= document.getElementById('first-class-value')

//     let  firstClassVal= parseInt(getFirstClass.value)
//     //console.log(firstClassVal)
//     let newFirstClassVal= firstClassVal - 1
//     getFirstClass.value = newFirstClassVal
//   // console.log(firstClassVal)
//     let totalFirstClassValMinus = newFirstClassVal * 150
//     console.log(totalFirstClassValMinus)
//     document.getElementById('first-class-price').innerText = totalFirstClassValMinus

// }) 

// row codding economy class plus and minus
/* document.getElementById('economy-class-icon-plus').addEventListener('click', function(){
    let getFirstClass= document.getElementById('economy-class-value')

    let  firstClassVal= parseInt(getFirstClass.value)
    //console.log(firstClassVal)
    let newFirstClassVal= firstClassVal +1
    getFirstClass.value = newFirstClassVal
  // console.log(firstClassVal)
    let totalEconoClassValPlus = newFirstClassVal * 150
    console.log(totalEconoClassValPlus)
    document.getElementById('economy-class-price').innerText = totalEconoClassValPlus

   
})

document.getElementById('economy-class-icon-minus').addEventListener('click', function(){
   let getFirstClass= document.getElementById('first-class-value')

   let  firstClassVal= parseInt(getFirstClass.value)
   //console.log(firstClassVal)
   let newFirstClassVal= firstClassVal - 1
   getFirstClass.value = newFirstClassVal
 // console.log(firstClassVal)
   let totalEconoClassValMinus = newFirstClassVal * 150
   console.log(totalFirstClassValMinus)
   document.getElementById('economy-class-price').innerText = totalEconoClassValMinus

 
}) */

// total costing calculation

    /* 
   
   let geTotalPlus = totalFirstClassValPlus + totalEconoClassValPlus
   let getTotalMinus= totalEconoClassValMinus + totalFirstClassValMinus
   let total =geTotalPlus + getTotalMinus

   document.getElementById('subtotal').innerText = total

 */
