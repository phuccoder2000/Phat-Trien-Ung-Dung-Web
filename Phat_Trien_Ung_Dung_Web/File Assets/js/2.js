function findLMV() {
     //Lay chuoi tu input co id la t1
    var str = document.getElementById('t1').value
    // Vong lap kiểm tra chuổi nhập vào
    for (i = 0; i < str.length; i++) {
         //Duyet tung ki tu trong chuoi neu co "a, e, i, o, u" thi tra ve nguyen am do va vi tri cua no
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
        || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
        return ("Left most vowel of " + str + " is at location " + (i + 1));
    }
    //nếu không có
    return ("No vowels found for string " + str);
   }

   //Dao so
function reverse(num) {
    rnum = 0;
    temp = num;
    // kiểm tra số nhập vào có phải số không
    if (isNaN(num)) {
        return "invalid number";
    }
    //vong lap
    while (num != 0) {
        rnum *= 10;
        rnum += num % 10;
        num -= num % 10;
        num = Math.floor(num / 10);
    }
    // trả về chuỗi số
    return "Reverse of num " + temp + " is " + rnum;
}