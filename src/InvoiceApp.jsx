import { useEffect, useState } from "react";
import { getInvoice, createCita, deleteCita } from "./services/getInvoice"
import { ListItemsView } from "./components/ListItemsView";
import { FormItemsView } from "./components/FormItemsView";

export const InvoiceApp = () => {

    const [activeForm, setActiveForm] = useState(false);
    const [items, setItems] = useState([]);

    const findAll = async() => {
        const citas = await getInvoice();
        setItems(citas);
    }

    useEffect(
        () => {
            findAll()
    }, []);

    const handlerAddItems = async ({ fecha, hora, paciente, tipo, doctor, numero }) => {
        const estatus = 0;
        const response = await createCita({ fecha, hora, paciente, tipo, doctor, numero, estatus });
        if(response)
            window.location.reload()
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm);
    }

    return (
        <>
            <div className="container">

                <div className="card my-3">

                    <div className="card-header">
                        Ejemplo CRUD
                    </div>
                    <div className="card-body">
                        <ListItemsView title="Citas" items={items}/>
                        <button className="btn btn-secondary"
                            onClick={onActiveForm}>{!activeForm ? 'Crear Cita': 'Cerrar'}</button>
                        { !activeForm || <FormItemsView handler={handlerAddItems} /> }
                    </div>
                </div>
            </div>
        </>
    )
}