function sum(){
    let a = Number(document.getElementById("numbera").value);
    let b = Number(document.getElementById("numberb").value);
    let k = 0;
    if (b>a){
        k=a;
        for (let i=a; i<=b; i++){
            a += i;
        };
    };
    let sum = a-k;
    document.getElementById('result').innerHTML = sum;
}