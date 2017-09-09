export default rollUpHeader;

function rollUpHeader(header, handler) {
  // Listen for the window scroll event.
  // Adjust header dimensions to the compact form
  // and then pin it at the top (fixed position).
  // Set final compact height as a height of the shadow
  // element working as a dent for undisturbed document
  // content flow.
  // Discard handler calls if scroll state is beyond
  // distance at which listening is important.
  // Throttle evenet listener if scroll state if very
  // far beyond.

  const scrollTop = document.body.scrollTop;
  // Throttle
  if (scrollTop > 200) {
    window.document.removeEventListener('scroll', handler);
    setTimeout(function(){
      window.document.addEventListener('scroll', handler)
    },100)
    return
  }

  const startHeight = 125;
  const endHeight = 80;
  const startMargin = 25;
  const endMargin = 10;
  const heightDelta = startHeight - endHeight;
  const marginDelta = startMargin - endMargin;
  const delta = heightDelta + marginDelta;
  const totalHeight = 155;
  const column = header.querySelector('.column');
  const button = header.querySelector('.buttonWrapper');

  if (scrollTop === 0) {
    column.style.height = startHeight + 'px';
    column.style.marginTop = startMargin + 'px';
    button.style.top = startMargin + 'px';
    return
  }
  else if (scrollTop > delta) {
    column.style.height = endHeight + 'px';
    column.style.marginTop = endMargin + 'px';
    button.style.top = endMargin + 'px';
    return
  }

  const ratio = scrollTop/delta;
  const newHeight = (startHeight - heightDelta*ratio);
  const newMargin = (startMargin - marginDelta*ratio);

  column.style.height = newHeight + 'px';
  column.style.marginTop = newMargin + 'px';
  button.style.top = newMargin + 'px';
}
