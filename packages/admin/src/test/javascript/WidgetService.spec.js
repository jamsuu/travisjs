import 'chai/register-should';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import ApiService from '../../main/javascript/ApiService';
import WidgetService from '../../main/javascript/WidgetService';

chai.use(sinonChai);

describe('WidgetService', function() {
    describe('findAll', function() {
        it('should call the endpoint "/api/dashboard/widgets"', function() {
            const apiService = new ApiService();
            const widgetService = new WidgetService(apiService);

            const spy = sinon.spy(apiService, 'get');

            widgetService.findAll();

            spy.should.have.been.calledWith('/api/dashboard/widgets');
        });
        it('should return a list of all widgets', function() {
            // const apiService = sinon.mock(ApiService);
            // const widgetService = new WidgetService(apiService);
            // sinon.expect('get').returns([1, 2]);
            //
            // const widgets = widgetService.findAll();
            //
            // widgets.should.have.lengthOf(2);
        });
    });
});