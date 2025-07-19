// Uvozimo express framework koji olakšava rad sa serverom
import express from "express";
// Uvozimo dotenv da bismo mogli koristiti promenljive iz .env fajla
import dotenv from "dotenv";
// Uvozimo rute za autentifikaciju korisnika
import authRoutes from "./routes/auth.routes.js";
// Uvozimo funkciju za povezivanje sa bazom podataka
import connectToDB from "./db/connectToDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);

// Pokrećemo server, povezujemo se sa bazom i ispisujemo poruku kada je server spreman
app.listen(PORT, () => {
  connectToDB(); // Povezujemo se sa bazom podataka prilikom pokretanja servera
  console.log(`Server is running on port ${PORT}`);
});
