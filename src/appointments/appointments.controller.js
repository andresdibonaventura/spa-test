const uuid = require("uuid");

const Appointments = require('../models/appointmentsModel')

const getAllAppointments = async () => {
    const data = await Appointments.findAll()
    return data
}

const getAppointmentById = async (id) => {
    const data = await Appointments.findOne({
        where: {
            id: id
        }
    })
    return data
}




const createAppointment = async (data) => {
  
      const newAppointment = await Appointments.create({
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
    const data = await Appointments.destroy({
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