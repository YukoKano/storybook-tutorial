import React from "react";

import Task from "./Task";

// Storybookにコンポーネントを認識させるために入れる
export default {
  component: Task,
  title: "Task",
};

// Storyを定義するための関数
// ストーリーを作る際には素となるタスク引数を使用してコンポーネントが想定するタスクの状態を作成します。
const Template = (args) => <Task {...args} />;

export const Default = Template.bind({}); // 関数のコピーを作成するJavaScriptの標準的なテクニック
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "Task_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
