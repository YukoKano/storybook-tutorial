import TaskList from "./TaskList";
import PropTypes from "prop-types";

import * as TaskStories from "./Task.stories"; // これがあることで最小限に済む

import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export const MockedState = {
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "TASK 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "TASK 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "TASK 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "TASK 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "TASK 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "TASK 6" },
  ],
  status: "idle",
  error: null,
};

const Mockstore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: "taskbox",
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>], // 任意のWrapperを提供する方法
  tags: ["autodocs"],
  // args: {
  //   ...TaskStories.ActionData,
  // },
  excludeStories: /.*MockedState$/,
};

export const Default = {
  // args: {
  //   tasks: [
  //     { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
  //     { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
  //     { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
  //     { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
  //     { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
  //     { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
  //   ],
  // },
  decorators: [
    (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
  ],
};

export const WithPinnedTasks = {
  // args: {
  //   tasks: [
  //     ...Default.args.tasks.slice(0, 5),
  //     { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  //   ],
  // },
  decorators: [
    (story) => {
      const pinnedtasks = [
        ...MockedState.tasks.slice(0, 5),
        { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
      ];
      return (
        <Mockstore taskboxState={{ ...MockedState, tasks: pinnedtasks }}>
          {story()}
        </Mockstore>
      );
    },
  ],
};

export const Loading = {
  // args: {
  //   tasks: [],
  //   loading: true,
  // },
  decorators: [
    (story) => (
      <Mockstore taskboxState={{ ...MockedState, status: "loading" }}>
        {story()}
      </Mockstore>
    ),
  ],
};

export const Empty = {
  // args: {
  //   ...Loading.args,
  //   loading: false,
  // },
  decorators: [
    (story) => (
      <Mockstore taskboxState={{ ...MockedState, tasks: [] }}>
        {story()}
      </Mockstore>
    ),
  ],
};

Mockstore.propTypes = {
  taskboxState: PropTypes.shape({
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string,
      })
    ).isRequired,
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
