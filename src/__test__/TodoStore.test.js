import "babel-polyfill";

// import CounterStore from "./CouStore";
import store from "../viewmodel/TodoStore/index";

function later(delay) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
}

describe("Test todoTtore", () => {
  beforeEach(() => {
    jest.setTimeout(20000);
  });

  it("test todostore ", async () => {
    console.log("====testing todoStore===");
    try {
      store.queryDataActionV2(1);
      expect.assertions(1);
      await later(9000);
      expect(store.dataList.length).toEqual(10);
    } catch (error) {
      console.log("error=>", error);
    }
  });
});
