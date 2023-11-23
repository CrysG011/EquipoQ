export default function DetailsProductComponent(props) {

    const {name, description, sku, price, stock, urlImg } = props.productDetails;
    
    return (
        <>
            <div className="card shadow-lg" style={{ width: "18rem" }}>
                <img src={urlImg} className="card-img-top p-2" alt={name}/>

                <div className="card-body text-start">
                    <small className="w-100 d-block text-end text-secondary">SKU {sku}</small>
                    <h5 className="card-title  text-primary">{name}</h5>
                    <p className="card-text text-secondary-emphasis fw-semibold mb-0">{description}</p>
                    <small className="text-secondary" >stock: {stock}</small>
                    <p className="text-primary fs-3 fw-semibold">$ {price}</p>

                    <button onClick={props.onChangeAlert} className="btn btn-primary w-100">
                        {props.textButton}
                    </button>
                </div>
            </div>
        </>
    )
}