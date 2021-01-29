function busTicketPriceHandling(){
    let getFirstClass= document.getElementById('first-class-value')

    let  firstClassVal= parseInt(getFirstClass.value)
    //console.log(firstClassVal)
    let newFirstClassVal= firstClassVal +1
    getFirstClass.value = newFirstClassVal
  // console.log(firstClassVal)
    let totalFirstClassValPlus = newFirstClassVal * 150
    console.log(totalFirstClassValPlus)
    document.getElementById('first-class-price').innerText = totalFirstClassValPlus

}

// row coding for first class plus and minus
/* document.getElementById('first-class-icon-plus').addEventListener('click', function(){
     let getFirstClass= document.getElementById('first-class-value')

     let  firstClassVal= parseInt(getFirstClass.value)
     //console.log(firstClassVal)
     let newFirstClassVal= firstClassVal +1
     getFirstClass.value = newFirstClassVal
   // console.log(firstClassVal)
     let totalFirstClassValPlus = newFirstClassVal * 150
     console.log(totalFirstClassValPlus)
     document.getElementById('first-class-price').innerText = totalFirstClassValPlus


    
})

document.getElementById('first-class-icon-minus').addEventListener('click', function(){
    let getFirstClass= document.getElementById('first-class-value')

    let  firstClassVal= parseInt(getFirstClass.value)
    //console.log(firstClassVal)
    let newFirstClassVal= firstClassVal - 1
    getFirstClass.value = newFirstClassVal
  // console.log(firstClassVal)
    let totalFirstClassValMinus = newFirstClassVal * 150
    console.log(totalFirstClassValMinus)
    document.getElementById('first-class-price').innerText = totalFirstClassValMinus

}) */

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
