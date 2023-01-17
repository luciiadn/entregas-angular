export class Student {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public isActive: boolean,
    public absence: string,
    public notes: string
  ) {}
}
