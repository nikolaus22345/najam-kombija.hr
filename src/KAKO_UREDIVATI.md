# Vodič za uređivanje stranice

Ovdje je kratki "šalabahter" kako da se snađete u kodu i sami mijenjate linkove, tekstove i slike.

## 🔍 Kako brzo naći bilo što?
Najbrži način da nađete nešto je da **ne tražite datoteku ručno**, nego:
1. Kliknite bilo gdje u kodu.
2. Pritisnite **Ctrl + Shift + F** (Pretraživanje cijelog projekta).
3. Upišite riječ koju vidite na ekranu (npr. "Reliable transfers").
4. VS Code će vam pokazati točno u kojoj datoteci se to nalazi.

---

## 📂 Glavna mapa (Gdje je što?)

Sve bitno se nalazi u mapi **`src`**.

### 1. Prijevodi i Tekstovi 🌍
Svi tekstovi na svim jezicima nalaze se u jednoj datoteci:
👉 **`src/lib/translations.ts`**
*   Tu mijenjate tekstove za "en", "hr", "de", "it" itd.
*   Pazite na navodnike (`""`) i zareze!

### 2. Izbornik (Gornja traka) 🔝
Linkovi kao "Home", "About", "Contact":
👉 **`src/components/Header.tsx`**

### 3. Popis Popularnih Ruta (Sredina naslovnice) 🚌
Gdje su pravokutnici s gradovima (Zagreb, Split, Beč...):
👉 **`src/components/PopularRoutes.tsx`**
*   Tu dodajete nove gradove u listu `routes`.

### 4. Svi Gradovi (Stranica "Destinations") list
Popis svih mogućih destinacija:
👉 **`src/pages/transfers/AllDestinations.tsx`**

### 5. Forma za Rezervaciju 📅
Gdje se biraju datumi i putnici:
👉 **`src/components/BookingForm.tsx`**

### 6. Naslovna Slika i Uvod 👋
Veliki naslov na početku:
👉 **`src/components/Hero.tsx`**

---

## 🛠 Kako popraviti 404 Grešku na Vercelu?
Ako osvježite stranicu (Refresh) dok ste na npr. `/it` ili `/fr`, dobit ćete 404 grešku. To je normalno za ovakve aplikacije dok se ne doda jedna postavka.

**Rješenje:**
1.  U glavnoj mapi projekta (gdje je `package.json`) napravite novu datoteku.
2.  Nazovite je **`vercel.json`**.
3.  U nju zalijepite ovaj kod:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
4.  Spremite i pošaljite na Git (Commit & Push). Greška će nestati!
