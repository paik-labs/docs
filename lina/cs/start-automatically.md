# Automatické spuštění procesu

Šablona se může spustit sama, když stránka *vznikne* — v prostoru nebo pod rodičovskou stránkou — a splňuje podmínky, které nastavíte. Nikdo nemusí nic kliknout.

Co proces nikdy nespustí: pozdější přidání štítku, přesun stránky, přejmenování ani úprava. Stránka, která už existuje, si nechá, co má.

## Nastavení

1. Otevřete šablonu v návrháři a vyberte **Start**.
2. **Jak startuje** → **Při události stránky**.
3. **Událost**:
   - **Stránka vytvořena** — jakákoli nová stránka v prostoru, nebo
   - **Stránka vytvořena pod rodičovskou stránkou** — pak vyberte **Rodičovská stránka**. Zaškrtněte **Jen přímé podstránky**, pokud se stránky hlouběji počítat nemají.
4. **Prostor** — vyberte prostor.
5. **A platí všechno tohle** — volitelné podmínky, platit musí všechny (**Přidat podmínku**):
   - **Štítek** **je jeden z** / **není žádný z** štítků, které vypíšete,
   - **Název obsahuje** jedno ze slov,
   - **Autor** je jeden z lidí.
6. Volitelně:
   - **Spustit i na kopiích stránky** — kopie stránky se počítá jako nová stránka.
   - **Dovolit i ruční spuštění** — šablona se nabízí i na ostatních stránkách ke spuštění ručně. Bez toho startuje jen pravidlem.
7. **Uložit** a **Publikovat**. Pravidlo platí od publikace.

## Co se stane

- Nová stránka, která podmínky splní, má během pár sekund běžící proces. Historie ukáže jako toho, kdo proces spustil, **LINA (pravidlo)** spolu s člověkem, který stránku vytvořil — například *LINA (pravidlo) spustila proces: stránku vytvořil(a) Jana Nováková*.
- Pokud na stránce už proces běží, nestane se nic.
- Štítky přidané při psaní stránky, před jejím publikováním, se počítají. Štítek přidaný po publikování ne.
- Oprávnění ke spuštění v šabloně (**Kdo smí tento proces spustit a ukončit**) se na pravidlo nevztahují.

## Dobré vědět

- Pravidlo startu se nemůže ptát na termín „při spuštění procesu“: nikdo tam není, aby ho zadal. Publikace vás upozorní; termín nastavte jinak ([Termíny](due-dates.md)).
- Šablona vytvořená v prostoru může startovat jen na stránkách toho prostoru.
- Stránky, které LINA nevidí (stránky s omezením), proces nespustí — LINA se o nich ani nedozví. Viz [Oprávnění](permissions.md#stránky-s-omezením).
