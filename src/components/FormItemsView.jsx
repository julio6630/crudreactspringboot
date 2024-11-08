import { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {

    const [formItemsState, setFormItemsState] = useState({
        fecha: '',
        hora: '',
        paciente: '',
        tipo: '',
        doctor: '',
        numero: ''
    });

    const { fecha, hora, paciente, tipo, doctor, numero } = formItemsState;

    useEffect(() => {
        // console.log('el formItemsState cambio!')
    }, [formItemsState]);


    const onInputChange = ({ target: { name, value } }) => {
         console.log(name);
         console.log(value);

        setFormItemsState({
            ...formItemsState,
            [name]: value
        });
    }

    const onInvoiceItemsSubmit = (event) => {
        console.log("form object" + JSON.stringify(formItemsState))
        event.preventDefault();
        handler(formItemsState);
    }

    return (<>
        <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
            <input
                type="text"
                name="fecha"
                value={fecha}
                placeholder="Fecha"
                className="form-control m-3"
                onChange={onInputChange} />
            <input
                type="text"
                name="hora"
                value={hora}
                placeholder="Hora"
                className="form-control m-3"
                onChange={onInputChange} />
            <input
                type="text"
                name="paciente"
                value={paciente}
                placeholder="Paciente"
                className="form-control m-3"
                onChange={event => onInputChange(event)} />
            <input
                type="text"
                name="tipo"
                value={tipo}
                placeholder="Tipo"
                className="form-control m-3"
                onChange={onInputChange} />
            <input
                type="text"
                name="doctor"
                value={doctor}
                placeholder="Medico"
                className="form-control m-3"
                onChange={onInputChange} />
            <input
                type="text"
                name="numero"
                value={numero}
                placeholder="Numero"
                className="form-control m-3"
                onChange={event => onInputChange(event)} />
            <button
                type="submit"
                className="btn btn-primary m-3">
                Crear
            </button>
        </form>
    </>)
}