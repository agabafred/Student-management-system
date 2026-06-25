
function add(){
    const num1 =  document.getElementById("num1").value;
    const num2 = document.getElementById('num2').value;
    const sum = parseInt(num1) + parseInt(num2);
    console.log(sum)
     document.getElementById('result').innerHTML = sum
}