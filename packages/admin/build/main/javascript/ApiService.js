"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiService = function () {
    function ApiService() {
        _classCallCheck(this, ApiService);
    }

    _createClass(ApiService, [{
        key: "get",
        value: function get(url, options) {
            return Promise.resolve({});
        }
    }, {
        key: "post",
        value: function post(url, options) {
            return Promise.resolve({});
        }
    }, {
        key: "put",
        value: function put(url, options) {
            return Promise.resolve({});
        }
    }, {
        key: "delete",
        value: function _delete(url, options) {
            return Promise.resolve({});
        }
    }]);

    return ApiService;
}();

exports.default = ApiService;