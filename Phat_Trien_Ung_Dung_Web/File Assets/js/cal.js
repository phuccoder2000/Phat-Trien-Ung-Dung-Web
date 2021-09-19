function f(d) {
     //Kiểm tra nếu là nút del thì reset input của thẻ input id = res
    if (d == 'c') {
        document.getElementById('res').value = "";
        return;
    }
    //Lấy giá trị res
    res = document.getElementById('res').value;
     //Kiem tra = 0
    if (res == 0 && d == 0)
        return;
    //Nếu là phép tính
    if (d == '+' || d == '-' || d == '*' || d == '/') {
        opr = d;
        num = parseFloat(res);
        document.getElementById('res').value = d;
        return;
    }
    //Kiểm tra phép tính
    if (d == '=') {
        num1 = parseFloat(res);
        switch (opr) {
        case '+': ans = num + num1; break;
        case '-': ans = num - num1; break;
        case '*': ans = num * num1; break;
        case '/': ans = parseInt(num / num1); break;
    }
    document.getElementById('res').value = ans;
        return;
    }
    //Chuyển dương thành âm và ngược lại
    if (d == '--') {
    document.getElementById('res').value *= -1;
        return;
    }
    //Trường hợp nếu res không rỗng sẽ cộng thêm số vào đuôi
    if (!isNaN(document.getElementById('res').value))
        document.getElementById('res').value += d;
    else
        document.getElementById('res').value = d;
   }