(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nameOnCopy"] = factory();
	else
		root["nameOnCopy"] = factory();
})(self, function() {
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
    if (options === void 0) { options = { suffix: 'copy', useSpaces: false }; }
    var name = source + (options.useSpaces ? ' ' : '') + options.suffix;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lT25Db3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW1lT25Db3B5Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL25hbWVPbkNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFtZU9uQ29weS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLFNBQVMsUUFBUSxDQUFDLEtBQWE7SUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsSUFBWSxFQUFFLEtBQWU7SUFDN0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBWTtJQUM3QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0QsT0FBTyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztLQUM5QztJQUNELE9BQU8sSUFBSSxHQUFHLENBQUM7QUFDakIsQ0FBQztBQU9ELFNBQXdCLFVBQVUsQ0FDaEMsTUFBbUIsRUFDbkIsS0FBb0IsRUFDcEIsT0FBd0Q7SUFGeEQsb0NBQW1CO0lBQ25CLGtDQUFvQjtJQUNwQixzQ0FBc0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0lBRXhELElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU07SUFDbkUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDN0IsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDdkI7SUFDRCxPQUFPLElBQUk7QUFDYixDQUFDO0FBVkQsNkJBVUM7Ozs7Ozs7VUNoQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5hbWVPbkNvcHlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibmFtZU9uQ29weVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgcmV0dXJuICFpc05hTigrdmFsdWUpXG59XG5cbmZ1bmN0aW9uIGlzVW5pcXVlKG5hbWU6IHN0cmluZywgbmFtZXM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBuYW1lcy5pbmRleE9mKG5hbWUpID09PSAtMVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnQobmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGxhc3RDaGFyID0gbmFtZS5zbGljZSgtMSlcbiAgaWYgKGlzTnVtYmVyKGxhc3RDaGFyKSkge1xuICAgIGNvbnN0IG5hbWVXaXRob3V0TGFzdEluZGV4ID0gbmFtZS5zbGljZSgwLCBuYW1lLmxlbmd0aCAtIDEpXG4gICAgcmV0dXJuIG5hbWVXaXRob3V0TGFzdEluZGV4ICsgKCtsYXN0Q2hhciArIDEpXG4gIH1cbiAgcmV0dXJuIG5hbWUgKyAyXG59XG5cbmludGVyZmFjZSBJT3B0aW9ucyB7XG4gIHN1ZmZpeD86IHN0cmluZ1xuICB1c2VTcGFjZXM/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hbWVPbkNvcHkoXG4gIHNvdXJjZTogc3RyaW5nID0gJycsXG4gIG5hbWVzOiBzdHJpbmdbXSA9IFtdLFxuICBvcHRpb25zOiBJT3B0aW9ucyA9IHsgc3VmZml4OiAnY29weScsIHVzZVNwYWNlczogZmFsc2UgfVxuKSB7XG4gIGxldCBuYW1lID0gc291cmNlICsgKG9wdGlvbnMudXNlU3BhY2VzID8gJyAnIDogJycpICsgb3B0aW9ucy5zdWZmaXhcbiAgd2hpbGUgKCFpc1VuaXF1ZShuYW1lLCBuYW1lcykpIHtcbiAgICBuYW1lID0gaW5jcmVtZW50KG5hbWUpXG4gIH1cbiAgcmV0dXJuIG5hbWVcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=