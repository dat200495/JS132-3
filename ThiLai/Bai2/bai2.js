function merge2String (){
    let a = (document.getElementById("chuoi1").value);
    let b = (document.getElementById("chuoi2").value);
    let text = "";
    let chuoiCanTim ="";
    let arrayA = a.split("");
    let arrayB = b.split("");
    if (arrayA.length>=arrayB.length){
        for (let i = 0; i<= arrayA.length - 1; i++){
            for (let j=0; j<=arrayB.length -1; j++){
                if (i==j){
                    text += arrayA[i]+arrayB[j];
                    chuoiCanTim = text;
                };
                if (i > arrayB.length -1) {
                    chuoiCanTim = text + arrayA[i];                   
                };
            }
        }
    } if (arrayA.length<arrayB.length) {
        for (let i = 0; i<= arrayA.length - 1; i++){
            for (let j=0; j<=arrayB.length -1; j++){
                if (i==j){
                    text += arrayA[i]+arrayB[j];
                    chuoiCanTim = text;
                };
                if (j > arrayA.length -1) {
                    chuoiCanTim = text + arrayB[j];                    
                };
            }
        }
    }
    let merge2String = chuoiCanTim;
    document.getElementById('result').innerHTML = merge2String;
}