export default function AlertProductComponent(props) {
    return (
        <div className="mt-1 shadow-lg">
            {props.showAlert ? <div className="alert alert-success p-2 mb-0 text-center" role="alert">
                                Gracias por su compra
                             </div>

                           : <div className="alert alert-warning p-2 mb-0 text-center" role="alert">
                                Confirmar Compra
                             </div>
            }
        </div>
    )
}