import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: null,
    error: "",
  },
  reducers: {
    // getUsers: (state, action) => {
    //   state.loading = true;
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       state.data = data;
    //     })
    //     .catch((error) => {
    //       state.error = error;
    //     })
    //     .finally(() => {
    //       state.loading = false;
    //     });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
      state.users = null;
      state.error = "";
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log("fulfilled", action.payload);
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = null;
      state.error = action.payload;
    });
  },
  // extraReducers: {
  //   [getUsers.pending]: (state, action) => {
  //     // Code
  //   },
  //   [getUsers.fulfilled]: (state, action) => {
  //     // Code
  //   },
  //   [getUsers.rejected]: (state, action) => {
  //     // Code
  //   },
  // },
});

export const usersReducer = usersSlice.reducer;
