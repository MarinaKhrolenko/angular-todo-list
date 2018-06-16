export class ToDoItem {

    constructor(public title: string, public calendar) {
        this.id = +new Date();
        this.calendar = this.calendar;
   }
    id: number;
    done: boolean;
}
