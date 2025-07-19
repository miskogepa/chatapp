// Uvozimo mongoose za rad sa MongoDB bazom
import mongoose from "mongoose";

// Definišemo funkciju za povezivanje sa bazom podataka
const connectToDB = async () => {
  try {
    // Povezujemo se sa bazom koristeći URI iz .env fajla
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Uspesno povezivanje sa bazom podataka");
  } catch (error) {
    // Ako dođe do greške, ispisujemo je u konzolu
    
    console.log("Greska prilikom povezivanja sa bazom", error.message);
  }
};

// Izvozimo funkciju da bi mogla da se koristi u drugim delovima aplikacije
export default connectToDB;
