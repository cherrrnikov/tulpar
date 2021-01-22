$(document).ready(function() {
  //При наведении на .item-info__text блок с инфой всплывает

  //Первый блок
  let itemInfoBlock = $(".services-wrapper__item--first");
  itemInfoBlock.on("mouseenter", function() {
    $(".item-info--first").addClass("item-info--visible");
    $(".item-info__text--first").addClass("item-info__text--visible");
  });
  itemInfoBlock.on("mouseleave", function() {
    $(".item-info--first").removeClass("item-info--visible");
    $(".item-info__text--first").removeClass("item-info__text--visible");
  });

  //Второй блок
  let itemInfoBlock2 = $(".services-wrapper__item--second");
  itemInfoBlock2.on("mouseenter", function() {
    $(".item-info--second").addClass("item-info--visible");
    $(".item-info__text--second").addClass("item-info__text--visible");
  });
  itemInfoBlock2.on("mouseleave", function() {
    $(".item-info--second").removeClass("item-info--visible");
    $(".item-info__text--second").removeClass("item-info__text--visible");
  });

  //Третий блок
  let itemInfoBlock3 = $(".services-wrapper__item--third");
  itemInfoBlock3.on("mouseenter", function() {
    $(".item-info--third").addClass("item-info--visible");
    $(".item-info__text--third").addClass("item-info__text--visible");
  });
  itemInfoBlock3.on("mouseleave", function() {
    $(".item-info--third").removeClass("item-info--visible");
    $(".item-info__text--third").removeClass("item-info__text--visible");
  });

  //Четвёртый блок
  let itemInfoBlock4 = $(".services-wrapper__item--fourth");
  itemInfoBlock4.on("mouseenter", function() {
    $(".item-info--fourth").addClass("item-info--visible");
    $(".item-info__text--fourth").addClass("item-info__text--visible");
  });
  itemInfoBlock4.on("mouseleave", function() {
    $(".item-info--fourth").removeClass("item-info--visible");
    $(".item-info__text--fourth").removeClass("item-info__text--visible");
  });
});