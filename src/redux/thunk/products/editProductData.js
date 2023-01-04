import { editProduct } from "../../actions/productAction";

const editProductData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        console.log(data);
        if(data.length){
            dispatch(editProduct(id));
        }
    }
}

export default editProductData;