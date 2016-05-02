$(document).ready(function(){

  var $content = $(".js-content");
  var $wrapper = $("#wrapper");
  var contentArray = 0;
  var $arrow = $('.js-arrow');

  $arrow.on('click', moveElement)

  function moveElement(e) {
    e.preventDefault();
    let $arrowElement = $(this);
    let moveDirection = $arrowElement.data('navigation');
    checkContentArray (moveDirection);
    let $element = $($content.toArray()[contentArray]);
    let position = $element.data('pos');
    $wrapper.css('transform', `translate3d(${position}, 0px, 0)`);
  }

  function checkContentArray (direction){
    if (contentArray === 0 && direction === -1 ) {
      contentArray = $content.length -1;
    } else if (contentArray === $content.length -1 && direction === 1) {
        contentArray = 0;
    } else if (direction === -1 && contentArray === $content.length -1) {
      contentArray += direction;
    } else {
      contentArray += direction;
    }
  }

});// End of document
