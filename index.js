(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nameOnCopy"] = factory();
	else
		root["nameOnCopy"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 607:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isNumber(value) {
    return !isNaN(+value);
}
function isUnique(name, names) {
    return names.indexOf(name) === -1;
}
function increment(name) {
    var lastChar = name.slice(-1);
    if (isNumber(lastChar)) {
        var nameWithoutLastIndex = name.slice(0, name.length - 1);
        return nameWithoutLastIndex + (+lastChar + 1);
    }
    return name + 2;
}
function nameOnCopy(source, names, options) {
    if (source === void 0) { source = ''; }
    if (names === void 0) { names = []; }
    if (options === void 0) { options = {}; }
    var _a = options.suffix, suffix = _a === void 0 ? 'copy' : _a, _b = options.useSpaces, useSpaces = _b === void 0 ? false : _b;
    var name = source + (useSpaces ? ' ' : '') + suffix;
    while (!isUnique(name, names)) {
        name = increment(name);
    }
    return name;
}
exports.default = nameOnCopy;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(607);
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lT25Db3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW1lT25Db3B5Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL25hbWVPbkNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFtZU9uQ29weS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLFNBQVMsUUFBUSxDQUFDLEtBQWE7SUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsSUFBWSxFQUFFLEtBQWU7SUFDN0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBWTtJQUM3QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0QsT0FBTyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztLQUM5QztJQUNELE9BQU8sSUFBSSxHQUFHLENBQUM7QUFDakIsQ0FBQztBQU9ELFNBQXdCLFVBQVUsQ0FDaEMsTUFBbUIsRUFDbkIsS0FBb0IsRUFDcEIsT0FBc0I7SUFGdEIsb0NBQW1CO0lBQ25CLGtDQUFvQjtJQUNwQixzQ0FBc0I7SUFFZCxTQUF1QyxPQUFPLE9BQS9CLEVBQWYsTUFBTSxtQkFBRyxNQUFNLE9BQUUsS0FBc0IsT0FBTyxVQUFaLEVBQWpCLFNBQVMsbUJBQUcsS0FBSyxNQUFZO0lBQ3RELElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNO0lBQ25ELE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzdCLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxJQUFJO0FBQ2IsQ0FBQztBQVhELDZCQVdDOzs7Ozs7O1VDakNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuYW1lT25Db3B5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5hbWVPbkNvcHlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJmdW5jdGlvbiBpc051bWJlcih2YWx1ZTogc3RyaW5nKSB7XG4gIHJldHVybiAhaXNOYU4oK3ZhbHVlKVxufVxuXG5mdW5jdGlvbiBpc1VuaXF1ZShuYW1lOiBzdHJpbmcsIG5hbWVzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gbmFtZXMuaW5kZXhPZihuYW1lKSA9PT0gLTFcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50KG5hbWU6IHN0cmluZykge1xuICBjb25zdCBsYXN0Q2hhciA9IG5hbWUuc2xpY2UoLTEpXG4gIGlmIChpc051bWJlcihsYXN0Q2hhcikpIHtcbiAgICBjb25zdCBuYW1lV2l0aG91dExhc3RJbmRleCA9IG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSAxKVxuICAgIHJldHVybiBuYW1lV2l0aG91dExhc3RJbmRleCArICgrbGFzdENoYXIgKyAxKVxuICB9XG4gIHJldHVybiBuYW1lICsgMlxufVxuXG5pbnRlcmZhY2UgSU9wdGlvbnMge1xuICBzdWZmaXg/OiBzdHJpbmdcbiAgdXNlU3BhY2VzPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYW1lT25Db3B5KFxuICBzb3VyY2U6IHN0cmluZyA9ICcnLFxuICBuYW1lczogc3RyaW5nW10gPSBbXSxcbiAgb3B0aW9uczogSU9wdGlvbnMgPSB7fVxuKSB7XG4gIGNvbnN0IHsgc3VmZml4ID0gJ2NvcHknLCB1c2VTcGFjZXMgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICBsZXQgbmFtZSA9IHNvdXJjZSArICh1c2VTcGFjZXMgPyAnICcgOiAnJykgKyBzdWZmaXhcbiAgd2hpbGUgKCFpc1VuaXF1ZShuYW1lLCBuYW1lcykpIHtcbiAgICBuYW1lID0gaW5jcmVtZW50KG5hbWUpXG4gIH1cbiAgcmV0dXJuIG5hbWVcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=