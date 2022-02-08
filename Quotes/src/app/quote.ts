export class Quote {
    showDetail: Boolean;
    constructor( public author: string, public name: string, public quote: string, public detail: string, public countDown: Date) {
        this.showDetail = false;
    }
   
}
