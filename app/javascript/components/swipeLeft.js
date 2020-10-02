const swipeLeft = () => {
  const _C = document.querySelector('.professions'),
      N = _C.children.length;

  _C.style.setProperty('--n', N)

  let x0 = null;
  let i = 0;
  let locked = false;
  let w;

  function size() { w = window.innerWidth };

  function lock(e) {
    x0 = unify(e).clientX;
    locked = true
  };

  function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

  function move(e) {
    if(locked) {
      let dx = unify(e).clientX - x0,
        s = Math.sign(dx),
        f = +(s*dx/w).toFixed(2);

      if((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > .2) {
        _C.style.setProperty('--i', i -= s);
        f = 1 - f
      }

      anf = Math.round(f*NF);
      ani();

      _C.style.setProperty('--tx', '0px');
      _C.style.setProperty('--f', f);
      _C.classList.toggle('smooth', !(locked = false));
      x0 = null
    }
  };

  function drag(e) {
    e.preventDefault();

    if(locked) { if(x0 || x0 === 0)
      _C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`) }
  };


  size();

  _C.addEventListener('mousemove', drag, false);
  _C.addEventListener('touchmove', drag, false);
  _C.addEventListener('mousedown', lock, false);
  _C.addEventListener('touchstart', lock, false);
  _C.addEventListener('mouseup', move, false);
  _C.addEventListener('touchend', move, false);
  _C.addEventListener('touchmove', e => {e.preventDefault()}, false)
  addEventListener('resize', size, false);
};

export { swipeLeft };