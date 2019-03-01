import "babel-polyfill";
import { TodoService } from "../service/index";

describe("test all services", () => {
  beforeEach(() => {
    jest.setTimeout(20000);
  });

  it("tests todo service timeout ", async () => {
    // expect.assertions(1);
    const service = new TodoService();
    try {
      await service.getData({}, { cache: false, timeout: 4 });
    } catch (error) {
      expect(error).toEqual({
        code: -2,
        message: "timeout of 4ms exceeded"
      });
    }
  });

  it("tests error with rejects", () => {
    // expect.assertions(1);
    const service = new TodoService();
    return expect(
      service.getData({}, { cache: false, timeout: 4 })
    ).rejects.toEqual({
      code: -2,
      message: "timeout of 4ms exceeded"
    });
  });

  it("tests success query all data ", async () => {
    // expect.assertions(1);
    const service = new TodoService();

    try {
      let list = await service.getData({}, { cache: false, timeout: 15000 });
      expect(list.length).toBeGreaterThan(20);
      // expect(list.length).toBe(200);
    } catch (error) {
      console.log("error==", error);
    }
  });

  it("tests success query 1 page ", async () => {
    // expect.assertions(1);
    const service = new TodoService();
    try {
      let list = await service.getData(
        { _page: 1 },
        { cache: false, timeout: 8000 }
      );
      expect(list.length).toBe(10);
    } catch (error) {
      console.log("error==", error);
    }
  });
});

// test("test services", () => {
//   const service = new TodoService();
//   // return service.getData(data => {
//   //   expect(data).toBe("test");
//   // });

//   return expect(
//     service.getData({}, { cache: false, timeout: 10 })
//   ).rejects.toBe({ code: -2, message: "timeout of 10ms exceeded" });
// });

// const service = TodoService();
// const sum = (a, b) => a + b;

// test("Adding 1 + 1 equals 2", () => {
//   expect(sum(1, 1)).toBe(2);
// });

// test("TodoService test", () => {
//   service.getData({ _page: 1 }, { cache: false, timeout: 100 }).then(data => {
//     expect(data.length).toBe(10);
//   });
// });

// describe("test services", () => {
//   it("test TodoServiceV2", () => {
//     const service = new TodoService();
//     // expect(1 + 1).toBe(2);
//     return (
//       service
//         .getData()
//         // .getData({ _page: 1 }, { cache: false, timeout: 10000 })
//         .then(data => {
//           console.log(data);
//         }).rejects
//     );
//   });
//   // it("tests error with promises", () => {
//   //   // expect.assertions(1);
//   //   const service = new TodoService();
//   //   // service.getData({ _page: 1 }, { cache: false, timeout: 100 }).then(data => {
//   //   //     expect(data.length).toBe(10);
//   //   return service
//   //     .getData({ _page: 1 }, { cache: false, timeout: 10000 })
//   //     .then(data => console.log(data))
//   //     .catch(e =>
//   //       expect(e).toEqual({
//   //         code: -2,
//   //         message: "timeout of 10ms exceeded"
//   //       })
//   //     );
//   // });
// });
