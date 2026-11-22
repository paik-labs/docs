# Příklady

## Hotové ukázkové šablony

LINA má pět ukázkových procesů. Najdete je nahoře v seznamu šablon v návrháři, označené **Přibalená**. Můžete je **Zobrazit** a **Kopírovat**; kopie je vaše vlastní šablona, kterou dokončíte a publikujete. Ukázky jsou anglicky — názvy figur, stavů i ticketů si v kopii přepište.

| Ukázka | Na co | Co předvádí | Po **Kopírovat** |
|---|---|---|---|
| *Document lifecycle* | směrnice, pravidla: kontrola, schválení, roční revize, vyřazení | celý cyklus se stavy dokumentu a termínem | vyberte projekt Jiry a typ issue obou ticketů |
| *Procedure with proofreading* | příručky, postupy, které před schválením potřebují jazykovou kontrolu | [podproces](design-a-template.md#podprocesy) s vlastním ticketem | zkopíruje se i podproces *Proofreading*: vyberte v něm projekt a typ issue, publikujte ho jako první, pak postup |
| *New procedures start by themselves* | každá nová stránka pod rodičovskou stránkou dostane kontrolu bez kliknutí | [pravidlo startu](start-automatically.md) s podmínkou na štítek | vyberte **Start**, zvolte **Prostor** a **Rodičovská stránka**; vyberte projekt a typ issue ticketů |
| *Specification to Jira work* | specifikace, žádosti o změnu: schválení založí práci | schválení založí ticket na implementaci a dokument čeká, dokud není hotový | vyberte projekt a typ issue ticketu |
| *Decision record* | rozhodnutí, ADR, rozhodnutí z porad — Jira není potřeba | rozhodnutí platí, dokud ho někdo neoznačí za nahrazené | nic — publikujte, jak je |

Pak **Uložit** a **Publikovat**. Pokud něco chybí, publikace řekne co ([Kontroly při publikaci](reference/publish-checks.md)).

V kopii změňte, co chcete: názvy figur a stavů, texty ticketů, termíny, kdo smí proces spustit. Samotné ukázky se nikdy nemění a nikdy neběží.

### Document lifecycle

*Draft* (autor klikne na **Pokračovat**) → povinný ticket ke kontrole → *Review* → *Approve?*: *Approve*, nebo *Reject* s komentářem (zpět na *Draft*) → *Approved* na 365 dní → povinný revizní ticket → *Expired* → *Keep the document?*: *Revise* (zpět na *Draft*), nebo *Retire* s komentářem.

Stavy: *Draft*, *In review*, *Approved*, *Revision due* (platné), *Retired* (neplatný — čtenáři uvidí pruh **Tento dokument už neplatí**).

### Procedure with proofreading

*Draft* → podproces *Proofreading* (povinný ticket „Proofread …“; skončí, když je hotový) → *Approve?*: *Approve* (končí jako *Approved*), nebo *Return* s komentářem (zpět na *Draft*).

Zatímco korektor pracuje, odznak ukazuje *LINA · Proofread · Proofreading › Proofread*. Když je ticket hotový, postup se posune sám.

Stavy: *Draft*, *In proofreading*, *Proofread*, *Approved*.

### New procedures start by themselves

Spouští se na každé nové stránce vytvořené pod rodičovskou stránkou, kterou vyberete, pokud má stránka štítek `procedure`. Hned vznikne povinný ticket ke kontrole → *Review* → *Approve?*: *Approve* (končí jako *Published*), nebo *Return* s komentářem → *Rework* (autor klikne na **Pokračovat**) → nový ticket ke kontrole → znovu *Review*.

Stránky, které štítek dostanou později nebo se pod rodiče přesunou, proces nespustí — tak je to zamýšlené. Chcete-li jiné štítky, upravte podmínku u figury **Start**.

Stavy: *In review*, *Rework*, *Published*.

### Specification to Jira work

*Draft* (autor klikne na **Pokračovat**) → *Approve?*: *Approve* založí v Jiře ticket „Implement …“, nebo *Return* s komentářem → *Implementation* čeká, dokud ticket není hotový → končí jako *Delivered*.

[Panel Source document](jira.md#panel-source-document) u ticketu řekne implementátorovi, ze které specifikace ticket pochází. Pokud jedna specifikace znamená víc ticketů, přidejte na čáru *Approve* další akce **Založit ticket**.

Stavy: *Draft*, *In implementation*, *Delivered*.

### Decision record

*Proposal* (autor klikne na **Pokračovat**, když je hotový) → *Decide*: *Accept* (stav *Decided*, na stránku se jako komentář zapíše poznámka), nebo *Reject* s důvodem (končí jako *Rejected*) → *In force*, dokud někdo nevybere *Mark as superseded* s důvodem (končí jako *Superseded*).

*Superseded* a *Rejected* patří do skupiny **Neplatný**, takže čtenáři uvidí pruh a [hledání](find-documents-by-state.md) odliší platná rozhodnutí od starých.

Chcete-li při přijetí rozhodnutí poslat lidem e-mail, vyberte čáru *Accept*, otevřete akci *Decision note* a vyberte lidi v poli **Zmínit**.

## Nakreslete si to sami

### Kontrola, schválení a roční revize

Ukázka *Document lifecycle* krok za krokem (s českými názvy):

1. Záložka **Stavy dokumentu**: *Koncept* (Rozpracovaný), *V kontrole* (Rozpracovaný), *Schváleno* (Platný), *K revizi* (Platný), *Vyřazeno* (Neplatný).
2. Figury zleva doprava:
   - Start
   - Podmínka *Koncept* — **Člověk potvrdí (klikne Pokračovat)**: autor řekne, že koncept je hotový.
   - Podmínka *Kontrola* — **Jsou hotové všechny povinné tickety tohoto procesu**.
   - Ruční rozcestí *Schválit?*
   - Podmínka *Schváleno* — **Uplynul termín**, **Automaticky**, **X dní po příchodu procesu sem**, 365 dní. Volitelně připomínka 30 dní předem.
   - Podmínka *Propadlé* — **Jsou hotové všechny povinné tickety tohoto procesu**.
   - Ruční rozcestí *Ponechat dokument?*
   - Konec *Vyřazeno* — nastaví stav *Vyřazeno*.
3. Čáry a jejich akce:
   - Start → *Koncept*: **Nastavit stav** *Koncept*.
   - *Koncept* → *Kontrola*: **Založit ticket** „Kontrola {page}“, **Povinný pro schválení (brána na tento ticket čeká)**; **Nastavit stav** *V kontrole*.
   - *Kontrola* → *Schválit?*
   - *Schválit?* → *Schváleno*, popisek *Schválit*: **Nastavit stav** *Schváleno*.
   - *Schválit?* → *Koncept*, popisek *Zamítnout*, **Volba této větve vyžaduje komentář**: **Nastavit stav** *Koncept*.
   - *Schváleno* → *Propadlé*: **Založit ticket** „Revize {page}“, povinný; **Nastavit stav** *K revizi*.
   - *Propadlé* → *Ponechat dokument?*
   - *Ponechat dokument?* → *Koncept*, popisek *Revidovat*.
   - *Ponechat dokument?* → *Vyřazeno*, popisek *Vyřadit*, komentář povinný.
4. **Uložit**, **Publikovat**.

### Samostatný krok korektury

1. **Vytvořit** → **Vytvořit podproces**, pojmenujte ho *Korektura*:
   - Start → Konec *Zkorigováno*. V části **Končí, když** zaškrtněte **Jsou hotové všechny povinné tickety tohoto podprocesu**.
   - Čára Start → *Zkorigováno*: **Založit ticket** „Korektura {page}“, povinný.
   - **Uložit**, **Publikovat**.
2. V hlavní šabloně dejte před schválení figuru Podproces a vyberte *Korektura*. Volitelně **Když podproces skončí, nastavit stav dokumentu**.
3. **Publikovat** hlavní šablonu.

### Každý nový postup dostane proces

1. Otevřete šablonu a vyberte **Start**.
2. **Jak startuje** → **Při události stránky** → **Stránka vytvořena pod rodičovskou stránkou**; **Prostor** a **Rodičovská stránka**.
3. **A platí všechno tohle** → **Přidat podmínku** → **Štítek** **je jeden z** `procedure`.
4. **Publikovat**.

Víc v [Automatickém spuštění procesu](start-automatically.md).

## Někdo odešel — posuňte dokument dál

*Dokument čeká na ticket kolegy, který odešel.*

Admin prostoru (nebo někdo uvedený v [nastavení prostoru](space-settings.md#kdo-smí-přesto-pokračovat)) otevře stránku, klikne na **Přesto pokračovat…**, napíše důvod — „Kontrolor odešel z firmy, kontrolu udělal J. Novák na poradě 3. března“ — a potvrdí. Historie si jméno i důvod ponechá. Viz [Přesto pokračovat](work-on-a-page.md#přesto-pokračovat).
