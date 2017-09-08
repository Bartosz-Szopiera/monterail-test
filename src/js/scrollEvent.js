export default {
  preventDefault,
  // preventDefaultForScrollKeys,
  disableScroll,
  enableScroll
}

// --- Courtesy of Stack Overflow ---
// --- Modified ---

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  const profile = document.querySelector('#profile')

  // I scroll performed over the scrollbar?
  const wdw = event.target === window.document;
  // Is scroll performed over the shadowed background?
  const bck = event.target.id === 'profileBackground';
  // Is modal scrolled max to the top and scrolling
  // continues?
  const scrTop = (
    profile.scrollTop === 0 && (
    (event.wheelDelta > 0) ||
    (event.keyCode === 38)
    // ()
    )
  );
  // Is modal scrolled to the bottom and scrolling
  // continues?
  const scrollHeight = profile.scrollHeight;
  const offsetHeight = profile.offsetHeight;
  const scrBot = (
    profile.scrollTop === (scrollHeight - offsetHeight) && (
    (event.wheelDelta < 0) ||
    (event.keyCode === 40)
    // ()
    )
  );

  // console.log('-----------------');
  // console.log('Window?: ' + wdw);
  // console.log('Background?: ' + bck);
  // console.log('Over the top?: ' + scrTop);
  // console.log('Under the ground?: ' + scrBot);

  if (wdw || bck || scrTop || scrBot) {
        e = e || window.event;
        if (e.preventDefault)
        e.preventDefault();
        e.returnValue = false;
      }
  return
}

// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  // document.onkeydown  = preventDefaultForScrollKeys;
  document.onkeydown  = preventDefault;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
