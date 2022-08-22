class TodoType {
  id: string;
  text: string;
  constructor(text: string) {
    this.id = Math.random() + "";
    this.text = text;
  }
}

export default TodoType;
