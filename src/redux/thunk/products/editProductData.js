import { editProduct } from "../../actions/productAction";

const editProductData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        // console.log(data, 'data');
        if(data){
            dispatch(editProduct(data));
        }
    }
}

export default editProductData;