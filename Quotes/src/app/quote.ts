export class Quote {
  public upvotes: number;
  public downvotes: number;
  showDetail: Boolean;
  constructor(
    public id: number,
    public author: string,
    public person: string,
    public quote: string,
    public detail: string,
    public completeDate: Date
  ) {
    this.showDetail = false;
    this.upvotes = 0;
    this.downvotes = 0;
  }
}
