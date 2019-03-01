import { BaseStore } from "react-alix";

class CounterStore extends BaseStore {
  count = 0;
  increaseAction() {
    this.count++;
  }
  decreaseAction() {
    this.count--;
  }
}

export default CounterStore;
