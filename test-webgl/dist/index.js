/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raw_loader_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./vertex.glsl */ \"./node_modules/raw-loader/dist/cjs.js!./vertex.glsl\");\n/* harmony import */ var _raw_loader_fragment2_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fragment2.glsl */ \"./node_modules/raw-loader/dist/cjs.js!./fragment2.glsl\");\n/* harmony import */ var _raw_loader_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./fragment.glsl */ \"./node_modules/raw-loader/dist/cjs.js!./fragment.glsl\");\n\n\n\n\nlet frag;\n\nif (window.location.search.substr(1) == \"blur\"){\n  frag = _raw_loader_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n}else{\n  frag = _raw_loader_fragment2_glsl__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n}\nfunction loadTexture(gl, prog, url) {\n  const texture = gl.createTexture();\n  const level = 0;\n  const internalFormat = gl.RGBA;\n  const width = 1;\n  const height = 1;\n  const border = 0;\n  const srcFormat = gl.RGBA;\n  const srcType = gl.UNSIGNED_BYTE;\n  const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue\n  gl.bindTexture(gl.TEXTURE_2D, texture);\n  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,\n                width, height, border, srcFormat, srcType,\n                pixel);\n\n\n  const image = new Image();\n  image.onload = function() {\n    gl.bindTexture(gl.TEXTURE_2D, texture);\n    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,\n                  srcFormat, srcType, image);\n\n    // WebGL1 has different requirements for power of 2 images\n    // vs non power of 2 images so check if the image is a\n    // power of 2 in both dimensions.\n    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {\n       // Yes, it's a power of 2. Generate mips.\n       gl.generateMipmap(gl.TEXTURE_2D);\n    } else {\n       // No, it's not a power of 2. Turn off mips and set\n       // wrapping to clamp to edge\n       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\n    }\n    render(0);\n  };\n  image.src = url;\n  let uSampler = gl.getUniformLocation(prog, 'uSampler');\n  gl.uniform1i(uSampler, 0)\n  return texture;\n}\n\nfunction prepareWebGL(gl) {\n\n\n  let vertSh = gl.createShader(gl.VERTEX_SHADER);\n  gl.shaderSource(vertSh, _raw_loader_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  gl.compileShader(vertSh);\n\n  let fragSh = gl.createShader(gl.FRAGMENT_SHADER);\n\n  gl.shaderSource(fragSh, frag);\n  gl.compileShader(fragSh);\n\n  console.log(gl.getShaderInfoLog(fragSh));\n  let prog = gl.createProgram();\n  gl.attachShader(prog, vertSh);\n  gl.attachShader(prog, fragSh);\n  gl.linkProgram(prog);\n  gl.useProgram(prog);\n  return prog;\n}\n\nfunction setArrays(gl, prog){\n  let vertex_buffer = gl.createBuffer();\n  const vertices = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0,\n                  1.0, 1.0, 1.0, -1.0, -1.0, 1.0,\n  ]\n  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);\n  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);\n\n\n\n  let coord = gl.getAttribLocation(prog, \"coords\");\n  gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);\n  gl.enableVertexAttribArray(coord);\n  return [coord, vertex_buffer];\n}\n\nfunction isPowerOf2(value) {\n    return (value & (value - 1)) == 0;\n  }\n\nlet render;\n\nfunction inIframe () {\n  try {\n      return window.self !== window.top;\n  } catch (e) {\n      return true;\n  }\n}\n\nfunction main(){\n  const c = document.getElementById(\"c\");\n  if (inIframe()){\n    c.height = c.width = document.body.clientWidth;\n  }else{\n    c.height = c.width = 600;\n  }\n  const gl = c.getContext(\"webgl\");\n  const prog = prepareWebGL(gl);\n  const coord = setArrays(gl, prog);\n  const iter = gl.getUniformLocation(prog, \"iter\");\n  const TS = gl.getUniformLocation(prog, \"uTextureSize\");\n  const range = document.getElementById(\"range\");\n  console.log(c.clientWidth,c.clientHeight);\n  gl.viewport(0,0,c.width,c.height);\n  gl.uniform1f(TS, 1024.0);\n  console.log(coord);\n\n  render = (it) => {\n    gl.activeTexture(gl.TEXTURE0);\n    gl.bindTexture(gl.TEXTURE_2D, texture);\n\n    gl.clearColor(0.0, 0.0, 0.0, 1.0);\n    gl.clear(gl.COLOR_BUFFER_BIT);\n\n    if (window.location.search.substr(1) == \"blur\"){\n      if(it == 0) it = 1;\n    }else{\n      it /=10;\n    }\n    gl.uniform1f(iter, it);\n    gl.drawArrays(gl.TRIANGLES, 0, 6);\n    console.log(\"render\");\n  }\n\n  const texture = loadTexture(gl, prog, \"img.jpg\");\n  render(0);\n\n\n  range.addEventListener(\"input\", (e) => {\n    render(e.target.value);\n  })\n}\n\nmain()\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./fragment.glsl":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./fragment.glsl ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"varying highp vec2 vTextureCoord;\\nuniform sampler2D uSampler;\\nprecision mediump float;\\nuniform float iter;\\nuniform float uTextureSize;\\n\\nvoid main(void){\\n    float pixel = 1.0 / uTextureSize;\\n    vec2 coords;\\n    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);\\n    float div = (iter + 1.0) * (iter + 1.0) * 4.0;\\n\\n    for (int i = 0; i <= 100; i++) {\\n        if (float(i) > iter){\\n            break;\\n        }\\n        for (int j = 0; j <= 100; j++) {\\n            if (float(j) > iter){\\n                break;\\n            }\\n            coords = vTextureCoord.st / 2.0 - 0.5;\\n            coords += vec2(float(i), float(j)) * pixel;\\n            color += texture2D(uSampler, coords).rgba / div;\\n\\n            coords = vTextureCoord.st / 2.0 - 0.5;\\n            coords -= vec2(float(i), float(j)) * pixel;\\n            color += texture2D(uSampler, coords).rgba / div;\\n        }\\n        int i2 = -i;\\n        for (int j = 0; j <= 100; j++) {\\n            if (float(j) > iter){\\n                break;\\n            }\\n            coords = vTextureCoord.st / 2.0 - 0.5;\\n            coords += vec2(float(i2), float(j)) * pixel;\\n            color += texture2D(uSampler, coords).rgba / div;\\n\\n            coords = vTextureCoord.st / 2.0 - 0.5;\\n            coords -= vec2(float(i2), float(j)) * pixel;\\n            color += texture2D(uSampler, coords).rgba / div;\\n        }\\n    }\\n\\n    gl_FragColor = vec4(color.rgb, 1.0);\\n}\");\n\n//# sourceURL=webpack:///./fragment.glsl?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./fragment2.glsl":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./fragment2.glsl ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"// Setting precision for float calculations\\nprecision mediump float;\\n// This is input from vertex shader\\nvarying highp vec2 vTextureCoord;\\n// Samplers are needeed to select textures\\n// actually its integers\\nuniform sampler2D uSampler;\\n// This will tell us how much to screw the image\\nuniform float iter;\\n\\nvec2 coords;\\nfloat x;\\nfloat y;\\nfloat l;\\nvoid main(void){\\n\\n    // Getting distance from origin\\n    l = length(vTextureCoord);\\n    // Just renaming to reduce typing\\n    x = vTextureCoord[0];\\n    y = vTextureCoord[1];\\n    // Rotating point around origin \\n    coords[0] = x * cos(iter * l) - y * sin(iter * l);\\n    coords[1] = x * sin(iter * l) + y * cos(iter * l);\\n\\n    // Transforming coordinates from GL space to texture space\\n    // All math can be done directly to vectors\\n    coords = coords / 2.0 - 0.5;\\n\\n    // Fragment shader must set this variable\\n    gl_FragColor = texture2D(uSampler, coords);\\n}\");\n\n//# sourceURL=webpack:///./fragment2.glsl?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./vertex.glsl":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./vertex.glsl ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"\\nattribute vec2 coords;\\nvarying highp vec2 vTextureCoord;\\n\\n\\nvoid main (void) {\\n    vTextureCoord = -coords;\\n    gl_Position = vec4(coords, 0.0, 1.0);\\n}\");\n\n//# sourceURL=webpack:///./vertex.glsl?./node_modules/raw-loader/dist/cjs.js");

/***/ })

/******/ });