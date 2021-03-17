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

/***/ 593:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateNext = exports.generateFirst = exports.increment = exports.getFileNameAndExtension = exports.isUnique = exports.isNumber = void 0;
// TODO write test for these
function isNumber(value) {
    return !isNaN(+value);
}
exports.isNumber = isNumber;
function isUnique(value, values) {
    return values.indexOf(value) === -1;
}
exports.isUnique = isUnique;
function getFileNameAndExtension(value) {
    var index = value.lastIndexOf('.');
    if (index > -1) {
        return {
            fileName: value.slice(0, index),
            extension: value.slice(index),
        };
    }
    return {
        fileName: value,
        extension: '',
    };
}
exports.getFileNameAndExtension = getFileNameAndExtension;
function increment(value) {
    var matched = value.match(/\d+$/);
    if (matched) {
        var nextNumber = Number(matched[0]) + 1;
        return value.slice(0, matched.index) + nextNumber;
    }
    return value + 2;
}
exports.increment = increment;
function generateFirst(source, suffix, useSpaces, isFileName) {
    var space = useSpaces ? ' ' : '';
    if (!isFileName) {
        return source + space + suffix;
    }
    var _a = getFileNameAndExtension(source), fileName = _a.fileName, extension = _a.extension;
    return fileName + space + suffix + extension;
}
exports.generateFirst = generateFirst;
function generateNext(name, isFileName) {
    if (!isFileName) {
        return increment(name);
    }
    var _a = getFileNameAndExtension(name), fileName = _a.fileName, extension = _a.extension;
    return increment(fileName) + extension;
}
exports.generateNext = generateNext;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(593);
var defaultOptions = {
    suffix: 'copy',
    useSpaces: false,
    isFileName: false,
};
function nameOnCopy(source, names, options) {
    if (source === void 0) { source = ''; }
    if (names === void 0) { names = []; }
    if (options === void 0) { options = {}; }
    var _a = Object.assign(defaultOptions, options), suffix = _a.suffix, useSpaces = _a.useSpaces, isFileName = _a.isFileName;
    var name = utils_1.generateFirst(source, suffix, useSpaces, isFileName);
    while (!utils_1.isUnique(name, names)) {
        name = utils_1.generateNext(name, isFileName);
    }
    return name;
}
exports.default = nameOnCopy;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lT25Db3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW1lT25Db3B5Ly4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL25hbWVPbkNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFtZU9uQ29weS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBLDRCQUE0QjtBQUM1QixTQUFnQixRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxLQUFhLEVBQUUsTUFBZ0I7SUFDdEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQix1QkFBdUIsQ0FBQyxLQUFhO0lBQ25ELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2QsT0FBTztZQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDL0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzlCO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsRUFBRTtLQUNkO0FBQ0gsQ0FBQztBQVpELDBEQVlDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEtBQWE7SUFDckMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbkMsSUFBSSxPQUFPLEVBQUU7UUFDWCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVO0tBQ2xEO0lBQ0QsT0FBTyxLQUFLLEdBQUcsQ0FBQztBQUNsQixDQUFDO0FBUEQsOEJBT0M7QUFFRCxTQUFnQixhQUFhLENBQzNCLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBa0IsRUFDbEIsVUFBbUI7SUFFbkIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNmLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNO0tBQy9CO0lBQ0ssU0FBMEIsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQXZELFFBQVEsZ0JBQUUsU0FBUyxlQUFvQztJQUMvRCxPQUFPLFFBQVEsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLFNBQVM7QUFDOUMsQ0FBQztBQVpELHNDQVlDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLElBQVksRUFBRSxVQUFtQjtJQUM1RCxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQ3ZCO0lBQ0ssU0FBMEIsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEVBQXJELFFBQVEsZ0JBQUUsU0FBUyxlQUFrQztJQUM3RCxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTO0FBQ3hDLENBQUM7QUFORCxvQ0FNQzs7Ozs7OztVQ3BERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDckJBLHVDQUErRDtBQVcvRCxJQUFNLGNBQWMsR0FBYTtJQUMvQixNQUFNLEVBQUUsTUFBTTtJQUNkLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxLQUFLO0NBQ2xCO0FBRUQsU0FBd0IsVUFBVSxDQUNoQyxNQUFtQixFQUNuQixLQUFvQixFQUNwQixPQUFzQjtJQUZ0QixvQ0FBbUI7SUFDbkIsa0NBQW9CO0lBQ3BCLHNDQUFzQjtJQUVoQixTQUFvQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBeEUsTUFBTSxjQUFFLFNBQVMsaUJBQUUsVUFBVSxnQkFBMkM7SUFDaEYsSUFBSSxJQUFJLEdBQUcscUJBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDL0QsT0FBTyxDQUFDLGdCQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzdCLElBQUksR0FBRyxvQkFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7S0FDdEM7SUFDRCxPQUFPLElBQUk7QUFDYixDQUFDO0FBWEQsNkJBV0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuYW1lT25Db3B5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5hbWVPbkNvcHlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyBUT0RPIHdyaXRlIHRlc3QgZm9yIHRoZXNlXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IHN0cmluZykge1xuICByZXR1cm4gIWlzTmFOKCt2YWx1ZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5pcXVlKHZhbHVlOiBzdHJpbmcsIHZhbHVlczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIHZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgY29uc3QgaW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignLicpXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVOYW1lOiB2YWx1ZS5zbGljZSgwLCBpbmRleCksXG4gICAgICBleHRlbnNpb246IHZhbHVlLnNsaWNlKGluZGV4KSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlTmFtZTogdmFsdWUsXG4gICAgZXh0ZW5zaW9uOiAnJyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IHZhbHVlLm1hdGNoKC9cXGQrJC8pXG4gIGlmIChtYXRjaGVkKSB7XG4gICAgY29uc3QgbmV4dE51bWJlciA9IE51bWJlcihtYXRjaGVkWzBdKSArIDFcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgbWF0Y2hlZC5pbmRleCkgKyBuZXh0TnVtYmVyXG4gIH1cbiAgcmV0dXJuIHZhbHVlICsgMlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGaXJzdChcbiAgc291cmNlOiBzdHJpbmcsXG4gIHN1ZmZpeDogc3RyaW5nLFxuICB1c2VTcGFjZXM6IGJvb2xlYW4sXG4gIGlzRmlsZU5hbWU6IGJvb2xlYW5cbikge1xuICBjb25zdCBzcGFjZSA9IHVzZVNwYWNlcyA/ICcgJyA6ICcnXG4gIGlmICghaXNGaWxlTmFtZSkge1xuICAgIHJldHVybiBzb3VyY2UgKyBzcGFjZSArIHN1ZmZpeFxuICB9XG4gIGNvbnN0IHsgZmlsZU5hbWUsIGV4dGVuc2lvbiB9ID0gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24oc291cmNlKVxuICByZXR1cm4gZmlsZU5hbWUgKyBzcGFjZSArIHN1ZmZpeCArIGV4dGVuc2lvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOZXh0KG5hbWU6IHN0cmluZywgaXNGaWxlTmFtZTogYm9vbGVhbikge1xuICBpZiAoIWlzRmlsZU5hbWUpIHtcbiAgICByZXR1cm4gaW5jcmVtZW50KG5hbWUpXG4gIH1cbiAgY29uc3QgeyBmaWxlTmFtZSwgZXh0ZW5zaW9uIH0gPSBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbihuYW1lKVxuICByZXR1cm4gaW5jcmVtZW50KGZpbGVOYW1lKSArIGV4dGVuc2lvblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBpc1VuaXF1ZSwgZ2VuZXJhdGVGaXJzdCwgZ2VuZXJhdGVOZXh0IH0gZnJvbSAnLi91dGlscydcblxudHlwZSBUUGFyZW50aGVzaXMgPSAnKCcgfCAneycgfCAnWydcblxuaW50ZXJmYWNlIElPcHRpb25zIHtcbiAgc3VmZml4Pzogc3RyaW5nXG4gIHVzZVNwYWNlcz86IGJvb2xlYW5cbiAgaXNGaWxlTmFtZT86IGJvb2xlYW5cbiAgcGFyZW50aGVzaXM/OiBUUGFyZW50aGVzaXNcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnM6IElPcHRpb25zID0ge1xuICBzdWZmaXg6ICdjb3B5JyxcbiAgdXNlU3BhY2VzOiBmYWxzZSxcbiAgaXNGaWxlTmFtZTogZmFsc2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hbWVPbkNvcHkoXG4gIHNvdXJjZTogc3RyaW5nID0gJycsXG4gIG5hbWVzOiBzdHJpbmdbXSA9IFtdLFxuICBvcHRpb25zOiBJT3B0aW9ucyA9IHt9XG4pIHtcbiAgY29uc3QgeyBzdWZmaXgsIHVzZVNwYWNlcywgaXNGaWxlTmFtZSB9ID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgbGV0IG5hbWUgPSBnZW5lcmF0ZUZpcnN0KHNvdXJjZSwgc3VmZml4LCB1c2VTcGFjZXMsIGlzRmlsZU5hbWUpXG4gIHdoaWxlICghaXNVbmlxdWUobmFtZSwgbmFtZXMpKSB7XG4gICAgbmFtZSA9IGdlbmVyYXRlTmV4dChuYW1lLCBpc0ZpbGVOYW1lKVxuICB9XG4gIHJldHVybiBuYW1lXG59XG4iXSwic291cmNlUm9vdCI6IiJ9