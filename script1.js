var count = 0;

var Counter = (function() {
  return function () {
    var element = document.getElementById("clickCount");
    element.innerHTML = ++count;
    }
}());


 function load() {
     var button = document.getElementById("myBox");
     button.addEventListener("click", Counter, false);

   }