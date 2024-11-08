import { RowItemView } from "./RowItemView"
import { deleteCita } from "./../services/getInvoice"


export const ListItemsView = ({title, items}) => {

    const handlerDeleteItem = async (id) => {
        const estatus = 1;
        const response = await deleteCita(id, estatus);
        if(response)
          window.location.reload()
    }

    return (
        <>
            <h4>{ title }</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Paciente</th>
                        <th>Tipo de cita</th>
                        <th>Nombre del medico</th>
                        <th>Numero de cita</th>
                        <th>Estatus</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, fecha, hora, paciente, tipo, doctor, numero, estatus}) => (
                        <RowItemView
                            key={id}
                            id={id}
                            fecha={fecha}
                            hora={hora}
                            paciente={paciente}
                            tipo={tipo}
                            doctor={doctor}
                            numero={numero}
                            estatus={estatus}
                            handlerDeleteItem={id => handlerDeleteItem(id)}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}