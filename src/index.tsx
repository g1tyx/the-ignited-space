__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/store */ "./src/state/store.ts");
/* harmony import */ var _theme_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @theme/main.css */ "./src/theme/main.css");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/page */ "./src/components/page.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




// import { PageComponent } from '@components/layout';


// import {MessagesComponent} from "@components/layout/messages";
var Main = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, __assign({ store: _state_store__WEBPACK_IMPORTED_MODULE_3__.store }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page__WEBPACK_IMPORTED_MODULE_5__.Page, {}) })));
};
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("root"));
root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Main, {}));


//# sourceURL=webpack://the-ignited-space/./src/index.tsx?