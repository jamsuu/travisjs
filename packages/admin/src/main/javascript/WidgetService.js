export class Widget {
    constructor(id) {
        this.id = id;
    }
}

export default class WidgetService {

    constructor(apiService) {
        this.apiService = apiService;
    }

    findAll() {
        return this.apiService.get('/api/dashboard/widgets');
    }

    findOne(id) {
        return this.apiService.get('/api/dashboard/widgets/' + id);
    }

    save(widget) {
        !!widget.id
            ? this.apiService.post('/api/dashboard/widgets')
            : this.apiService.put('/api/dashboard/widgets/' + widget.id);
    }

    delete(widget) {
        return this.apiService.delete('/api/dashboard/widgets/' + widget.id);
    }
}