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
function nameOnCopy(source, names, options) {
    if (source === void 0) { source = ''; }
    if (names === void 0) { names = []; }
    if (options === void 0) { options = {}; }
    var _a = options.suffix, suffix = _a === void 0 ? 'copy' : _a, _b = options.useSpaces, useSpaces = _b === void 0 ? false : _b, _c = options.isFileName, isFileName = _c === void 0 ? false : _c;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lT25Db3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW1lT25Db3B5Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL25hbWVPbkNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFtZU9uQ29weS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLFNBQVMsUUFBUSxDQUFDLEtBQWE7SUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsSUFBWSxFQUFFLEtBQWU7SUFDN0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxJQUFZO0lBQzNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ25DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2QsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDOUIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzdCO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLElBQUk7UUFDZCxTQUFTLEVBQUUsRUFBRTtLQUNkO0FBQ0gsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLElBQVk7SUFDN0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN0QixJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNELE9BQU8sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7S0FDOUM7SUFDRCxPQUFPLElBQUksR0FBRyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxJQUFZLEVBQUUsVUFBbUI7SUFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNmLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztLQUN2QjtJQUNLLFNBQTBCLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUFyRCxRQUFRLGdCQUFFLFNBQVMsZUFBa0M7SUFDN0QsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUztBQUN4QyxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQ3BCLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBa0IsRUFDbEIsVUFBbUI7SUFFbkIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNmLE9BQU8sTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNO0tBQy9CO0lBQ0ssU0FBMEIsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQXZELFFBQVEsZ0JBQUUsU0FBUyxlQUFvQztJQUMvRCxPQUFPLFFBQVEsR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLFNBQVM7QUFDOUMsQ0FBQztBQVFELFNBQXdCLFVBQVUsQ0FDaEMsTUFBbUIsRUFDbkIsS0FBb0IsRUFDcEIsT0FBc0I7SUFGdEIsb0NBQW1CO0lBQ25CLGtDQUFvQjtJQUNwQixzQ0FBc0I7SUFFZCxTQUEyRCxPQUFPLE9BQW5ELEVBQWYsTUFBTSxtQkFBRyxNQUFNLE9BQUUsS0FBMEMsT0FBTyxVQUFoQyxFQUFqQixTQUFTLG1CQUFHLEtBQUssT0FBRSxLQUF1QixPQUFPLFdBQVosRUFBbEIsVUFBVSxtQkFBRyxLQUFLLE1BQVk7SUFDMUUsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUMvRCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTtRQUM3QixJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7S0FDdEM7SUFDRCxPQUFPLElBQUk7QUFDYixDQUFDO0FBWEQsNkJBV0M7Ozs7Ozs7VUN0RUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5hbWVPbkNvcHlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibmFtZU9uQ29weVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgcmV0dXJuICFpc05hTigrdmFsdWUpXG59XG5cbmZ1bmN0aW9uIGlzVW5pcXVlKG5hbWU6IHN0cmluZywgbmFtZXM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBuYW1lcy5pbmRleE9mKG5hbWUpID09PSAtMVxufVxuXG5mdW5jdGlvbiBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbihuYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBuYW1lLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZU5hbWU6IG5hbWUuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgZXh0ZW5zaW9uOiBuYW1lLnNsaWNlKGluZGV4KSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlTmFtZTogbmFtZSxcbiAgICBleHRlbnNpb246ICcnLFxuICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudChuYW1lOiBzdHJpbmcpIHtcbiAgY29uc3QgbGFzdENoYXIgPSBuYW1lLnNsaWNlKC0xKVxuICBpZiAoaXNOdW1iZXIobGFzdENoYXIpKSB7XG4gICAgY29uc3QgbmFtZVdpdGhvdXRMYXN0SW5kZXggPSBuYW1lLnNsaWNlKDAsIG5hbWUubGVuZ3RoIC0gMSlcbiAgICByZXR1cm4gbmFtZVdpdGhvdXRMYXN0SW5kZXggKyAoK2xhc3RDaGFyICsgMSlcbiAgfVxuICByZXR1cm4gbmFtZSArIDJcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXh0KG5hbWU6IHN0cmluZywgaXNGaWxlTmFtZTogYm9vbGVhbikge1xuICBpZiAoIWlzRmlsZU5hbWUpIHtcbiAgICByZXR1cm4gaW5jcmVtZW50KG5hbWUpXG4gIH1cbiAgY29uc3QgeyBmaWxlTmFtZSwgZXh0ZW5zaW9uIH0gPSBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbihuYW1lKVxuICByZXR1cm4gaW5jcmVtZW50KGZpbGVOYW1lKSArIGV4dGVuc2lvblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZpcnN0KFxuICBzb3VyY2U6IHN0cmluZyxcbiAgc3VmZml4OiBzdHJpbmcsXG4gIHVzZVNwYWNlczogYm9vbGVhbixcbiAgaXNGaWxlTmFtZTogYm9vbGVhblxuKSB7XG4gIGNvbnN0IHNwYWNlID0gdXNlU3BhY2VzID8gJyAnIDogJydcbiAgaWYgKCFpc0ZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIHNvdXJjZSArIHNwYWNlICsgc3VmZml4XG4gIH1cbiAgY29uc3QgeyBmaWxlTmFtZSwgZXh0ZW5zaW9uIH0gPSBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbihzb3VyY2UpXG4gIHJldHVybiBmaWxlTmFtZSArIHNwYWNlICsgc3VmZml4ICsgZXh0ZW5zaW9uXG59XG5cbmludGVyZmFjZSBJT3B0aW9ucyB7XG4gIHN1ZmZpeD86IHN0cmluZ1xuICB1c2VTcGFjZXM/OiBib29sZWFuXG4gIGlzRmlsZU5hbWU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hbWVPbkNvcHkoXG4gIHNvdXJjZTogc3RyaW5nID0gJycsXG4gIG5hbWVzOiBzdHJpbmdbXSA9IFtdLFxuICBvcHRpb25zOiBJT3B0aW9ucyA9IHt9XG4pIHtcbiAgY29uc3QgeyBzdWZmaXggPSAnY29weScsIHVzZVNwYWNlcyA9IGZhbHNlLCBpc0ZpbGVOYW1lID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgbGV0IG5hbWUgPSBnZW5lcmF0ZUZpcnN0KHNvdXJjZSwgc3VmZml4LCB1c2VTcGFjZXMsIGlzRmlsZU5hbWUpXG4gIHdoaWxlICghaXNVbmlxdWUobmFtZSwgbmFtZXMpKSB7XG4gICAgbmFtZSA9IGdlbmVyYXRlTmV4dChuYW1lLCBpc0ZpbGVOYW1lKVxuICB9XG4gIHJldHVybiBuYW1lXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iXSwic291cmNlUm9vdCI6IiJ9