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
    var pattern = new RegExp("" + space + suffix + "(\\d*)?$");
    var matched = name.match(pattern);
    if (matched) {
        var number = 2;
        if (matched[1]) {
            number = Number(matched[1]) + 1;
        }
        return (name.slice(0, name.indexOf(matched[0])) + space + suffix + number + extension);
    }
    return name + space + suffix + extension;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lT25Db3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9uYW1lT25Db3B5Ly4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL25hbWVPbkNvcHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFtZU9uQ29weS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBLFNBQWdCLFFBQVEsQ0FBQyxLQUFhLEVBQUUsTUFBZ0I7SUFDdEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQix1QkFBdUIsQ0FBQyxLQUFhO0lBQ25ELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2QsT0FBTztZQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDL0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzlCO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsRUFBRTtLQUNkO0FBQ0gsQ0FBQztBQVpELDBEQVlDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEtBQWE7SUFDckMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbkMsSUFBSSxPQUFPLEVBQUU7UUFDWCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxPQUFPLEtBQUss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dGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5hbWVPbkNvcHlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibmFtZU9uQ29weVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydCBmdW5jdGlvbiBpc1VuaXF1ZSh2YWx1ZTogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiB2YWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlTmFtZUFuZEV4dGVuc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJy4nKVxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlTmFtZTogdmFsdWUuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgZXh0ZW5zaW9uOiB2YWx1ZS5zbGljZShpbmRleCksXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgZmlsZU5hbWU6IHZhbHVlLFxuICAgIGV4dGVuc2lvbjogJycsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gIGNvbnN0IG1hdGNoZWQgPSB2YWx1ZS5tYXRjaCgvXFxkKyQvKVxuICBpZiAobWF0Y2hlZCkge1xuICAgIGNvbnN0IG5leHROdW1iZXIgPSBOdW1iZXIobWF0Y2hlZFswXSkgKyAxXG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIG1hdGNoZWQuaW5kZXgpICsgbmV4dE51bWJlclxuICB9XG4gIHJldHVybiB2YWx1ZSArIDJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmlyc3QoXG4gIHNvdXJjZTogc3RyaW5nLFxuICBzdWZmaXg6IHN0cmluZyxcbiAgdXNlU3BhY2VzOiBib29sZWFuLFxuICBpc0ZpbGVOYW1lOiBib29sZWFuXG4pIHtcbiAgY29uc3Qgc3BhY2UgPSB1c2VTcGFjZXMgPyAnICcgOiAnJ1xuICBsZXQgbmFtZSA9ICcnXG4gIGxldCBleHRlbnNpb24gPSAnJ1xuICBpZiAoaXNGaWxlTmFtZSkge1xuICAgIGNvbnN0IHJlcyA9IGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKHNvdXJjZSlcbiAgICBuYW1lID0gcmVzLmZpbGVOYW1lXG4gICAgZXh0ZW5zaW9uID0gcmVzLmV4dGVuc2lvblxuICB9IGVsc2Uge1xuICAgIG5hbWUgPSBzb3VyY2VcbiAgfVxuXG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGAke3NwYWNlfSR7c3VmZml4fShcXFxcZCopXFw/XFwkYClcbiAgY29uc3QgbWF0Y2hlZCA9IG5hbWUubWF0Y2gocGF0dGVybilcbiAgaWYgKG1hdGNoZWQpIHtcbiAgICBsZXQgbnVtYmVyID0gMlxuICAgIGlmIChtYXRjaGVkWzFdKSB7XG4gICAgICBudW1iZXIgPSBOdW1iZXIobWF0Y2hlZFsxXSkgKyAxXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBuYW1lLnNsaWNlKDAsIG5hbWUuaW5kZXhPZihtYXRjaGVkWzBdKSkgKyBzcGFjZSArIHN1ZmZpeCArIG51bWJlciArIGV4dGVuc2lvblxuICAgIClcbiAgfVxuICByZXR1cm4gbmFtZSArIHNwYWNlICsgc3VmZml4ICsgZXh0ZW5zaW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5leHQobmFtZTogc3RyaW5nLCBpc0ZpbGVOYW1lOiBib29sZWFuKSB7XG4gIGlmICghaXNGaWxlTmFtZSkge1xuICAgIHJldHVybiBpbmNyZW1lbnQobmFtZSlcbiAgfVxuICBjb25zdCB7IGZpbGVOYW1lLCBleHRlbnNpb24gfSA9IGdldEZpbGVOYW1lQW5kRXh0ZW5zaW9uKG5hbWUpXG4gIHJldHVybiBpbmNyZW1lbnQoZmlsZU5hbWUpICsgZXh0ZW5zaW9uXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGlzVW5pcXVlLCBnZW5lcmF0ZUZpcnN0LCBnZW5lcmF0ZU5leHQgfSBmcm9tICcuL3V0aWxzJ1xuXG50eXBlIFRQYXJlbnRoZXNpcyA9ICcoJyB8ICd7JyB8ICdbJ1xuXG5pbnRlcmZhY2UgSU9wdGlvbnMge1xuICBzdWZmaXg/OiBzdHJpbmdcbiAgdXNlU3BhY2VzPzogYm9vbGVhblxuICBpc0ZpbGVOYW1lPzogYm9vbGVhblxuICBwYXJlbnRoZXNpcz86IFRQYXJlbnRoZXNpc1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9uczogSU9wdGlvbnMgPSB7XG4gIHN1ZmZpeDogJ2NvcHknLFxuICB1c2VTcGFjZXM6IGZhbHNlLFxuICBpc0ZpbGVOYW1lOiBmYWxzZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmFtZU9uQ29weShcbiAgc291cmNlOiBzdHJpbmcgPSAnJyxcbiAgbmFtZXM6IHN0cmluZ1tdID0gW10sXG4gIG9wdGlvbnM6IElPcHRpb25zID0ge31cbikge1xuICBjb25zdCB7IHN1ZmZpeCwgdXNlU3BhY2VzLCBpc0ZpbGVOYW1lIH0gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICBsZXQgbmFtZSA9IGdlbmVyYXRlRmlyc3Qoc291cmNlLCBzdWZmaXgsIHVzZVNwYWNlcywgaXNGaWxlTmFtZSlcbiAgd2hpbGUgKCFpc1VuaXF1ZShuYW1lLCBuYW1lcykpIHtcbiAgICBuYW1lID0gZ2VuZXJhdGVOZXh0KG5hbWUsIGlzRmlsZU5hbWUpXG4gIH1cbiAgcmV0dXJuIG5hbWVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=