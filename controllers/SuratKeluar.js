//import { header } from "express/lib/request";
import SuratKeluar from "../model/Sur_KelModel.js";

export const inputSuratKeluar = async (req, res) => {
  const { tanggal, no_surat, keterangan } = req.body;
  try {
    await SuratKeluar.create({
      tanggal: tanggal,
      no_surat: no_surat,
      keterangan: keterangan
    });
    res.json({msg: "Input berhasil"})
  } catch (error) {
    console.log(error);
  }
}

export const getSuratKeluar = async(req, res) => {
  try {
      const suratkeluar = await SuratKeluar.findAll({
      });
      console.log(suratkeluar);
      res.json(suratkeluar);
  } catch (error) {
      console.log(error);
      res.status(404).json({message:"Surat Tidak ada"})
  }
}

// const jane = await User.create({ name: "Jane" });
// console.log(jane.name); // "Jane"
// await jane.destroy();
// // Now this entry was removed from the database

export const delSuratKeluar = async(req, res) => {
  try {
      const suratkeluar = await SuratKeluar.findOne({
        where: {
          id : Number(req.body.id)},
      });
      console.log(suratkeluar);
      await suratkeluar.destroy({
        where: {
          id :Number(req.body.id)
      }
      })
  
      res.status(200).json({message:"Surat Berhasil dihapus"})
  } catch (error) {
      console.log(error);
      res.status(404).json({message:"Surat tidak dapat dihapus"})
  }

}

export const updSuratKeluar = async(req, res) => {
  try {
      const suratkeluar = await SuratKeluar.update({
      tanggal: tanggal,
      no_surat: no_surat,
      keterangan: keterangan
    }, {
      where: {
        id: Number(req.body.id)
      }
    });
    res.status(200).json({message:"Surat Berhasil diupdate"})
  } catch (error) {
    console.log(error);
    res.status(404).json({message:"Surat Gagal di Update"})
  }
}