import debounce from './debounce'
import throttle from './throttle'
import auto from './auto'
export default {
	install: (app: any) => {
		app.directive("debounce", debounce)
		app.directive("throttle", throttle)
		app.directive("auto", auto)
	}
}