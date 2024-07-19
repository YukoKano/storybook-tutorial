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

const longTitleString =
  "This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!";

export const LongTitle = {
  args: {
    task: {
      ...Default.args.task,
      title: longTitleString,
    },
  },
};
