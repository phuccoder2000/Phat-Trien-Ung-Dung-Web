//Bai01
// JQuery
$( document ).ready(function() {
    // nhap vung du lieu tu thanh alert
var rng = prompt('Enter the range');

res = rng.split("-");
// kiem tra res -> so dau, so cuoi ( 2 so)
if (res.length != 2) {
    alert("invalid range ");
    return;
}
first = parseInt(res[0]);
second = parseInt(res[1]);

//Kiem tra so dau phai nho hon so cuoi
if (first > second) {
    alert("invalid range ");
    return;
}
// chuoi tao html table
str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

//vong lap i tu first den second (number, square = number*number, cube = number*number*number)
//voi moi i tao mot dong table hien thi phep tinh tinh duoc -> noi vao str

for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
}

str += '</table><a href="./index.html"><h1>Về trang chủ</h1></a>';

// Tra ve chuoi html hien thi bang tinh
document.write(str);
});
// Bai 2
// JQuery

  $(document).ready(function () {
    $("#btn1").click(function () {

        //Lay chuoi tu input co id la t1
        var str = $("#t1").val();

        // Vong lap 
        for (i = 0; i < str.length; i++) {
            //Duyet tung ki tu trong chuoi neu co "a, e, i, o, u" thi tra ve nguyen am do va vi tri cua no
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
                || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
                alert("Left most vowel of " + str + " is at location " + (i + 1));
                return;
            }

        }
        //Khong tim thay
        alert("No vowels found for string " + str);
    });


    $("#btn2").click(function () {
        num = $("#t2").val();
        rnum = 0;
        temp = num;

        //kiem tra du lieu nhap vao co phai so
        if (isNaN(num)) {
            alert("invalid number");
            return;
        }


        //vong lap VD: 123
        while (num != 0) {
            rnum *= 10;
            //rnum = 0       rnum = 30     rnum = 320
            rnum += num % 10;
            //rnum = 3       rnum = 32     rnum = 321
            num -= num % 10;
            //num = 120      num = 10
            num = Math.floor(num / 10);
            //lam tron
            //num = 12       num = 1
        }
        alert("Reverse of num " + temp + " is " + rnum);
    })
});
//Bai03
// JQuery
function f(d) {
    //Kiểm tra nếu là nút del thì reset input của thẻ input id = res
    if (d == 'c') {
        $("#res").val("");
        return;
    }

    //Lấy giá trị res
    res = $("#res").val();
    //Kiem tra = 0
    if (res == 0 && d == 0)
        return;
    //Nếu là phép tính
    if (d == '+' || d == '-' || d == '*' || d == '/') {
        //Lưu phép tính vào biến opr
        opr = d;
        //Lưu giá trị cũ của res
        num = parseFloat(res);
        //gán phép tính lên res
        // document.getElementById('res').value = d;
        $("#res").val(d);
        return;
    }
    //Kiểm tra phép tính
    if (d == '=') {
        num1 = parseFloat(res);
        switch (opr) {
            case '+': ans = num + num1; break;
            case '-': ans = num - num1; break;
            case '*': ans = num * num1; break;
            //Chia trả về số nguyên
            case '/': ans = parseInt(num / num1); break;
        }
        $("#res").val(ans);
        return;
    }
    //Chuyển dương thành âm và ngược lại
    if (d == '--') {
        temp = $("#res").val();
        temp *= -1;
        $("#res").val(temp);
        return;
    }
    //Trường hợp nếu res không rỗng sẽ cộng thêm số vào đuôi
    if (!isNaN(document.getElementById('res').value)) {
        temp = $("#res").val();
        temp += d;
        $("#res").val(temp);
        return;
    }
    else {
        temp = $("#res").val(d);
    }
}