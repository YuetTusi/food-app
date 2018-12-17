import { throttle } from "./tools";
const DELAY: number = 100;

/**
 * @description 下拉加载
 * @param {EventListenerObject} event 事件对象
 * @param {Function} callback 回调
 */
function dropdownLoad(event: any, callback: any): void {
  let { clientHeight, scrollHeight, scrollTop } = document.documentElement;
  // let blank: number = 30; //提前量
  // console.log(scrollTop + clientHeight - (scrollHeight - blank));
  if (scrollTop + clientHeight >= scrollHeight) {
    if (typeof callback === "function") {
      callback.call(event);
    }
  }
}

export { dropdownLoad };
