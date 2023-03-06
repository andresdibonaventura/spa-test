const uuid = require("uuid");

const Peluqueria = require('../models/peluqueriaModel')

const getAllAppointments = async () => {
    const data = await Peluqueria.findAll()
    return data
}

const getAppointmentById = async (id) => {
    const data = await Peluqueria.findOne({
        where: {
            id: id
        }
    })
    return data
}




const createAppointment = async (data) => {
  
      const newAppointment = await Peluqueria.create({
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
    const data = await Peluqueria.destroy({
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