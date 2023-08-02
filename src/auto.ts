import {throttle} from '@dense-labs/utils'
function onResize(ev: any, el: any): any {
    const height = document.documentElement.clientHeight - el.offsetTop
    el.style.height = height + 'px'
}
export default {
	mounted(el: any, binding: any) {
        setTimeout(() => {
            onResize(null, el)
            window.addEventListener('resize', throttle((event: any) => onResize(event, el), 1000))
        }, 200)
	},
	// 元素卸载前也记得清理定时器并且移除监听事件
	beforeUnmount(el: any, binding: any) {
        window.removeEventListener('resize', onResize(null, el))
	}
}