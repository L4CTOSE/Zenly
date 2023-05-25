javascript: (function() {
  var o = document.createElement('div');
  o.style.position = 'fixed';
  o.style.top = '0';
  o.style.left = '0';
  o.style.width = '300px';
  o.style.height = '180px';
  o.style.backgroundColor = 'black';
  o.style.opacity = '1';
  o.style.borderRadius = '12px';
  o.style.zIndex = '9999';
  document.body.appendChild(o);

  var w = document.createElement('div');
  w.style.position = 'absolute';
  w.style.top = '0';
  w.style.left = '0';
  w.style.width = '100%';
  w.style.height = '30px';
  w.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  w.style.borderRadius = '12px 12px 0 0';
  w.style.cursor = 'move';
  o.appendChild(w);

  var cRed = document.createElement('div');
  cRed.style.position = 'absolute';
  cRed.style.top = '3px';
  cRed.style.right = '3px';
  cRed.style.width = '16px';
  cRed.style.height = '16px';
  cRed.style.backgroundColor = 'red';
  cRed.style.borderRadius = '6px';
  cRed.style.cursor = 'pointer';
  w.appendChild(cRed);

  cRed.addEventListener('click', function() {
    o.parentNode.removeChild(o);
  });

  var cOrange = document.createElement('div');
  cOrange.style.position = 'absolute';
  cOrange.style.top = '3px';
  cOrange.style.right = '25px';
  cOrange.style.width = '16px';
  cOrange.style.height = '16px';
  cOrange.style.backgroundColor = 'orange';
  cOrange.style.borderRadius = '6px';
  cOrange.style.cursor = 'pointer';
  w.appendChild(cOrange);

  cOrange.addEventListener('click', function() {
    o.parentNode.removeChild(o);
  });

  var d = false,
    x = 0,
    y = 0;

  w.addEventListener('mousedown', function(e) {
    d = true;
    x = e.clientX;
    y = e.clientY;
    o.style.cursor = 'move';
  });

  window.addEventListener('mousemove', function(e) {
    if (d) {
      var t = e.clientX - x;
      var n = e.clientY - y;
      var a = parseFloat(o.style.left) || 0;
      var r = parseFloat(o.style.top) || 0;
      o.style.left = a + t + 'px';
      o.style.top = r + n + 'px';
      x = e.clientX;
      y = e.clientY;
    }
  });

  window.addEventListener('mouseup', function() {
    d = false;
    o.style.cursor = 'default';
  });

  var style = document.createElement('style');
  style.innerHTML = `
    .drag-window {
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      height: 180px;
      background-color: black;
      opacity: 1;
      border-radius: 12px;
      z-index: 9999;
    }
    .drag-window-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 12px 12px 0 0;
      cursor: move;
    }
    .drag-window-close {
      position: absolute;
      top: 3px;
      right: 3px;
      width: 16px;
      height: 16px;
      border-radius: 6px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  o.classList.add('drag-window');
  w.classList.add('drag-window-bar');
  cRed.classList.add('drag-window-close');
  cOrange.classList.add('drag-window-close');
})();
