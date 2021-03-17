"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* <script src='https://code.jquery.com/jquery-3.5.1.slim.min.js' integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj' crossorigin='anonymous'></script>
<script src='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx' crossorigin='anonymous'></script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>

<script> */
var $ = _jquery["default"];
$('body').click(function () {
  console.log(1);
});
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

window.onclick = function (event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
  }
};

var footerBlock = $("footer .col-sm-4");
footerBlock.click(function () {
  footerBlock.removeClass('active');
  $(this).addClass('active');
});
var num = $(".calendar .num");
num.click(function () {
  num.removeClass('active');
  $(this).addClass('active');
});
var color = $(".row .color");
var changeColor = $(".changeColor");
color.click(function () {
  changeColor.css('color', $(this).attr('data-color'));
  $('.logo').css('color', $(this).attr('data-color'));
  $('body').css('background', $(this).attr('data-color'));
});