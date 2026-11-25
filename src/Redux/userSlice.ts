import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const storedUser = localStorage.getItem("logedInUser_eduSpace_codeStack");
//const storedUserTem = sessionStorage.getItem("logedInUser_eduSpace_codeStack");
const parsedUser = storedUser ? JSON.parse(storedUser) : null;


type Product = {
    productID: string;
    productName: string;
    productPrice: string;
}



interface User {
  id: string;
  Name: string;
  Email: string;
  Address: string;
  MobileNumber: string;
  Account_Type: string;
  ProfilePicture: string;
  RegNumber: string;
  Term: string; // or number if it's numeric
  Products: Product[]
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
    addOrder: (state, action: PayloadAction<Product>) => {
      if (state.user) {
        state.user.Products = [...(state.user.Products || []), action.payload];
      }
      localStorage.setItem("logedInUser_eduSpace_codeStack", JSON.stringify(state.user));
    },
  },
});

export const { setUser , addOrder} = userSlice.actions;
export default userSlice.reducer;
