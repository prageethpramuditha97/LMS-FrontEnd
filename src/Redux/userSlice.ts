import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const storedUser = localStorage.getItem("logedInUser_eduSpace_codeStack");
//const storedUserTem = sessionStorage.getItem("logedInUser_eduSpace_codeStack");
const parsedUser = storedUser ? JSON.parse(storedUser) : null;


type Order = {
    productID: string;
    productName: string;
    productPrice: string;
}

interface User {
  id: string;
  Name: string;
  email: string;
  address: string;
  mobile: string;
  type: string;
  profilePic: string;
  term: string; // or number if it's numeric
  orders: Order[]
}


type userState = {
    user: User;
}

const initialState: userState = {
    user: parsedUser,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      if (state.user) {
        state.user.orders = [...(state.user.orders || []), action.payload];
      }
      localStorage.setItem("logedInUser_eduSpace_codeStack", JSON.stringify(state.user));
    },
  },
});

export const { setUser , addOrder} = userSlice.actions;
export default userSlice.reducer;
