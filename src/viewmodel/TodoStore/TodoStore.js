import { TodoService } from "../../service";
import { BaseStore } from "react-alix";
import Todo from "../../model/Todo";
class TodoStore extends BaseStore {
  isLoading = false;
  dataList = [];
  errorMessage = null;
  currentPage = 1;
  newInputValue = "";
  isEditMode = false;
  editingTodo = null;

  setIsLoadingAction = isLoading => (this.isLoading = isLoading);
  setDataListAction = dataList => (this.dataList = dataList);
  setErrorMessageAction = msg => {
    this.errorMessage = msg;
  };
  setNewValue = v => {
    this.newInputValue = v;
    if (this.newInputValue === "") {
      this.isEditMode = false;
      this.editingTodo = null;
      this.debug("end editing");
    }
  };

  setEditModeAction = todo => {
    this.editingTodo = todo;
    this.newInputValue = todo.title;
    this.isEditMode = true;
  };

  nextPageAction = () => {
    this.currentPage = this.currentPage + 1;
    this.debug("nextPage called", this.currentPage);
    this.queryDataActionV2(this.currentPage);
  };

  prePageAction = () => {
    this.currentPage = this.currentPage - 1;
    this.currentPage = this.currentPage <= 0 ? 1 : this.currentPage;
    this.debug("prePage called", this.currentPage);
    this.queryDataActionV2(this.currentPage);
  };

  completeAction = todoNeedChange => {
    //TODO: update backend server

    let list = [...this.dataList];
    let index = list.indexOf(todoNeedChange);
    list[index].completed = !list[index].completed;
    this.dataList = list;
  };

  deleteAction = tobeDeletedTodo => {
    //TODO: update backend server
    this.debug("delete id:", tobeDeletedTodo.id);
    this.dataList = this.dataList.filter(
      item =>
        !(
          item.id === tobeDeletedTodo.id && item.title === tobeDeletedTodo.title
        )
    );
  };

  //async style
  // async addAction() {
  //   let title = this.newInputValue;
  //   let service = this.getService(TodoService);
  //   try {
  //     let result = await service.postData({ title });
  //     this.debug("post result:", result.title, result.id);

  //     let newTodo = new Todo({
  //       id: result.id,
  //       title: result.title,
  //       completed: false
  //     });
  //     // this.setDataListAction([
  //     //   ...this.dataList,
  //     //   { id: result.id, title: result.title }
  //     // ]);
  //     let list = [...this.dataList];
  //     list.push(newTodo);

  //     this.setDataListAction(list);
  //     this.groupRunActions(() => {
  //       this.setNewValue("");
  //       this.setErrorMessageAction(null);
  //     });
  //   } catch (error) {
  //     this.debug("Error at addAction", error.message);
  //     this.setErrorMessageAction(error.message);
  //   }
  // }

  editAction() {
    //TODO: update backend server
    let list = [...this.dataList];
    let index = list.indexOf(this.editingTodo);
    list[index].title = this.newInputValue;
    this.dataList = list;

    // let list = this.toJS(this.dataList);
    // // let list = this.dataList;
    // let findTodo = list.find(todo => {
    //   return (
    //     todo.id === this.editingTodo.id && todo.title === this.editingTodo.title
    //   );
    // });
    // findTodo.title = this.newInputValue;
    // this.dataList = list;
  }

  addAction() {
    //TODO: update backend server
    let title = this.newInputValue;
    let service = this.getService(TodoService);
    service
      .postData({ title })
      .then(result => {
        this.debug("post result:", result.title, result.id);
        let newTodo = new Todo({
          id: result.id,
          title: result.title,
          completed: false
        });
        let list = [...this.dataList];
        list.push(newTodo);

        this.groupRunActions(() => {
          this.setDataListAction(list);
          this.setNewValue("");
          this.setErrorMessageAction(null);
        });
      })
      .catch(error => {
        this.debug("Error at addAction", error.message);
        this.setErrorMessageAction(error.message);
      });
  }

  //async style
  async queryDataActionV1(pageNumber = 1) {
    this.setErrorMessageAction(null);
    let service = this.getService(TodoService);
    this.setIsLoadingAction(true);
    try {
      let data = await service.getData(
        { _page: pageNumber },
        { cache: false, timeout: 49000 }
      );
      if (data !== undefined) {
        // convert to model
        const todoList = data.map(item => new Todo(item));
        this.setDataListAction(todoList);
      }
    } catch (error) {
      this.debug("====Error message at todoServiceV2 API :", error.message);
      this.setErrorMessageAction(error.message);
      this.setDataListAction([]);
    } finally {
      this.setIsLoadingAction(false);
    }
  }

  //then catch style
  queryDataActionV2(pageNumber = 1) {
    this.setErrorMessageAction(null);
    let service = this.getService(TodoService); //new TodoServiceV2();
    this.setIsLoadingAction(true);
    service
      // .getData({ cache: false })
      // .getData({ _limit: 5 }, { cache: true, timeout: 100 })
      .getData({ _page: pageNumber }, { cache: true, timeout: 15000 })
      .then(data => {
        if (data !== undefined) {
          // convert to model
          const todoList = data.map(item => new Todo(item));
          this.groupRunActions(() => {
            this.setDataListAction(todoList);
            this.setIsLoadingAction(false);
            // this.dataList = todoList;
            // this.isLoading = false;
          });
        }
      })
      .catch(error => {
        this.debug("====Error message at todoServiceV2 API :", error.message);
        this.groupRunActions(() => {
          this.setErrorMessageAction(error.message);
          this.setDataListAction([]);
          this.setIsLoadingAction(false);
        });
      });
  }
}

export default TodoStore;
