import axios from "axios";

const addToCart = async (cartItems: any) => {
  const userData: string | null = localStorage.getItem("user");
  if (userData) {
    const { idUser } = JSON.parse(userData);
    const parameters = {
      cartItems: cartItems,
      idUser,
    };
    const response = await axios.post("/add-to-cart", parameters);
    return response.data;
  }
};
const selectDataCartByUser = async (idUser: string) => {
  try {
    const response = await axios.post("/select-data-cart", {
      idUser,
    });
    return response.data;
  } catch (error) {}
};

const cartService = {
  addToCart,
  selectDataCartByUser,
};
export default cartService;
