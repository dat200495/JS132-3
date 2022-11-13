function numberOneTriangle(){
    let a = Number(document.getElementById("canh").value);
    let result = "";
    if (a<=10) {
        for (let i =1; i <= a; i++){
            for (let j=1; j<=a; j++) {
                if (j<=i){
                    result += ("*");
                } else {
                    result +=" ";}
            };
        };
        
    };
    result += "\n";
    document.getElementById('result').innerHTML = result;
    console.log(result);
}