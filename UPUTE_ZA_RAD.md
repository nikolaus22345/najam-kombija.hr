# 🚀 KAKO UREĐIVATI WEB STRANICU (Antigravity & GitHub)

Ovo su upute kako uvijek možeš nastaviti rad na svojoj stranici, bilo da se aplikacija ugasila ili si na drugom kompjuteru.

---

## 1️⃣ Ako se Antigravity/Editor ugasi (ISTI KOMPJUTER)

Ako si na istom kompjuteru, tvoj projekt je i dalje u mapi:
`C:\Users\Korisnik\Desktop\Zagreb transfers zadnji i pravi\zagreb-transfer-hub-main (1)\zagreb-transfer-hub-main`

**Što napraviti:**
1. Otvori **Antigravity** (ili svoj editor).
2. Odaberi **File > Open Folder**.
3. Navigiraj do gornje mape i stisni **Open**.
4. Samo nastavi pisati naredbe! (npr. *"Promijeni naslov u..."*)

---

## 2️⃣ Ako si na DRUGOM KOMPJUTERU (NOVI KOMPJUTER)

Na novom kompjuteru nemaš ove datoteke. Moraš ih "povući" s GitHuba.

**Što napraviti:**
1. Instaliraj **Git** (ako nemaš: [git-scm.com](https://git-scm.com/)) i **VS Code** (ili Antigravity).
2. Otvori Terminal (Command Prompt).
3. Upiši ovu naredbu da preuzmeš cijeli projekt:
   ```bash
   git clone https://github.com/nikolaus22345/zagreb-transfer-hub.git
   ```
4. Sada imaš mapu `zagreb-transfer-hub`.
5. Otvori tu mapu u Antigravity-u/Code-u.
6. **Spreman si!** Možeš raditi izmjene.

---

## 3️⃣ KAKO SAČUVATI PROMJENE (BITNO!)

Kada god nešto promijeniš (bilo gdje), **moraš to poslati na GitHub** da se vidi na internetu (Vercel) i da možeš nastaviti na drugom kompjuteru.

**Samo mi reci:**
> "Pošalji promjene na GitHub"

Ja ću automatski napraviti `git add`, `git commit` i `git push`.

---

## ⚡ Sažetak za "Skriptu"

Ako želiš "skriptu" u glavi:
1. **PULL** (Preuzmi zadnje stanje ako si mijenjao na drugom kompjuteru): `git pull`
2. **WORK** (Radi izmjene): *Reci meni što želiš.*
3. **PUSH** (Pošalji na internet): *Reci meni "Pošalji na GitHub".*
