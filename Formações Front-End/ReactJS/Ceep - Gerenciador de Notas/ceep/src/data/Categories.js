export default class Categories {
    constructor() {
        this.categories = ['Geral'];
        this._subscribers = [];
    }

    subscribe(func) {
        this._subscribers.push(func);
    }

    unsubscribe(func) {
        this._subscribers = this._subscribers.filter(f => f !== func);
    }

    notify() {
        this._subscribers.forEach(func => {
            func(this.categories);
        });
    }

    addCategory(category) {
        this.categories.push(category);
        this.notify();
      }
}