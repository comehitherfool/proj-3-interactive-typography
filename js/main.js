// JS scripts placed here
addEventListener('load', ()=>{ // load
    const but = document.getElementById('button'), bS = but.style, bod = document.body;
    but.onclick = function(){
      let m = bod.getBoundingClientRect(), mw = m.width, mh = m.height, b = this.getBoundingClientRect(), x = Math.floor(Math.random()*mw);
      let y = Math.floor(Math.random()*mh), w = b.width, h = b.height, xw = mw-w, yh = mh-h;
      bS.top = (y > yh ? yh : y)+'px';
      bS.left = (x > xw ? xw : x)+'px';
    }
    });// end load
    