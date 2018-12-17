const RATE: number = 2100;

/**
 * @description 下拉加载
 * @param {EventListenerObject} event 事件对象
 * @param {Function} callback 回调
 */
function dropdownLoad(event: any, callback: any): void {
  let { clientHeight, scrollHeight, scrollTop } = document.documentElement;
  let blank: number = 20; //提前量
  let timer: any = null;

  //节流处理
  if (timer) {
    clearTimeout(timer);
  } else {
    setTimeout(() => {
      if (scrollTop + clientHeight >= scrollHeight - blank) {
        if (typeof callback === "function") {
          callback.call(event);
        }
      }
    }, RATE);
  }
}

export { dropdownLoad };
