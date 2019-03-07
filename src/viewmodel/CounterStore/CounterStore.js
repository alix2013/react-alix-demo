import { BaseStore } from "react-alix";

class CounterStore extends BaseStore {
  count = 0;
  increaseAction() {
    this.count++;
  }
  decreaseAction() {
    this.count--;
  }
  //monitor state changes for debug
  monitorState() {
    this.subscribe(() => {
      this.debug("Counter Store state trigger change:", this.getState());
    });
  }
  unMonitorState() {
    this.unsubscribe();
  }
}

export default CounterStore;
