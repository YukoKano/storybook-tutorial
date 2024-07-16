import { fn } from "@storybook/test";

import Task from "./Task";

/*
  Actions help you verify interactions when building UI components in isolation.
  Oftentimes you won't have access to the functions and state you have in context of the app.
  Use fn() to stub them in.
*/

export const ActionData = {
  onArchiveTask: fn(),
  onPinTask: fn(), // Actionパネルにクリックしたかなどを判断できるようになる
};

export default {
  component: Task,
  title: "task",
  tag: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionData,
  },
};

// story
export const Default = {
  args: {
    task: {
      id: "1",
      title: "test task",
      state: "TASK_INBOX",
    },
  },
};

// story
export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

// story
export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
