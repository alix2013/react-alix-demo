export default class Todo {
  constructor({ id, title, completed, editMode = false }) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
