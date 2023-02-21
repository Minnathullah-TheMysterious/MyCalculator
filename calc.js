/* ******* by using eventListeners  ****** */
// let a = document.getElementById("backspace");
// let e = function(){
//   let text = document.getElementById("display").innerText;
//   let result = text.substring(0, text.length - 1);
//   document.getElementById("display").innerText = result;
// };
// a.addEventListener("click", e);


function backspace(){  
    let exp = document.getElementById('display').innerText;  
    let result = exp.substring(0, exp.length - 1)
    document.getElementById('display').innerText = result
} 

  
// Use equal() function to return the result based on passed values.  
function equalTo(){
    let solve = document.getElementById('display').innerText; 
        if(solve){  
            document.getElementById('display').innerText = eval(solve)  
        }  
}  