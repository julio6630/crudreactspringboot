import axios from "axios"

const BASE_URL = "http://localhost:8080/citas"

export const getInvoice = async() => {
    try {
        const response = await axios.get(BASE_URL)
        if(response.status == 200)
            return response.data
    } catch(err){
        console.log(err)
    }

    return {};
}

export const getInvoiceById = async({id}) => {
    try {
        const response = await axios.get(BASE_URL + '/' + id)
        if(response.status == 200)
            return response.data
    } catch(err){
        console.log(err)
    }

    return {};
}

export const updateInvoiceById = async(id, fecha, paciente, tipo, doctor, numero, hora) => {
    try {
        const response = await axios.put(BASE_URL + '/' + id,{
            fecha,
            paciente,
            tipo,
            doctor,
            numero,
            hora
        })
        if(response.status == 200)
            return response.data
    } catch(err){
        console.log(err)
    }

    return {};
}

export const createCita = async({fecha, hora, paciente, tipo, doctor, numero, estatus}) => {
    try {
        const response = await axios.post(BASE_URL,{
            fecha,
            paciente,
            tipo,
            doctor,
            numero,
            hora,
            estatus
        })

        if(response.status == 201)
            return true

    } catch(err){
        console.log(err)
    }

    return undefined;
}

export const deleteCita = async(id, estatus) => {
    console.log(BASE_URL + '/logicalDelete/' + id)
    console.log(id)
    console.log(estatus)
    try {
        const response = await axios.put(BASE_URL + '/logicalDelete/' + id,{
            estatus
        })

        if(response.status == 200)
            return true

    } catch(err){
        console.log(err)
    }

    return undefined;
}

export const calculateTotal = (items = []) => {
    return items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}