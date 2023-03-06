const { DataTypes, Op } = require('sequelize')

const { db } = require('../utils/database')



const Depilacion = db.define('depliacion', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        // field: 'first_name'
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        // field: 'last_name'
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    time: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
            async isAvailable(value) {
                const startHour = new Date(value).setMinutes(0, 0, 0);
                const endHour = new Date(value).setMinutes(59, 59, 999);
                const existingAppointments = await Appointments.count({
                    where: {
                        time: {
                            [Op.between]: [startHour, endHour]
                        }
                    }
                });
                if (existingAppointments >= 1) {
                    throw new Error('No hay citas disponibles a esta hora');
                }
            }
        }
    },
    phone:{
        allowNull: false,
        type: DataTypes.STRING
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
})

module.exports = Depilacion

// depilacion laser >
// depilacion manual <
// masajes
// faciales
// microbeiding 2h
// peluqeuria 