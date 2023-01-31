// Use insert() function to insert the number in display.  
function insert(num){  
    document.form1.display.value = document.form1.display.value + num;  
}  
  
// Use equal() function to return the result based on passed values.  
function equal(){
    var exp = document.form1.display.value;  
        if(exp){  
            document.form1.display.value = eval(exp)  
        }  
}  
  
/* Here, we create a backspace() function to remove the number at the end of the numeric series in display. */  
function backspace(){  
    var exp = document.form1.display.value;  
    document.form1.display.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  