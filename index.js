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
    var lastChar = value.slice(-1);
    if (isNumber(lastChar)) {
        var nameWithoutLastIndex = value.slice(0, value.length - 1);
        return nameWithoutLastIndex + (+lastChar + 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lT25Db3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW1lT25Db3B5Ly4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL25hbWVPbkNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFtZU9uQ29weS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBLDRCQUE0QjtBQUM1QixTQUFnQixRQUFRLENBQUMsS0FBYTtJQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxLQUFhLEVBQUUsTUFBZ0I7SUFDdEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQix1QkFBdUIsQ0FBQyxLQUFhO0lBQ25ELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2QsT0FBTztZQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDL0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzlCO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsRUFBRTtLQUNkO0FBQ0gsQ0FBQztBQVpELDBEQVlDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEtBQWE7SUFDckMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN0QixJQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdELE9BQU8sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7S0FDOUM7SUFDRCxPQUFPLEtBQUssR0FBRyxDQUFDO0FBQ2xCLENBQUM7QUFQRCw4QkFPQztBQUVELFNBQWdCLGFBQWEsQ0FDM0IsTUFBYyxFQUNkLE1BQWMsRUFDZCxTQUFrQixFQUNsQixVQUFtQjtJQUVuQixJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsT0FBTyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU07S0FDL0I7SUFDSyxTQUEwQix1QkFBdUIsQ0FBQyxNQUFNLENBQUMsRUFBdkQsUUFBUSxnQkFBRSxTQUFTLGVBQW9DO0lBQy9ELE9BQU8sUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsU0FBUztBQUM5QyxDQUFDO0FBWkQsc0NBWUM7QUFFRCxTQUFnQixZQUFZLENBQUMsSUFBWSxFQUFFLFVBQW1CO0lBQzVELElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDdkI7SUFDSyxTQUEwQix1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFBckQsUUFBUSxnQkFBRSxTQUFTLGVBQWtDO0lBQzdELE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVM7QUFDeEMsQ0FBQztBQU5ELG9DQU1DOzs7Ozs7O1VDcEREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUNyQkEsdUNBQStEO0FBVy9ELElBQU0sY0FBYyxHQUFhO0lBQy9CLE1BQU0sRUFBRSxNQUFNO0lBQ2QsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLEtBQUs7Q0FDbEI7QUFFRCxTQUF3QixVQUFVLENBQ2hDLE1BQW1CLEVBQ25CLEtBQW9CLEVBQ3BCLE9BQXNCO0lBRnRCLG9DQUFtQjtJQUNuQixrQ0FBb0I7SUFDcEIsc0NBQXNCO0lBRWhCLFNBQW9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUF4RSxNQUFNLGNBQUUsU0FBUyxpQkFBRSxVQUFVLGdCQUEyQztJQUNoRixJQUFJLElBQUksR0FBRyxxQkFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUMvRCxPQUFPLENBQUMsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDN0IsSUFBSSxHQUFHLG9CQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztLQUN0QztJQUNELE9BQU8sSUFBSTtBQUNiLENBQUM7QUFYRCw2QkFXQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5hbWVPbkNvcHlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibmFtZU9uQ29weVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8vIFRPRE8gd3JpdGUgdGVzdCBmb3IgdGhlc2VcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZTogc3RyaW5nKSB7XG4gIHJldHVybiAhaXNOYU4oK3ZhbHVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmlxdWUodmFsdWU6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gdmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24odmFsdWU6IHN0cmluZykge1xuICBjb25zdCBpbmRleCA9IHZhbHVlLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZU5hbWU6IHZhbHVlLnNsaWNlKDAsIGluZGV4KSxcbiAgICAgIGV4dGVuc2lvbjogdmFsdWUuc2xpY2UoaW5kZXgpLFxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGVOYW1lOiB2YWx1ZSxcbiAgICBleHRlbnNpb246ICcnLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnQodmFsdWU6IHN0cmluZykge1xuICBjb25zdCBsYXN0Q2hhciA9IHZhbHVlLnNsaWNlKC0xKVxuICBpZiAoaXNOdW1iZXIobGFzdENoYXIpKSB7XG4gICAgY29uc3QgbmFtZVdpdGhvdXRMYXN0SW5kZXggPSB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGggLSAxKVxuICAgIHJldHVybiBuYW1lV2l0aG91dExhc3RJbmRleCArICgrbGFzdENoYXIgKyAxKVxuICB9XG4gIHJldHVybiB2YWx1ZSArIDJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmlyc3QoXG4gIHNvdXJjZTogc3RyaW5nLFxuICBzdWZmaXg6IHN0cmluZyxcbiAgdXNlU3BhY2VzOiBib29sZWFuLFxuICBpc0ZpbGVOYW1lOiBib29sZWFuXG4pIHtcbiAgY29uc3Qgc3BhY2UgPSB1c2VTcGFjZXMgPyAnICcgOiAnJ1xuICBpZiAoIWlzRmlsZU5hbWUpIHtcbiAgICByZXR1cm4gc291cmNlICsgc3BhY2UgKyBzdWZmaXhcbiAgfVxuICBjb25zdCB7IGZpbGVOYW1lLCBleHRlbnNpb24gfSA9IGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKHNvdXJjZSlcbiAgcmV0dXJuIGZpbGVOYW1lICsgc3BhY2UgKyBzdWZmaXggKyBleHRlbnNpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTmV4dChuYW1lOiBzdHJpbmcsIGlzRmlsZU5hbWU6IGJvb2xlYW4pIHtcbiAgaWYgKCFpc0ZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIGluY3JlbWVudChuYW1lKVxuICB9XG4gIGNvbnN0IHsgZmlsZU5hbWUsIGV4dGVuc2lvbiB9ID0gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24obmFtZSlcbiAgcmV0dXJuIGluY3JlbWVudChmaWxlTmFtZSkgKyBleHRlbnNpb25cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgaXNVbmlxdWUsIGdlbmVyYXRlRmlyc3QsIGdlbmVyYXRlTmV4dCB9IGZyb20gJy4vdXRpbHMnXG5cbnR5cGUgVFBhcmVudGhlc2lzID0gJygnIHwgJ3snIHwgJ1snXG5cbmludGVyZmFjZSBJT3B0aW9ucyB7XG4gIHN1ZmZpeD86IHN0cmluZ1xuICB1c2VTcGFjZXM/OiBib29sZWFuXG4gIGlzRmlsZU5hbWU/OiBib29sZWFuXG4gIHBhcmVudGhlc2lzPzogVFBhcmVudGhlc2lzXG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBJT3B0aW9ucyA9IHtcbiAgc3VmZml4OiAnY29weScsXG4gIHVzZVNwYWNlczogZmFsc2UsXG4gIGlzRmlsZU5hbWU6IGZhbHNlLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYW1lT25Db3B5KFxuICBzb3VyY2U6IHN0cmluZyA9ICcnLFxuICBuYW1lczogc3RyaW5nW10gPSBbXSxcbiAgb3B0aW9uczogSU9wdGlvbnMgPSB7fVxuKSB7XG4gIGNvbnN0IHsgc3VmZml4LCB1c2VTcGFjZXMsIGlzRmlsZU5hbWUgfSA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gIGxldCBuYW1lID0gZ2VuZXJhdGVGaXJzdChzb3VyY2UsIHN1ZmZpeCwgdXNlU3BhY2VzLCBpc0ZpbGVOYW1lKVxuICB3aGlsZSAoIWlzVW5pcXVlKG5hbWUsIG5hbWVzKSkge1xuICAgIG5hbWUgPSBnZW5lcmF0ZU5leHQobmFtZSwgaXNGaWxlTmFtZSlcbiAgfVxuICByZXR1cm4gbmFtZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==