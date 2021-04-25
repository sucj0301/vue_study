
// 输出数组中唯一的值
// let arr = [1,2,2,1,3];

// function unique(arr) {
//     const result = [];
//     arr.forEach(item => {
//         if (result.findIndex(item) === -1) {
//             result.push(item);
//         }
//     })
//     return result;
// }
// console.log('数组唯一的数值:',unique(arr))

// 防抖：动作绑定事件，动作发生一定时间后触发事件，在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。
// function debounce(func, time) {
//     let timer = null;
//     return () => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func.apply(this, arguments)
//         }, timer)
//     }
// }

// for (let i = 0; i <= 4; i++) {
//     setTimeout(() => {
//         console.log(i)
//     },0)
// }

