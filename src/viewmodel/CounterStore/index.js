import { decorate, observable, action } from "react-alix";

import CounterStore from "./CounterStore";

decorate(CounterStore, {
  count: observable,
  increaseAction: action,
  decreaseAction: action
});

export default new CounterStore();
