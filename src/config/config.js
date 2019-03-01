export default {
  network: {
    debug: true,
    networkConfig: {
      timeout: 10000,
      headers: {
        // "X-Custom-Header": "globaclmyheader",
        "Content-Type": "application/json;charset=UTF-8"
      }
    }
  },
  service: {
    debug: true
    // todo: {
    //   getURL: "https://jsonplaceholder.typicode.com/todos",
    //   // postURL: "https://jsonplaceholder.typicode.com/todos"
    //   // getURL: "http://localhost:3001/posts",
    //   postURL: "http://localhost:3001/posts"
    // }
  },
  viewmodel: {
    debug: true
  },
  view: {
    debug: true
  }
};
