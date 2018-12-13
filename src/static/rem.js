/**
 * 设置html根元素的基准值
 * 可视区宽除10得到的结果
 */
(function() {
  //可视区宽度
  function setBaseRem(e) {
    var clientWidth = document.documentElement.clientWidth;
    var baseRem = clientWidth / 10; //除以10得到基准值
    var $html = document.getElementsByTagName("html")[0];
    $html.style.fontSize = baseRem + "px";
  }
  setBaseRem(null);
  window.addEventListener("resize", setBaseRem);
})();
