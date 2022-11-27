function quaySo (){
    let count = localStorage.getItem("count")
    if(!count) {
        count = 0
    }
    let ketQua = "Đã Hết Lượt Chơi, Hãy Chơi Lại"
    if(count>=3){
        alert(ketQua)
    } else {
        let a = (document.getElementById("son").value);
        let b = Math.floor(Math.random() * 10) +1;
        document.getElementById("result").innerHTML = "Kết Quả Là "+b
        if (a == b){
            ketQua = "Bạn đã trúng thưởng";
            document.getElementById("result").innerHTML = "Kết Quả Là "+b
        } else {
            ketQua = "Bạn không trúng thưởng";
        }
        localStorage.setItem("count", parseInt(count)+1)
    }
    
    alert(ketQua);
}

function restart() {
    localStorage.setItem("count", 0)
}