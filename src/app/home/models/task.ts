export class Task {
  id: number;
  name: string;
  priority?: number;
  completed?: boolean;
  creationDate?: number;

  constructor(name?: string, id?: number, priority?: number) {
    this.id = (id == null) ? new Date().getTime() : id;// azért kell, hogy különböző id-nk legyen, a getTime() a túl gyors gépek miatt nem jó
    this.name = name;
    this.priority = (priority == null) ? 1 : priority; //ha nem adjuk meg, akkor legyen a prioritás 1
    this.completed = false;
    this.creationDate = new Date().getTime();
  }


}
