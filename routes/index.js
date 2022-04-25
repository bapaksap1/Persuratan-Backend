import express from "express";
import { getUsers, Login, Register, Logout } from "../controllers/Users.js";
import { inputSuratKeluar, getSuratKeluar, delSuratKeluar, updSuratKeluar } from "../controllers/SuratKeluar.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

// USERS
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// INPUT SURAT
router.post('/inputsurat', inputSuratKeluar);
router.get('/tampilsurat', getSuratKeluar);
router.delete('/tampilsurat', delSuratKeluar);
router.put('/tampilsurat', updSuratKeluar);
 


export default router;