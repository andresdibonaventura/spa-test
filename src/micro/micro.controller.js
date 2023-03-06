const uuid = require("uuid");

const Micro = require('../models/microModel')

const getAllAppointments = async () => {
    const data = await Micro.findAll()
    return data
}

const getAppointmentById = async (id) => {
    const data = await Micro.findOne({
        where: {
            id: id
        }
    })
    return data
}




const createAppointment = async (data) => {
  
      const newAppointment = await Micro.create({
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
    const data = await Micro.destroy({
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