// Uvozimo express da bismo mogli da pravimo rute
import express from "express";
// Uvozimo kontroler za autentifikaciju
import { login } from "../controllers/auth.controller.js";

// Kreiramo novi router objekat
const router = express.Router();

// Definišemo rutu za login korisnika
router.get("/login", login); // Kada korisnik pristupi /api/auth/login, poziva se login kontroler

// Izvozimo router da bi mogao da se koristi u drugim delovima aplikacije
export default router;
