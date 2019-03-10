/**
 * @description 下拉加载
 * @param {EventListenerObject} event 事件对象
 * @param {Object} scrollDOM 滚动元素
 * @param {Function} callback 回调
 */
function pullUpLoad(event: any, scrollDOM: any, callback: any): void {
  let { clientHeight, scrollHeight, scrollTop } = scrollDOM;
  // let blank: number = 30; //提前量
  if (scrollTop + clientHeight >= scrollHeight) {
    if (typeof callback === "function") {
      callback.call(event);
    }
  }
}

export { pullUpLoad };
