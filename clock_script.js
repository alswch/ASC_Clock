window.setInterval(digitalclock,1000)

function digitalclock () {
  var today = new Date();
  // console.log(today);
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
      function checkTime(i) {
        // console.log("checkTime");
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    }
  document.getElementById('real-hour').innerHTML = h;
  document.getElementById('real-minute').innerHTML = m;
  document.getElementById('real-second').innerHTML = s;


// ===== hex clock ======
  var hex_h = parseInt(h);
  var hex_m = parseInt(m);
  var hex_s = parseInt(s);
  // console.log(hex_h);
  // console.log(hex_m);
  // console.log(hex_s);

    hex_m = checkTime(hex_m);
    hex_s = checkTime(hex_s);
      function checkTime(e) {
        // console.log("checkTime");
        if (e < 10) {
          e = "0" + e;
        }
        return e;
    }

  var color = "#" + hex_h +hex_m + hex_s;
  console.log(color);
  document.body.style.background = color;

  document.getElementById('hex-hour').innerHTML = hex_h;
  document.getElementById('hex-minute').innerHTML = hex_m;
  document.getElementById('hex-second').innerHTML = hex_s;

}
