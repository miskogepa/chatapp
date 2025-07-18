instaliramo vite app u folderu frontend
u terminalu pisemo npm create vite@latest . tacka je da se napravi folder u kojem se nalazi frontend

komanda: npm create vite@latest .

sledeca komanda je npm install

npm run dev - pokrecemo server

---

## Zašto se radi `npm init -y` u root-u?

- Kada imaš frontend i backend kao posebne foldere, korisno je imati jedan glavni `package.json` u root-u projekta.
- To omogućava da iz root-a pokrećeš skripte za oba dela aplikacije (npr. paralelno pokretanje frontenda i backenda).
- Olakšava deployment na platformama kao što je Render, jer možeš da podesiš build i start komande iz root-a.
- Developerima je lakše da pokrenu celu aplikaciju iz jednog mesta, bez ulaska u svaki folder posebno.

**Primer:**

1. U root folderu pokreni:
   ```bash
   npm init -y
   ```
2. U `package.json` u root-u možeš dodati skripte za pokretanje oba dela:
   ```json
   "scripts": {
     "dev": "concurrently \"npm run dev --prefix frontend\" \"npm start --prefix backend\""
   }
   ```
3. Render-u ili drugom servisu možeš reći da koristi root kao radni direktorijum i koristiš te skripte za build/start.


## backend
komanda: npm init -y - u root folderu dobijamo package.json
ostale komande koje su nam potrebne su:

npm install express
npm install nodemon --save-dev 

npm install cors instaliramo cors da bi mogli da komuniciramo izmedju frontenda i backenda

npm install mongoose
npm install dotenv
npm install jsonwebtoken


menjamo package.json  "main": "server.js", sada je to glavni fajl koji pokrecemo
kreiramo server.js fajl u backend folderu

instaliramo express, dotenv, cookie-parser, bcryptjs, mongoose, socket.io, jsonwebtoken

komanda: npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken 

npm install nodemon --save-dev

u package.json dodajemo skripte za pokretanje servera 
 
 "scripts": {
    "dev": "nodemon backend/server.js"
  },
i dodajemo type: "module" u package.json

Server.js fajl:


nakon osnovnih provera i instalacija pokrecemo server i vidimo da li radi

kreiramo auth.routes.js fajl u backend/routes folderu

i controlles fajl u backend/controlles folderu

previmo novi projekat na mongoDB atlas u .env fajlu

dodajemo 
MONGO_DB_URI=mongodb+srv://milovanjankovic50m:password@chatapp.nwhoi0k.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=chatapp


mongodb.net/chat-app-db?retryWrites
/chat-app-db je ime baze podataka

pravimo folder db u backend folderu
pa fajl connectToDB.js u db folderu







