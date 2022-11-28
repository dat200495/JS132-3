function findOppostieNumber (){
    let a = Number(document.getElementById("thamso1").value);
    let b = Number(document.getElementById("thamso2").value);
    if (a >20|| a<4 || a%2 ==! 0) {
        alert("N phải nhỏ hơn 20, lớn hơn 4 và là số dương");
        b = "Không có kết quả";
    } else { 
        if (b>a) {
            alert("Số đối phải nhỏ hơn N");
        } else {
            if (b < (a/2)) {
                b = b + (a/2);
            } else {
                b = b - (a/2);
            }
        }
    }
    let findOppostieNumber = b;
    document.getElementById('result').innerHTML = findOppostieNumber;
}