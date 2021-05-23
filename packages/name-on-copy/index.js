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
exports.generateNext = exports.generateFirst = exports.increment = exports.getFileNameAndExtension = exports.isUnique = void 0;
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
function increment(value, useSpaces) {
    var space = useSpaces ? ' ' : '';
    var matched = value.match(/\d+$/);
    if (matched) {
        var nextNumber = Number(matched[0]) + 1;
        return value.slice(0, matched.index).trim() + space + nextNumber;
    }
    return value.trim() + space + 2;
}
exports.increment = increment;
function generateFirst(source, suffix, useSpaces, isFileName) {
    var space = useSpaces ? ' ' : '';
    var name = '';
    var extension = '';
    if (isFileName) {
        var res = getFileNameAndExtension(source);
        name = res.fileName;
        extension = res.extension;
    }
    else {
        name = source;
    }
    var pattern = new RegExp("" + space + suffix + "(" + space + "\\d*)?$");
    var matched = name.match(pattern);
    if (matched) {
        var number = 2;
        if (matched[1]) {
            number = Number(matched[1]) + 1;
        }
        return (name.slice(0, name.indexOf(matched[0])).trim() +
            space +
            suffix +
            space +
            number +
            extension);
    }
    return name.trim() + space + suffix + extension;
}
exports.generateFirst = generateFirst;
function generateNext(name, useSpaces, isFileName) {
    if (!isFileName) {
        return increment(name, useSpaces);
    }
    var _a = getFileNameAndExtension(name), fileName = _a.fileName, extension = _a.extension;
    return increment(fileName, useSpaces) + extension;
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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
        name = utils_1.generateNext(name, useSpaces, isFileName);
    }
    return name;
}
exports.default = nameOnCopy;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lT25Db3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW1lT25Db3B5Ly4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL25hbWVPbkNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFtZU9uQ29weS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBLFNBQWdCLFFBQVEsQ0FBQyxLQUFhLEVBQUUsTUFBZ0I7SUFDdEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQix1QkFBdUIsQ0FBQyxLQUFhO0lBQ25ELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2QsT0FBTztZQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDL0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzlCO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsRUFBRTtLQUNkO0FBQ0gsQ0FBQztBQVpELDBEQVlDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEtBQWEsRUFBRSxTQUFrQjtJQUN6RCxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNsQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNuQyxJQUFJLE9BQU8sRUFBRTtRQUNY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QUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUMvRCxPQUFPLENBQUMsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDN0IsSUFBSSxHQUFHLG9CQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7S0FDakQ7SUFDRCxPQUFPLElBQUk7QUFDYixDQUFDO0FBWEQsNkJBV0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuYW1lT25Db3B5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5hbWVPbkNvcHlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgZnVuY3Rpb24gaXNVbmlxdWUodmFsdWU6IHN0cmluZywgdmFsdWVzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gdmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24odmFsdWU6IHN0cmluZykge1xuICBjb25zdCBpbmRleCA9IHZhbHVlLmxhc3RJbmRleE9mKCcuJylcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZU5hbWU6IHZhbHVlLnNsaWNlKDAsIGluZGV4KSxcbiAgICAgIGV4dGVuc2lvbjogdmFsdWUuc2xpY2UoaW5kZXgpLFxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGVOYW1lOiB2YWx1ZSxcbiAgICBleHRlbnNpb246ICcnLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnQodmFsdWU6IHN0cmluZywgdXNlU3BhY2VzOiBib29sZWFuKSB7XG4gIGNvbnN0IHNwYWNlID0gdXNlU3BhY2VzID8gJyAnIDogJydcbiAgY29uc3QgbWF0Y2hlZCA9IHZhbHVlLm1hdGNoKC9cXGQrJC8pXG4gIGlmIChtYXRjaGVkKSB7XG4gICAgY29uc3QgbmV4dE51bWJlciA9IE51bWJlcihtYXRjaGVkWzBdKSArIDFcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgbWF0Y2hlZC5pbmRleCkudHJpbSgpICsgc3BhY2UgKyBuZXh0TnVtYmVyXG4gIH1cbiAgcmV0dXJuIHZhbHVlLnRyaW0oKSArIHNwYWNlICsgMlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGaXJzdChcbiAgc291cmNlOiBzdHJpbmcsXG4gIHN1ZmZpeDogc3RyaW5nLFxuICB1c2VTcGFjZXM6IGJvb2xlYW4sXG4gIGlzRmlsZU5hbWU6IGJvb2xlYW5cbikge1xuICBjb25zdCBzcGFjZSA9IHVzZVNwYWNlcyA/ICcgJyA6ICcnXG4gIGxldCBuYW1lID0gJydcbiAgbGV0IGV4dGVuc2lvbiA9ICcnXG4gIGlmIChpc0ZpbGVOYW1lKSB7XG4gICAgY29uc3QgcmVzID0gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24oc291cmNlKVxuICAgIG5hbWUgPSByZXMuZmlsZU5hbWVcbiAgICBleHRlbnNpb24gPSByZXMuZXh0ZW5zaW9uXG4gIH0gZWxzZSB7XG4gICAgbmFtZSA9IHNvdXJjZVxuICB9XG5cbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoYCR7c3BhY2V9JHtzdWZmaXh9KCR7c3BhY2V9XFxcXGQqKVxcP1xcJGApXG4gIGNvbnN0IG1hdGNoZWQgPSBuYW1lLm1hdGNoKHBhdHRlcm4pXG4gIGlmIChtYXRjaGVkKSB7XG4gICAgbGV0IG51bWJlciA9IDJcbiAgICBpZiAobWF0Y2hlZFsxXSkge1xuICAgICAgbnVtYmVyID0gTnVtYmVyKG1hdGNoZWRbMV0pICsgMVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgbmFtZS5zbGljZSgwLCBuYW1lLmluZGV4T2YobWF0Y2hlZFswXSkpLnRyaW0oKSArXG4gICAgICBzcGFjZSArXG4gICAgICBzdWZmaXggK1xuICAgICAgc3BhY2UgK1xuICAgICAgbnVtYmVyICtcbiAgICAgIGV4dGVuc2lvblxuICAgIClcbiAgfVxuICByZXR1cm4gbmFtZS50cmltKCkgKyBzcGFjZSArIHN1ZmZpeCArIGV4dGVuc2lvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOZXh0KG5hbWU6IHN0cmluZywgdXNlU3BhY2VzOiBib29sZWFuLCBpc0ZpbGVOYW1lOiBib29sZWFuKSB7XG4gIGlmICghaXNGaWxlTmFtZSkge1xuICAgIHJldHVybiBpbmNyZW1lbnQobmFtZSwgdXNlU3BhY2VzKVxuICB9XG4gIGNvbnN0IHsgZmlsZU5hbWUsIGV4dGVuc2lvbiB9ID0gZ2V0RmlsZU5hbWVBbmRFeHRlbnNpb24obmFtZSlcbiAgcmV0dXJuIGluY3JlbWVudChmaWxlTmFtZSwgdXNlU3BhY2VzKSArIGV4dGVuc2lvblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGlzVW5pcXVlLCBnZW5lcmF0ZUZpcnN0LCBnZW5lcmF0ZU5leHQgfSBmcm9tICcuL3V0aWxzJ1xuXG50eXBlIFRQYXJlbnRoZXNpcyA9ICcoJyB8ICd7JyB8ICdbJ1xuXG5pbnRlcmZhY2UgSU9wdGlvbnMge1xuICBzdWZmaXg/OiBzdHJpbmdcbiAgdXNlU3BhY2VzPzogYm9vbGVhblxuICBpc0ZpbGVOYW1lPzogYm9vbGVhblxuICBwYXJlbnRoZXNpcz86IFRQYXJlbnRoZXNpc1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9uczogSU9wdGlvbnMgPSB7XG4gIHN1ZmZpeDogJ2NvcHknLFxuICB1c2VTcGFjZXM6IGZhbHNlLFxuICBpc0ZpbGVOYW1lOiBmYWxzZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmFtZU9uQ29weShcbiAgc291cmNlOiBzdHJpbmcgPSAnJyxcbiAgbmFtZXM6IHN0cmluZ1tdID0gW10sXG4gIG9wdGlvbnM6IElPcHRpb25zID0ge31cbikge1xuICBjb25zdCB7IHN1ZmZpeCwgdXNlU3BhY2VzLCBpc0ZpbGVOYW1lIH0gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICBsZXQgbmFtZSA9IGdlbmVyYXRlRmlyc3Qoc291cmNlLCBzdWZmaXgsIHVzZVNwYWNlcywgaXNGaWxlTmFtZSlcbiAgd2hpbGUgKCFpc1VuaXF1ZShuYW1lLCBuYW1lcykpIHtcbiAgICBuYW1lID0gZ2VuZXJhdGVOZXh0KG5hbWUsIHVzZVNwYWNlcywgaXNGaWxlTmFtZSlcbiAgfVxuICByZXR1cm4gbmFtZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==