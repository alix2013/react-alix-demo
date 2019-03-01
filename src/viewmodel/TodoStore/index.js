import { decorate, observable, action } from "react-alix";
import TodoStore from "./TodoStore";
decorate(TodoStore, {
  isLoading: observable,
  currentPage: observable,
  newInputValue: observable,
  errorMessage: observable,
  dataList: observable,
  isEditMode: observable,
  //   queryDataAction: action,
  //   queryDataActionV2: action,
  setIsLoadingAction: action,
  setDataListAction: action,
  setErrorMessageAction: action,
  setNewValue: action,
  addAction: action,
  prePageAction: action,
  nextPageAction: action,
  deleteAction: action,
  completeAction: action,
  setEditModeAction: action,
  editAction: action
});

export default new TodoStore();
