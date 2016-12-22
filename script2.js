function setCount ()
{
    var element = document.getElementById("clickCount");
    element.innerHTML = 0;
    count = 0;
}

function myTime() {
    setInterval('setCount()','30000');
}
