import "babel-polyfill";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow, mount } from "enzyme";
import Counter from "../view/Counter";
// import store from "../viewmodel";
import { counterStore } from "../viewmodel";
configure({ adapter: new Adapter() });

// import { Store } from "react-alix";
// const store = new Store().add("counterStore", counterStore);
const store = { counterStore };

describe("Test counter", () => {
  it("view shallow test", () => {
    console.log("testing shallow...");

    const wrapper = shallow(<Counter store={store} />);
    console.log("debug=>", wrapper.debug());
    // console.log("instance=>", wrapper.instance());

    // console.log("instance=>", wrapper.props());
    // console.log("instance=>", wrapper.prop("store"));

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.instance().props.store).toBe(store);
  });
});

describe("Test counter", () => {
  it("view test", () => {
    const comp = mount(<Counter store={store} />);
    console.log("testing mount...");
    expect(comp.props().store.counterStore.count).toBe(0);
    let button = comp.find("#incrButton");
    button.simulate("click");
    // console.log(button.props());
    //trigger click by method onClick()
    button.props().onClick();

    console.log("current value->", comp.find("#countValue").text());
    expect(comp.props().store.counterStore.count).toBe(2);

    comp.find("#incrButton").simulate("click");
    console.log("current value->", comp.find("#countValue").text());
    expect(comp.find("#countValue").text()).toBe("3");
    expect(comp.props().store.counterStore.count).toBe(3);

    comp.find("#decreseButton").simulate("click");
    expect(comp.props().store.counterStore.count).toBe(2);
    expect(comp.find("#countValue").text()).toBe("2");
    console.log("current value->", comp.find("#countValue").text());
  });
});
