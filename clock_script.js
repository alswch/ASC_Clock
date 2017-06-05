window.setInterval(digitalclock,1000)

function digitalclock () {
  var today = new Date();
  // console.log(today);
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  var hrDisplay = document.getElementById('real-hour');
  var minDisplay = document.getElementById('real-minute');
  var secDisplay = document.getElementById('real-second');

    m = checkTime(m);
    s = checkTime(s);
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    }

  hrDisplay.innerHTML = h;
  minDisplay.innerHTML = m;
  secDisplay.innerHTML = s;
}
