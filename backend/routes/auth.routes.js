// Uvozimo express da bismo mogli da pravimo rute
import express from "express";
// Uvozimo kontroler za autentifikaciju
import { signup, login, logout } from "../controllers/auth.controller.js";

// Kreiramo novi router objekat
const router = express.Router();

router.post("/signup", signup);

// Definišemo rutu za login korisnika
router.post("/login", login); // Kada korisnik pristupi /api/auth/login, poziva se login kontroler

router.post("/logout", logout);

// Izvozimo router da bi mogao da se koristi u drugim delovima aplikacije
export default router;
