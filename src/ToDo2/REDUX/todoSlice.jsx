// // import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "todos",
//   initialState: [
//     { id: 1, title: "todo2", completed: false },
//     { id: 2, title: "todo3", completed: false },
//     { id: 3, title: "todo4", completed: true },
//   ],
//   reduecers: {
//     addTodo: (state, action) => {
//       const newTodo = {
//         id: Date.now(),
//         title: action.payload.title,
//         completed: false,
//       };
//       state.pupsh(newTodo);
//     },
//   },
// });

// export const { addTodo } = todoSlice.actions;
// export default todoSlice.reduecer;
