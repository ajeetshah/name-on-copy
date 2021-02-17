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
function getFileNameAndExtension(name) {
    var index = name.lastIndexOf('.');
    if (index > -1) {
        return {
            fileName: name.slice(0, index),
            extension: name.slice(index),
        };
    }
    return {
        fileName: name,
        extension: '',
    };
}
function increment(name) {
    var lastChar = name.slice(-1);
    if (isNumber(lastChar)) {
        var nameWithoutLastIndex = name.slice(0, name.length - 1);
        return nameWithoutLastIndex + (+lastChar + 1);
    }
    return name + 2;
}
function generateNext(name, isFileName) {
    if (!isFileName) {
        return increment(name);
    }
    var _a = getFileNameAndExtension(name), fileName = _a.fileName, extension = _a.extension;
    return increment(fileName) + extension;
}
function generateFirst(source, suffix, useSpaces, isFileName) {
    var space = useSpaces ? ' ' : '';
    if (!isFileName) {
        return source + space + suffix;
    }
    var _a = getFileNameAndExtension(source), fileName = _a.fileName, extension = _a.extension;
    return fileName + space + suffix + extension;
}
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
    var name = generateFirst(source, suffix, useSpaces, isFileName);
    while (!isUnique(name, names)) {
        name = generateNext(name, isFileName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lT25Db3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW1lT25Db3B5Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL25hbWVPbkNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFtZU9uQ29weS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLFNBQVMsUUFBUSxDQUFDLEtBQWE7SUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsSUFBWSxFQUFFLEtBQWU7SUFDN0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxJQUFZO0lBQzNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ25DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2QsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDOUIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzdCO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLElBQUk7UUFDZCxTQUFTLEVBQUUsRUFBRTtLQUNkO0FBQ0gsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLElBQVk7SUFDN0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN0QixJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNELE9BQU8sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7S0FDOUM7SUFDRCxPQUFPLElBQUksR0FBRyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxJQUFZLEVBQUUsVUFBbUI7SUFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNmLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztLQUN2QjtJQUNLLFNBQTBCLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUFyRCxRQUFRLGdCQUFFLFNBQVMsZUFBa0M7SUFDN0QsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUztBQUN4QyxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQ3BCLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBa0IsRUFDbEIsVUFBbUI7SUFFbkIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNmLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNO0tBQy9CO0lBQ0ssU0FBMEIsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQXZELFFBQVEsZ0JBQUUsU0FBUyxlQUFvQztJQUMvRCxPQUFPLFFBQVEsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLFNBQVM7QUFDOUMsQ0FBQztBQVdELElBQU0sY0FBYyxHQUFhO0lBQy9CLE1BQU0sRUFBRSxNQUFNO0lBQ2QsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLEtBQUs7Q0FDbEI7QUFFRCxTQUF3QixVQUFVLENBQ2hDLE1BQW1CLEVBQ25CLEtBQW9CLEVBQ3BCLE9BQXNCO0lBRnRCLG9DQUFtQjtJQUNuQixrQ0FBb0I7SUFDcEIsc0NBQXNCO0lBRWhCLFNBQW9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUF4RSxNQUFNLGNBQUUsU0FBUyxpQkFBRSxVQUFVLGdCQUEyQztJQUNoRixJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0lBQy9ELE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzdCLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztLQUN0QztJQUNELE9BQU8sSUFBSTtBQUNiLENBQUM7QUFYRCw2QkFXQzs7Ozs7OztVQy9FRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmFtZU9uQ29weVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuYW1lT25Db3B5XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IHN0cmluZykge1xuICByZXR1cm4gIWlzTmFOKCt2YWx1ZSlcbn1cblxuZnVuY3Rpb24gaXNVbmlxdWUobmFtZTogc3RyaW5nLCBuYW1lczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIG5hbWVzLmluZGV4T2YobmFtZSkgPT09IC0xXG59XG5cbmZ1bmN0aW9uIGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKG5hbWU6IHN0cmluZykge1xuICBjb25zdCBpbmRleCA9IG5hbWUubGFzdEluZGV4T2YoJy4nKVxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlTmFtZTogbmFtZS5zbGljZSgwLCBpbmRleCksXG4gICAgICBleHRlbnNpb246IG5hbWUuc2xpY2UoaW5kZXgpLFxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGVOYW1lOiBuYW1lLFxuICAgIGV4dGVuc2lvbjogJycsXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50KG5hbWU6IHN0cmluZykge1xuICBjb25zdCBsYXN0Q2hhciA9IG5hbWUuc2xpY2UoLTEpXG4gIGlmIChpc051bWJlcihsYXN0Q2hhcikpIHtcbiAgICBjb25zdCBuYW1lV2l0aG91dExhc3RJbmRleCA9IG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSAxKVxuICAgIHJldHVybiBuYW1lV2l0aG91dExhc3RJbmRleCArICgrbGFzdENoYXIgKyAxKVxuICB9XG4gIHJldHVybiBuYW1lICsgMlxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU5leHQobmFtZTogc3RyaW5nLCBpc0ZpbGVOYW1lOiBib29sZWFuKSB7XG4gIGlmICghaXNGaWxlTmFtZSkge1xuICAgIHJldHVybiBpbmNyZW1lbnQobmFtZSlcbiAgfVxuICBjb25zdCB7IGZpbGVOYW1lLCBleHRlbnNpb24gfSA9IGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKG5hbWUpXG4gIHJldHVybiBpbmNyZW1lbnQoZmlsZU5hbWUpICsgZXh0ZW5zaW9uXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRmlyc3QoXG4gIHNvdXJjZTogc3RyaW5nLFxuICBzdWZmaXg6IHN0cmluZyxcbiAgdXNlU3BhY2VzOiBib29sZWFuLFxuICBpc0ZpbGVOYW1lOiBib29sZWFuXG4pIHtcbiAgY29uc3Qgc3BhY2UgPSB1c2VTcGFjZXMgPyAnICcgOiAnJ1xuICBpZiAoIWlzRmlsZU5hbWUpIHtcbiAgICByZXR1cm4gc291cmNlICsgc3BhY2UgKyBzdWZmaXhcbiAgfVxuICBjb25zdCB7IGZpbGVOYW1lLCBleHRlbnNpb24gfSA9IGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKHNvdXJjZSlcbiAgcmV0dXJuIGZpbGVOYW1lICsgc3BhY2UgKyBzdWZmaXggKyBleHRlbnNpb25cbn1cblxudHlwZSBUUGFyZW50aGVzaXMgPSAnKCcgfCAneycgfCAnWydcblxuaW50ZXJmYWNlIElPcHRpb25zIHtcbiAgc3VmZml4Pzogc3RyaW5nXG4gIHVzZVNwYWNlcz86IGJvb2xlYW5cbiAgaXNGaWxlTmFtZT86IGJvb2xlYW5cbiAgcGFyZW50aGVzaXM/OiBUUGFyZW50aGVzaXNcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnM6IElPcHRpb25zID0ge1xuICBzdWZmaXg6ICdjb3B5JyxcbiAgdXNlU3BhY2VzOiBmYWxzZSxcbiAgaXNGaWxlTmFtZTogZmFsc2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hbWVPbkNvcHkoXG4gIHNvdXJjZTogc3RyaW5nID0gJycsXG4gIG5hbWVzOiBzdHJpbmdbXSA9IFtdLFxuICBvcHRpb25zOiBJT3B0aW9ucyA9IHt9XG4pIHtcbiAgY29uc3QgeyBzdWZmaXgsIHVzZVNwYWNlcywgaXNGaWxlTmFtZSB9ID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgbGV0IG5hbWUgPSBnZW5lcmF0ZUZpcnN0KHNvdXJjZSwgc3VmZml4LCB1c2VTcGFjZXMsIGlzRmlsZU5hbWUpXG4gIHdoaWxlICghaXNVbmlxdWUobmFtZSwgbmFtZXMpKSB7XG4gICAgbmFtZSA9IGdlbmVyYXRlTmV4dChuYW1lLCBpc0ZpbGVOYW1lKVxuICB9XG4gIHJldHVybiBuYW1lXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iXSwic291cmNlUm9vdCI6IiJ9