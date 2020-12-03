class Palindrome{
    constructor(val){
        this._value = val;
        this._originalval = val;
    }
    IsPalindrome(){
        let remainder = 0;
        let reverse = 0;
        while(this._value != 0){
            remainder = this._value % 10;
            reverse = reverse * 10 + remainder;
            this._value = parseInt(this._value / 10);
        }
        if (this._originalval == reverse){
            return "It is palindrome.";
        }else{
            return "It is not palindrome.";
        }
    }
}

function IsItPalindrome(){
    let val = parseInt(document.getElementById('inputNumber').value);
    let palindrome = new Palindrome(val);
    document.getElementById('outputResult').value = palindrome.IsPalindrome();
}