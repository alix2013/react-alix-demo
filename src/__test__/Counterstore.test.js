import "babel-polyfill";

import CounterStore from "../viewmodel/CounterStore/CounterStore";
import cstore from "../viewmodel/CounterStore/index";

describe("Test counterstore", () => {
  it("test count", () => {
    const counterStore = new CounterStore();

    counterStore.increaseAction();
    expect(counterStore.count).toEqual(1);

    counterStore.increaseAction();
    expect(counterStore.count).toEqual(2);

    counterStore.decreaseAction();
    expect(counterStore.count).toEqual(1);
  });

  it("test count", () => {
    cstore.increaseAction();
    expect(cstore.count).toEqual(1);
  });
});
