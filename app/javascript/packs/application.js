// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// External imports
// import { removeClass } from '../components/removeClass';
// import { swipeLeft } from '../components/swipeLeft';
import 'bootstrap';
import { changeLocation } from '../components/changeWord';
import { seeAllProfessions } from '../components/seeAllProfessions';
import { seeAllFeatured } from '../components/seeAllFeatured';
import { seeSideways } from '../components/seeSideways';
import { hamBurger } from '../components/hamBurgerMenu';
// import { disappearAnimation } from '../components/disappearAnimation';

// Internal imports
document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // removeClass();
  // swipeLeft();
  hamBurger();
  changeLocation();
  seeAllProfessions();
  seeAllFeatured();
  seeSideways();
});


