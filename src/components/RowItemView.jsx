import { useState } from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getInvoiceById, updateInvoiceById } from "./../services/getInvoice"

export const RowItemView = ({ id, fecha, hora, paciente, tipo, doctor, numero, estatus, handlerDeleteItem }) => {

    const [show, setShow] = useState(false);

    const [formItemsState, setFormItemsState] = useState({
        fechau: '',
        horau: '',
        pacienteu: '',
        tipou: '',
        doctoru: '',
        numerou: ''
    });

    const handleShow = async (id) => {
        const response = await getInvoiceById({id});
        setShow(true)
        formItemsState.fecha = response.fecha
        setFormItemsState({
            ...formItemsState
        });
    }

    const handleClose = async (id) => {
        const response = await updateInvoiceById(id, formItemsState.fechau, formItemsState.pacienteu, formItemsState.tipou, formItemsState.doctoru,formItemsState.numerou,formItemsState.horau);
        //console.log(response);
        if(response)
            window.location.reload()
        //setShow(false)
    }

    const onInputChangeU = ({ target: { name, value } }) => {
        //console.log(name);
        //console.log(value);

        setFormItemsState({
           ...formItemsState,
           [name]: value
       });
   }

    return (
        <>
            <tr>
                <td>{fecha}</td>
                <td>{paciente}</td>
                <td>{tipo}</td>
                <td>{doctor}</td>
                <td>{numero}</td>
                <td>{estatus == 0 ? "Activa" : "Eliminada"}</td>
                <td>
                    { estatus == 0 ? (
                        <button className='btn btn-danger' onClick={() => handlerDeleteItem(id)}>eliminar</button>
                    ) : (
                        <p></p>
                    )}
                </td>
                <td>
                    { estatus == 0 ? (
                        <Button variant="info" onClick={() => handleShow(id)}>
                         Editar
                        </Button>
                    ) : (
                        <p></p>
                    )}
                    
                </td>
            </tr>
            <Modal show={show} onHide={() => handleClose(id)} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Editar registro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form /*onSubmit={onInvoiceItemsSubmit}*/>
                <Container>
                <Row>
                    <Col xs={12} md={12}>
                    Fecha:
                    <input
                    type="text"
                    name="fechau"
                    placeholder="Fecha"
                    className="form-control m-1"
                    onChange={onInputChangeU} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                    Hora:
                    <input
                    type="text"
                    name="horau"
                    placeholder="Hora"
                    className="form-control m-1"
                    onChange={onInputChangeU} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                    Paciente:
                    <input
                    type="text"
                    name="pacienteu"
                    placeholder="Paciente"
                    className="form-control m-1"
                    onChange={onInputChangeU} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                    Tipo:
                    <input
                    type="text"
                    name="tipou"
                    placeholder="Tipo"
                    className="form-control m-1"
                    onChange={onInputChangeU} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                    Doctor:
                    <input
                    type="text"
                    name="doctoru"
                    placeholder="Doctor"
                    className="form-control m-1"
                    onChange={onInputChangeU} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                    Numero de cita:
                    <input
                    type="text"
                    name="numerou"
                    placeholder="Numero"
                    className="form-control m-1"
                    onChange={onInputChangeU} />
                    </Col>
                </Row>
                </Container>
                </form>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(id)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleClose(id)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

RowItemView.propTypes = {
    id: PropTypes.number.isRequired,
    fecha: PropTypes.string.isRequired,
    paciente: PropTypes.string.isRequired,
    tipo: PropTypes.number.isRequired,
    doctor: PropTypes.string.isRequired,
    numero: PropTypes.string.isRequired,
}