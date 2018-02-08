'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widget = exports.Widget = function Widget(id) {
    _classCallCheck(this, Widget);

    this.id = id;
};

var WidgetService = function () {
    function WidgetService(apiService) {
        _classCallCheck(this, WidgetService);

        this.apiService = apiService;
    }

    _createClass(WidgetService, [{
        key: 'findAll',
        value: function findAll() {
            return this.apiService.get('/api/dashboard/widgets');
        }
    }, {
        key: 'findOne',
        value: function findOne(id) {
            return this.apiService.get('/api/dashboard/widgets/' + id);
        }
    }, {
        key: 'save',
        value: function save(widget) {
            !!widget.id ? this.apiService.post('/api/dashboard/widgets') : this.apiService.put('/api/dashboard/widgets/' + widget.id);
        }
    }, {
        key: 'delete',
        value: function _delete(widget) {
            return this.apiService.delete('/api/dashboard/widgets/' + widget.id);
        }
    }]);

    return WidgetService;
}();

exports.default = WidgetService;