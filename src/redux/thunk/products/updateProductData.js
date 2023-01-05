import { updateProduct } from "../../actions/productAction";

const updateProductData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      }
    });
    const data = await res.json();
    console.log(data, 'data');
    if(data.acknowledged){
      dispatch(updateProduct(data))
    }
  }
}

export default updateProductData;