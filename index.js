/**
 * Name: Said Sheck
 * Date: Oct 18th
 * Section: CSE 154 Section AD: Dylan Mckone
 *
 * The following file allows for the functionality of a button in my about page
 * which allow users able add nyan cats on my about page
 */
"use strict";

(function() {

  // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED HERE


  window.addEventListener("load", init);

  /**
   * the following method runs any method which manipulates or extracts from
   * the DOM. Which why the method is to run once the page has loaded
   */
  function init() {
    qs("button").addEventListener("click",imageAdder);
  }

  /**
   * The following  method allows users to add nyan cats on the page
   */
  function imageAdder() {
    if (qsa("#UI-image-container > img").length < 5) {
      let image = document.createElement("img");
      image.src = "images/nyan-cat.gif";
      image.alt = "Photo of Nyan Cat"
      id("UI-image-container").appendChild(image);
      image.classList.add("UI-image-item");
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();