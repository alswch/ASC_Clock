window.setInterval(digitalclock,1000)


function digitalclock () {
  var today = new Date();
  // console.log(today);
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

  document.getElementById('real-hour').innerHTML = h;
  document.getElementById('real-minute').innerHTML = m;
  document.getElementById('real-second').innerHTML = s;


// ===== hex clock ======
  var hH = hexTime(h);
  var mH = hexTime(m);
  var sH = hexTime(s);

  hH = checkTime(hH);
  mH = checkTime(mH);
  sH = checkTime(sH);

  // var color = "#" + hex_h + hex_m + hex_s;
  // console.log(color);
  // document.body.style.background = color;

  document.getElementById('hex-hour').innerHTML = hH;
  document.getElementById('hex-minute').innerHTML = mH;
  document.getElementById('hex-second').innerHTML = sH;

    function hexTime (num) {
      hexString = num.toString(16);
      console.log(hexString);
      return hexString;
    }

  function checkTime(i) {
    // console.log("checkTime");
    if (i.length < "2") {
      i = "0" + i;
    }
    return i;
  }

}
