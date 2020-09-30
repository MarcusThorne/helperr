const changeWord = () => {
  const word = document.getElementById('changing');
  const inst = setInterval(change, 1000);
  const counter = 0;
  const location = ['holy', 'wolly', 'brolly']

  function change() {
    location.innerHTML = word[counter];
    counter++;
    if (counter >= word.length) {
      counter = 0;
      clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    };
  };
};

export { changeWord };