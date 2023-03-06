const uuid = require("uuid");

const Masajes = require('../models/masajesModel')

const getAllAppointments = async () => {
    const data = await Masajes.findAll()
    return data
}

const getAppointmentById = async (id) => {
    const data = await Masajes.findOne({
        where: {
            id: id
        }
    })
    return data
}




const createAppointment = async (data) => {
  
      const newAppointment = await Masajes.create({
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
    const data = await Masajes.destroy({
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