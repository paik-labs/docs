# Termíny a připomínky

Podmínka nebo Konec mohou čekat na termín: **Uplynul termín**. Hodí se na „platí rok“, „revize do konce čtvrtletí“ nebo „před zveřejněním počkat dva týdny“.

## Odkud se termín vezme

V návrháři vyberte Podmínku nebo Konec, zaškrtněte **Uplynul termín** a pod **Odkud se termín vezme** zvolte:

**Automaticky**

- **Pevné datum** — datum z kalendáře.
- **X dní po spuštění procesu**
- **X dní po příchodu procesu sem** — například 365 pro „platí rok od schválení“.

**Ručně (zadá ho člověk)**

- **Zadá se při spuštění procesu** — kdo proces spouští, zadá datum před kliknutím na **Spustit**. Nejde u šablon, které se [spouštějí automaticky](start-automatically.md).
- **Zadá se, když proces dojde sem** — lidé v poli **Koho se zeptat (e-mailem)** dostanou e-mail s žádostí o datum. Zadat ho pak může kdokoli, kdo stránku otevře. Do té doby dokument čeká.

Termín jde kombinovat s dalšími podmínkami, například „tickety jsou hotové *a* uplynul termín“.

## Co se stane v den termínu

LINA spouští *denní kontrolu*. Když termín uplynul a nic dalšího nechybí, kontrola proces posune — a proběhnou akce na další čáře, například vznikne revizní ticket. Pokud figura čeká i na **Člověk potvrdí (klikne Pokračovat)**, kontrola ji neposune; na **Pokračovat** klikne člověk.

Denní kontrola běží jednou denně v čase, který určuje Atlassian, ne o půlnoci. Dokument se proto může posunout až den po termínu. Otevření stránky ho posune hned.

Kontrolu jde bezpečně opakovat: ticket nikdy nevznikne dvakrát.

## Připomínky

Do **Připomenout tolik dní předem (prázdné = bez připomínky)** zadejte počet dní a vyberte **Kdo dostane připomínku e-mailem**. LINA tolik dní před termínem jednou napíše na stránku komentář se zmínkou těchto lidí. Confluence jim pošle e-mail.

## Termín v Jiře

Akce **Založit ticket** na čáře, která vede do figury s termínem, zkopíruje toto datum do pole *Due date* ticketu — volba **Zkopírovat termín figury, kam čára vede, do pole Due date ticketu** (výchozí zapnuto).

- Pokud se datum zadá až později, LINA ho do ticketů zapíše tehdy a znovu při každé změně.
- Pokud typ issue nemá *Due date* ve formuláři pro založení, návrhář vás upozorní. Jira ho pak může odmítnout; historie to řekne a ticket se počítá dál.

## Co se blíží

[Přehled prostoru](space-overview.md) má **Po termínu**, **Brzy termín** (příštích 14 dní) a **Bez termínu**. [Panel v Jiře](jira.md) ukazuje termín u každého ticketu.
