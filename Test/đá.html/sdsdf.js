function sum(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let k = 0;
    if (b>a){
        k=a;
        for (let i=a; i<=b; i++){
            a += i;
        };
    };
    let sum = a - k;

    document.getElementById('result').innerHTML = sum;
}