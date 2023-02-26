function input(){
    let n1 = document.getElementById('input1');
    let num1 = Number(n1.value);
    let n2 = document.getElementById('input2');
    let num2= Number(n2.value);
    let selEl=document.getElementById('exampleSelect');
    let index = selEl.selectedIndex;
    let selectedOption = selEl.options[index];
    let selectedText = selectedOption.text;
    

    if(selectedText === "+"){
        
        resultTextArea.value = num1 + num2;
    }
    else if(selectedText === '-'){
        
        resultTextArea.value = num1 - num2;
    }
    else if(selectedText === '/') {
        resultTextArea.value = num1 / num2;
    }
    else resultTextArea.value = num1 * num2;
}