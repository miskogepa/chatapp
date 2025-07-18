// Uvozimo express framework koji olakšava rad sa serverom
import express from "express";
// Uvozimo dotenv da bismo mogli koristiti promenljive iz .env fajla
import dotenv from "dotenv";
// Uvozimo rute za autentifikaciju korisnika
import authRoutes from "./routes/auth.routes.js";
// Uvozimo funkciju za povezivanje sa bazom podataka
import connectToDB from "./db/connectToDB.js";

// Pravimo osnovni express server
const app = express();

// Inicijalizujemo dotenv kako bismo mogli koristiti process.env promenljive
dotenv.config();
// Definišemo port na kojem će server slušati (uzima iz .env ili koristi 5000 kao podrazumevani)
const PORT = process.env.PORT || 5000;

// Ovo je osnovna ruta koja vraća "Hello World" kada neko pristupi http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Kada neko pristupi /api/auth, koristi authRoutes za autentifikaciju
app.use("/api/auth", authRoutes); // npr. http://localhost:5000/api/auth/login

// Pokrećemo server, povezujemo se sa bazom i ispisujemo poruku kada je server spreman
app.listen(PORT, () => {
  connectToDB(); // Povezujemo se sa bazom podataka prilikom pokretanja servera
  console.log(`Server is running on port ${PORT}`);
});
