const uuid = require("uuid");

const Depilacion = require('../models/depilacionModel')

const getAllAppointments = async () => {
    const data = await Depilacion.findAll()
    return data
}

const getAppointmentById = async (id) => {
    const data = await Depilacion.findOne({
        where: {
            id: id
        }
    })
    return data
}




const createAppointment = async (data) => {
  
      const newAppointment = await Depilacion.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        email: data.email,
        time: data.time,
        phone: data.phone
        
      });
      return newAppointment;
    }
//   };

const deleteAppointment = async (id) => {
    const data = await Depilacion.destroy({
        where:{
            id:id
        }
    })
    return data
}

module.exports = {
    getAllAppointments,
    getAppointmentById,
    createAppointment,
    deleteAppointment
}