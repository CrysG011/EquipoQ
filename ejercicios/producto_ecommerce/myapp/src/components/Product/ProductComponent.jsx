import { useState } from 'react';
import AlertProductComponent from '../AlertProductComponent/AlertProductComponent';
import DetailsProductComponent from '../DetailsProductComponent/DetailsProductComponent';
import ImgProduct from '../../assets/notebook.jpg'


const ProductComponent = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [textButton, setTextButton] = useState("Comprar");

    const productDetails = {
        name: "Notebook Noblex",
        description: "Intel Core I3-1115g4 8Gb 256Gb",
        price: "689499",
        sku: "1234d31321",
        stock: "6",
        urlImg: ImgProduct,
    };

    const changeAlert = () => {
        setShowAlert(!showAlert);    

        const textBtn = showAlert ? "Comprar": "Cancelar compra"
        setTextButton(textBtn)
    }

    return (
        <>
            <DetailsProductComponent onChangeAlert={changeAlert} textButton={textButton} productDetails={productDetails} />
            <AlertProductComponent showAlert={showAlert}/>
        </>
    )
}

export default ProductComponent;