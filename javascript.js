

//https://www.youtube.com/watch?v=FTiOWOrGODI
var lso = new LocalStorageOperation("MyList");

var tb1 =document.getElementById("TablList");
var arr =new Array();

function btncalculate(event) {
    event.preventDefault();

    // if(validate()){
        let inputProduct = document.getElementById("inputProduct").value;
        let basePrice = document.getElementById("inputPrice").value;
        let inputPrepaid = document.getElementById("inputPrepaid").value;
        let inputNYears = document.getElementById("inputNYears").value;
        let inputBRevenue = document.getElementById("inputBRevenue").value;
        var res = loanCalculator(inputProduct, basePrice, inputPrepaid, inputNYears, inputBRevenue);
       var monthlyAmount = document.getElementById("monthlyAmount").innerHTML = res.monthly;
      var bankReve =  document.getElementById("bankReve").innerHTML = res.bankReve;
      return{
        monthlyAmount:monthlyAmount,
        bankReve:bankReve
      }

    // }
   
}


function loanCalculator(product, basePrice, prepaid, NumberOfYears, bankRevenuPers) {
    let loanAmount = basePrice - prepaid;
    let bankRevenu = (loanAmount * bankRevenuPers) * NumberOfYears;
    let finalLoanAmount = loanAmount + bankRevenu;
    let monthlyAmount = finalLoanAmount / (NumberOfYears * 12)
    // console.info('Product   |   Base Price   |   Prepaid   |   Loan Amount   |   Bank Revenu   |   Final Loan Amount   |   Monthly Amount');
    // console.info(product + '   |   ' + basePrice + '   |   ' + prepaid + '   |   ' + loanAmount + '   |   ' + bankRevenu + '   |   ' + finalLoanAmount + '   |   ' + monthlyAmount);
    return {
        monthly: monthlyAmount,
        bankReve:bankRevenu
    };
}

function AddToLocalStorage(event){
    var res =  btncalculate(event)
    arr.push({
        inputProduct:   document.getElementById("inputProduct").value ,
        inputPrice:   document.getElementById("inputPrice").value ,
        inputPrepaid:   document.getElementById("inputPrepaid").value ,
        inputProduct:   document.getElementById("inputProduct").value ,
        inputNYears:   document.getElementById("inputNYears").value ,
        inputBRevenue:   document.getElementById("inputBRevenue").value ,
        bankReve: res.monthlyAmount ,
        monthlyAmount:res.bankReve  ,
    })
    lso.Add(arr);

  showData ();
}

function ClearFromTable (Table){
 
   
    while(Table.hasChildNodes())
   {
    Table.removeChild(Table.firstChild);
   }
    
}

function Clear (){
 
 lso.clear();
 ClearFromTable(tb1);
 window.location.reload();
}

function deletePreviousRow(){
    var count =tb1.rows.length;
   
    while(count--){
         tb1.deleteRow(count);
        }
}

function showData (){

  lso.GetData();
  
  deletePreviousRow();
  
 let dataHtml = '' ;
      
  

    for(let data of arr){
        dataHtml += ` <tr> 
                            <td>
                            ${data.inputProduct}
                            </td>
                            <td>
                            ${data.inputPrice}
                            </td>
                            <td>
                            ${data.inputPrepaid}
                            </td>
                            <td>
                            ${data.inputNYears}
                            </td>
                            <td>
                            ${data.inputBRevenue}
                            </td>
                            <td>
                            ${data.bankReve}
                            </td>
                            <td>
                            ${data.monthlyAmount}
                            </td>
                       </tr>
                     `

     
        tb1.innerHTML=dataHtml;
    }
  
}


// function validate(){
//     isValied =true; 
//     if(document.getElementById("inputProduct").value == " "){
//         isValied =false;
//         document.getElementById("ProductValidationError").classList.remove("hide"); 
//     }
//     else {
//         isValied =true; 
//         (!document.getElementById("inputProduct").classList.contains("hide"))
//         document.getElementById("ProductValidationError").classList.add("hide");
//     }
//     return isValied ;
// }
