/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// 1.要素の取得\r\nconst fill = document.querySelector(\".fill\");\r\nconst empties = document.querySelectorAll(\".empty\");\r\nconsole.log(empties);\r\n\r\n// 2.ドラッグのトリガー\r\nfill.addEventListener(\"dragstart\", dragStart);\r\nfill.addEventListener(\"dragend\", dragEnd);\r\n\r\n// 4.1つ1つのempty要素を取得\r\nfor (const empty of empties){\r\n    empty.addEventListener(\"dragover\",dragOver);\r\n    empty.addEventListener(\"dragenter\",dragEnter);\r\n    empty.addEventListener(\"dragleave\",dragLeave);\r\n    empty.addEventListener(\"drop\",dragDrop);\r\n}\r\n\r\n\r\n// 3.ドラッグ関数\r\nfunction dragStart() {\r\n    console.log(\"start\");\r\n    fill.className += \" hold\";\r\n    setTimeout(() => {\r\n        fill.className = \"invizible\"\r\n    }, 0);\r\n}\r\n\r\nfunction dragEnd() {\r\n    console.log(\"end\");\r\n    fill.className = \"fill\"\r\n}\r\n\r\nfunction dragOver(e) {\r\n    e.preventDefault();\r\n    console.log(\"Over\");\r\n}\r\n\r\nfunction dragEnter() {\r\n    console.log(\"Enter\");\r\n    this.className += \" hovered\"\r\n}\r\nfunction dragLeave() {\r\n    console.log(\"Leave\");\r\n    this.className = \"empty\"\r\n}\r\n\r\nfunction dragDrop() {\r\n    console.log(\"Drop\");\r\n    this.className = \"empty\";\r\n    this.appendChild(fill);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;