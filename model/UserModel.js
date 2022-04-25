import { Sequelize } from "sequelize";
//const { Sequelize }  = require ('sequelize');
import db from "../config/database.js"

const { DataTypes } = Sequelize;
const Users = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type : DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
 },{
    freezeTableName:true
});

export const SuratKeluar = db.define('surat_keluar',{
    tanggal:{
        type: DataTypes.DATEONLY
    },
    no_surat:{
        type: DataTypes.STRING
    },
    keterangan:{
        type : DataTypes.STRING
    },
 },{
    freezeTableName:true
});


export default Users;