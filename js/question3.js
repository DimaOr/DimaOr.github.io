/**
 * Created by Дмитрий on 29.07.2016.
 */



String.prototype.reverseCase = function () {

  var myString = this.toString();


  function isUpperCase(char) {
    if (char.toUpperCase()===char){
    return true;
    }
    return false;
  };

  function reverseChar(char) {
      var reverse;

      if(isUpperCase(char)){
        reverse =char.toLowerCase();
      }else{
        reverse= char.toUpperCase();
      }

      return reverse;

  };

  function reverseCase(str){
    var newString="";

    for(var i= 0; i < str.length; i++){

      newString += reverseChar (str[i]);

    }
    return newString;
  };

    return reverseCase(myString);



}


var button= document.getElementById("alertString");
console.log(button);
var input = document.getElementById("string");
console.log(input);
button.onclick=function(){

alert(input.value.reverseCase());
};