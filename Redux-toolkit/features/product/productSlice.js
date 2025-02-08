const { default: axios } = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;

const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  products: [],
  error: "",
};
const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data.map((p)=>p.title))
    .catch((e) => e.message);
});
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

module.exports=productSlice.reducer
module.exports.fetchProducts=fetchProducts

