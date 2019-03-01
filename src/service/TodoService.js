import { BaseService } from "react-alix";
const TODO_SERVICE_URL = "https://jsonplaceholder.typicode.com/todos";
const TODO_SERVICE_POST_URL = "https://jsonplaceholder.typicode.com/todos";

export default class TodoService extends BaseService {
  //
  async getData(params = {}, options = { cache: false }) {
    let { cache, ...networkOptions } = options;
    return this.getDataFromCache(
      TODO_SERVICE_URL,
      cache,
      params,
      networkOptions
    );
  }
  //
  async postData(params = {}, options = {}) {
    return this.post(TODO_SERVICE_POST_URL, params, options);
  }
}
