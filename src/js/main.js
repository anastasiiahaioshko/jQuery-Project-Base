// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");

$(document).ready(function() {
    var button = document.getElementById("filter-button");
var container = document.getElementById("filter-container");
var input = document.querySelectorAll("input");

button.onclick = function (e) {
  e.stopPropagation();
  if (container.classList.contains("filters--active")) {
    container.classList.remove("filters--active");
  } else {
    container.classList.add("filters--active");
  }
};

container.onclick = function (e) {
  e.stopPropagation();
};

window.onclick = function () {
  container.classList.remove("filters--active");
};

console.log(input);

for (var i = 0; i < input.length; i++) {
  var currentInput = input[i];

  currentInput.onclick = function () {
    var isChecked = false;
    for (var j = 0; j < input.length; j++) {
      if (input[j].checked) {
        isChecked = true;
        break;
      }
    }

    if (isChecked) {
      button.classList.add("button--highlight");
    } else {
      button.classList.remove("button--highlight");
    }
  };
}
    $('.accordion-item').hide();
    //code to respond to clicking one of the buttons in div.filters
    $('.accordion-header').click(function() {
      // toggle show and hide
      $(this).next('.accordion-item').toggle(500);
      return false;
    });
  });
