function palindrome(number) {

    var len = number.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (number[i] !== number[len - 1 - i]) {
            return false;
            
        }
    }

    return true;
    
}
let arr=[121,303,255,262];

arr.forEach(function(element){
    const pali=palindrome(element);
    if(pali) 
    {
        console.log(element);
    }

});
