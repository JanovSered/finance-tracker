var current_cash;
var deposited;
current_cash = document.getElementById("balanceCash").textContent;

function DoW(){

     //empty row in table
     if(document.getElementById('name').value == "" || document.getElementById('priceInput').value == "") {
          alert("Empty boxes");
     }
    

     else{
          var emptyContainer = document.getElementById("pleaseremoveyourself");
          if (emptyContainer){
               emptyContainer.parentNode.removeChild(emptyContainer);
          }


          //fill balance
          var a = parseInt(document.getElementById("balanceCash").innerHTML);

          if( document.getElementById("deposit").checked ){
               var currentdeposit = document.getElementById("priceInput").value;
               document.getElementById("balanceCash").innerHTML = a +  parseInt(currentdeposit);
          }

          
          if( document.getElementById("withdraw").checked){
               var currentdeposit = document.getElementById("priceInput").value;
               document.getElementById("balanceCash").innerHTML -= parseInt(currentdeposit);
          }

          //balance coloring
          if(document.getElementById("balanceCash").innerHTML < 0){
               document.getElementById("thedrain").style.backgroundColor  = 'red';
          }

          if (document.getElementById("balanceCash").innerHTML > 0){
               document.getElementById("thedrain").style.backgroundColor  = 'green';
          }

          if (parseInt(document.getElementById("balanceCash").innerHTML) === 0){
               document.getElementById("thedrain").style.backgroundColor  = 'grey';
          }

          //fill table
          var name = document.getElementById('name').value;
          var price = document.getElementById("priceInput").value;
          var myForm = document.forms[0];
          var chosen = "";
          var i;

          for(i = 0; i < myForm.length; i++) {
               if (myForm[i].checked & myForm[i].name == "GItems"){
                    chosen += myForm[i].value + " ";
               }    
          }

          var output_data;
          output_data = document.getElementById('tableBody');
          var tdName = '<td>' + name + '</td>';
          var tdPrice = '<td>' + price + '</td>';
          var tdCategory= '<td>' + chosen + '</td>';
          var output = '<tr>' + tdName + tdPrice + tdCategory +   '</tr>';
          output_data.innerHTML += output;
     }
}
