/**
 * 生成Dom-Diff Key值
 */
function generateKey(): string {
  let rnd = parseInt(Math.random() * 10000000 + "");
  return `K_${rnd}`;
}

/**
 * 节流
 * @param fn 节流函数
 * @param delay 延时间隔
 */
function throttle(fn: any, delay: number): any {
  let tick: number = 0;
  return function(...args: any) {
    let now = Date.now();
    if (now - tick >= delay) {
      tick = Date.now();
      fn(...args);
    }
  };
}

export { generateKey, throttle };
