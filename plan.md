napisati sta sve treba da ima za korisnika u kontroleru
nrp:
hashovanje passworda sa bcrypt i saltRound
generisanje jwt tokena
expiresIn: "30d" - 30 dana

// Zašto se koristi expiresIn: "15d"?
// Ova opcija određuje koliko dugo JWT token važi (u ovom slučaju 30 dana).
// To povećava bezbednost jer ograničava vreme važenja tokena – ako neko ukrade token, može ga koristiti samo dok ne istekne.
// Kada token istekne, korisnik mora ponovo da se prijavi, što dodatno štiti nalog.
// Takođe, omogućava backend-u da zaboravi stare sesije i korisnike koji nisu aktivni.
// 30 dana je praktičan balans između sigurnosti i korisničkog iskustva – korisnik ne mora stalno da se prijavljuje, ali token ne traje zauvek.
sta se desi kada token istekne?
kada se token istekne, korisnik mora da se ponovo loguje
token se generise u backendu i salje se korisniku u frontendu
to poboljsava sigurnost jer nije isti token za svakog korisnika

res.cookie ("jwt", token {
maxAge: 15 _ 24 _ 60 _ 60 _ 1000, //ms
httpOnly: true, // prevent XSS attacks cross site scripting attacks
sameSite: "strict", // prevent CSRF attacks cross site request forgery attacks
})

// Šta je res.cookie?
// res.cookie je metoda u Express-u kojom backend šalje kolačić (cookie) korisniku u browser.
// Najčešće se koristi za čuvanje JWT tokena ili drugih podataka vezanih za sesiju.
// Omogućava backend-u da sačuva podatke na strani klijenta na siguran način.

verifikacija jwt tokena
kreiranje korisnika
logovanje korisnika
odjavljivanje korisnika
resetovanje lozinke

kako se radi verifikacija jwt tokena?
resetovanje lozinke

Pitanja:
jwt token kako radi?
kako se koristi?
kako se generise? generisanje u terminalu sa base64
kako se verifikuje?
kako se koristi u frontendu?
kako se koristi u backendu?
kako se koristi u bazi podataka?
kako se koristi u frontendu?

hashovanje passworda
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);
sta je salt?
salt je slučajna vrednost koja se dodaje passwordu kako bi se povećala sigurnost hashovanja.
kako jos mogu da nazovu salt?
mogu da ga nazovu salt ili saltRound

---

## Šta je "salt" prilikom hashovanja lozinke?

- **Salt** je nasumična vrednost koja se dodaje svakoj lozinci pre nego što se izvrši hashovanje.
- Cilj je da se za istu lozinku uvek dobije drugačiji hash, čime se sprečava napadačima da koriste gotove tabele ("rainbow tables") za razbijanje lozinki.
- Salt značajno povećava sigurnost jer čak i ako dva korisnika imaju istu lozinku, njihovi hash-ovi će biti različiti zbog različitog salt-a.
- U bcrypt-u, salt se često naziva i "saltRound" jer određuje koliko puta će se hash funkcija izvršiti (broj rundi).

**Primer:**

Ako korisnik unese lozinku "mojalozinka", bcrypt će prvo generisati salt (npr. nasumičan niz karaktera), dodati ga lozinci i tek onda izračunati hash. Tako je svaki hash jedinstven, čak i za iste lozinke.

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

menjamo package.json "main": "server.js", sada je to glavni fajl koji pokrecemo
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
