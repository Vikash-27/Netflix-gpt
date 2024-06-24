import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
});

// Correctly export the actions
export const { addUser, removeUser } = userSlice.actions;

// Export the reducer as default
export default userSlice.reducer;
