declare module NodeJS {
  interface Global {
    fetch: any
  }
}

type createCommentResult = {
  data: {
    createComment: {
      id: string;
      user_id: string;
      body: string;
    }
  }
}

type AllUsers = Array<{
  id: string;
  name: string;
  Comments: Array<{
    id: string;
    body: string;
  }>;
}>

type todo = {
  id: string;
  completed: boolean;
  text: string;
}

type apolloState = {
  visibilityFilter: TaskFilter;
  todos: todo[];
}

type TaskFilter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';