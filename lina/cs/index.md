<img src="../assets/lina.svg" alt="LINA" width="64" height="64">

# LINA — dokumenty, které rozhýbou práci

LINA dá stránce v Confluence proces. Když dokument dojde do určitého bodu, LINA v Jiře založí práci, která z toho plyne, a dokument se neposune dál, dokud ta práce není hotová.

Typický příklad: nová stránka se směrnicí spustí proces. LINA založí v Jiře ticket ke kontrole pro kontrolora. Stránka čeká u *Kontroly*, dokud ticket není hotový, pak ji člověk schválí nebo vrátí. Schválená směrnice platí rok, potom LINA založí revizní ticket.

Proces si nakreslíte sami, jednou, jako šablonu. Každá stránka, na které běží, se řídí nákresem.

Tohle je česká verze dokumentace. Snímky obrazovky jsou z anglické verze aplikace; LINA mluví jazykem, který má každý uživatel nastavený v profilu Atlassianu.

## Co hledáte

| Chci… | Čtěte |
|---|---|
| za deset minut vidět, co LINA umí, bez nastavování | [Začínáme](getting-started.md) |
| rozumět pojmům: šablona, běh, Podmínka, rozcestí, brána, stav | [Jak LINA funguje](concepts.md) |
| nakreslit vlastní proces | [Návrh šablony procesu](design-a-template.md) |
| aby nové stránky dostávaly proces samy | [Automatické spuštění procesu](start-automatically.md) |
| spustit proces na stránce, vidět, na co čeká, posunout ho | [Práce s procesem na stránce](work-on-a-page.md) |
| nechat dokument čekat na datum, po roce propadnout, připomínat lidem | [Termíny a připomínky](due-dates.md) |
| dát dokumentům stavy jako *Koncept*, *Schváleno*, *Vyřazeno* | [Stavy dokumentu](document-states.md) |
| vidět, které dokumenty v prostoru jsou po termínu, uvízlé nebo čekají | [Přehled prostoru](space-overview.md) |
| posunout dokument, i když jeho ticket není hotový | [Přesto pokračovat](work-on-a-page.md#přesto-pokračovat) |
| rozhodnout, kdy je ticket v Jiře hotový a kdo smí přesto pokračovat | [Nastavení prostoru](space-settings.md) |
| z ticketu v Jiře poznat, ke kterému dokumentu patří | [LINA v Jiře](jira.md) |
| dát na stránku historii procesu nebo seznam dokumentů se stavem | [Makra](macros.md) |
| najít všechny schválené nebo už neplatné dokumenty | [Hledání dokumentů podle stavu](find-documents-by-state.md) |
| číst stav stránky ze skriptu nebo reportu | [Čtení stavu stránky (API)](read-api.md) |
| nastavit servisní účty, šablony v prostorech, uchovávání dat | [Konfigurace aplikace](app-configuration.md) |
| vědět, kdo smí co | [Oprávnění](permissions.md) |
| vědět, co se stane při kopii, přesunu nebo smazání stránky | [Kopírování, přesun a mazání stránek](pages-copy-move-delete.md) |
| začít od hotového procesu (schvalování, korektura, specifikace → Jira, záznam rozhodnutí) | [Ukázkové šablony](examples.md#hotové-ukázkové-šablony) |
| postavit běžný proces krok za krokem | [Příklady](examples.md#nakreslete-si-to-sami) |
| rozumět hlášce, kterou LINA ukáže | [Řešení potíží](troubleshooting.md) a [Kontroly při publikaci](reference/publish-checks.md) |

## Kde se LINA objevuje

| Kde | Co tam děláte | Kdo |
|---|---|---|
| Odznak **LINA** vedle názvu stránky | spustit proces, vidět, na co čeká, posunout ho, historie | každý, kdo stránku vidí |
| Postranní panel prostoru → *Space apps* → LINA | [přehled](space-overview.md) procesů v prostoru | každý v prostoru |
| *Space settings* → *Integrations* → LINA | [nastavení prostoru](space-settings.md) a šablony prostoru | admini prostoru |
| *Confluence administration* → *Apps* → LINA | [šablony](design-a-template.md), [konfigurace](app-configuration.md), [Začínáme](getting-started.md) | admini Confluence |
| Panel *Source document* na ticketu v Jiře | [ke kterému dokumentu ticket patří](jira.md) | každý, kdo ticket vidí |

LINA umí anglicky, česky, německy, francouzsky, rusky a zjednodušenou čínštinou — podle jazyka v profilu Atlassianu každého uživatele.
