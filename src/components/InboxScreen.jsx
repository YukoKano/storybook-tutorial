import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../lib/store";

import TaskList from "./TaskList";

export default function InboxScreen() {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.taskbox);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]); // 依存配列にdispatch入れないとeslintで怒られる

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <p className="title-message">Oh no!</p>
          <p className="subtitle-message">Somethin went wrong</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  );
}
