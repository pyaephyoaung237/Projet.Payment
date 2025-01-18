const mycheckbox =document.getElementById("mycheckbox") ;
const visabtn =document.getElementById("visabtn") ;
const paypalbtn =document.getElementById("paypalbtn") ;
const masterbtn =document.getElementById("masterbtn") ;
const mysubmit =document.getElementById("mysubmit") ;
const checkboxresult =document.getElementById("checkboxresult") ;
const payresult =document.getElementById("payresult") ;

mysubmit.onclick = function (){
    if(mycheckbox.checked){
        checkboxresult.textContent = "Your Subcribe now!";
    }
      else {
        checkboxresult.textContent = "Your not subcribe!" ;
      }
    if(visabtn.checked){
        payresult.textContent = "your paying with visa card" ;
    }
    else if(paypalbtn.checked){
        payresult.textContent = "your paying with paypal card" ;

    }
    else if(masterbtn.checked){
        payresult.textContent = "your paying with paypal card" ;

    }
    else {
        payresult.textContent = "you must be select one payment type!" ;
    }



    
}


