# Jak LINA funguje

## Šablona a běh

*Šablona* je proces nakreslený v návrháři LINA: figury spojené čarami. Admini ji navrhují a *publikují*. Publikovaná šablona se nabízí na stránkách, nebo se na nových stránkách spouští sama.

*Běh* je jedna šablona běžící na jedné stránce. Stránka má nejvýš jeden běžící proces. Běh se řídí šablonou *tak, jak byla publikovaná, když běh začal*: pozdější změny šablony ani její smazání běžící procesy nemění.

Proces se spouští jen dvěma způsoby:

- *ručně* — někdo na stránce vybere šablonu a klikne na **Spustit**, nebo
- *pravidlem šablony při vzniku stránky* — viz [Automatické spuštění procesu](start-automatically.md).

Přidání štítku, přesun ani přejmenování stránky proces nikdy nespustí, nerestartuje ani nevymění.

## Figury

| Figura | Co dělá |
|---|---|
| **Start** | kde proces začíná. Každá šablona má právě jeden. |
| **Podmínka** | zastávka. Dokument tu čeká, dokud neplatí všechno zaškrtnuté — tickety hotové, člověk potvrdí, termín uplynul — a pak pokračuje svou jedinou čarou. |
| **Ruční rozcestí** | člověk vybere, jak pokračovat, například *Schválit* nebo *Zamítnout*. Větev může vyžadovat komentář. |
| **Automatické rozcestí** | cestu dál vybere LINA podle [stavu dokumentu](document-states.md). |
| **Podproces** | uvnitř tohoto procesu spustí jinou šablonu (typu *Podproces*) a pak sám pokračuje. |
| **Konec** | tady proces končí. Konec může před ukončením i čekat, stejně jako Podmínka. |

## Akce na čarách

Akce patří na čáry, ne na figury. Proběhnou, když proces jde po čáře.

| Akce | Co dělá |
|---|---|
| **Založit ticket** | založí issue v Jiře z formuláře načteného z Jiry (projekt, typ issue, pole formuláře pro založení). Ticket odkazuje zpět na stránku. Ticket může být *povinný*: Podmínka nebo Konec, které čekají na tickety, pak dokument nepustí dál, dokud není hotový. |
| **Poslat e-mail** | napíše na stránku komentář se zmínkou vybraných lidí; Confluence jim pošle e-mail. |
| **Nastavit stav** | nastaví [stav dokumentu](document-states.md), například *Schváleno*. |

Texty akcí mohou obsahovat zástupné značky jako `{page}` nebo `{due}` — viz [Návrh šablony procesu](design-a-template.md#zástupné-značky).

## Brána

Podmínce nebo Konci, které čekají, se říká brána. LINA ji vyhodnocuje *ve chvíli, kdy se někdo nebo něco pokusí pokračovat*: tickety čte z Jiry právě v tu chvíli. Když něco chybí, panel na stránce přesně řekne co: který ticket není hotový, který termín ještě neuplynul.

- Bez volby **Člověk potvrdí (klikne Pokračovat)** se proces posune sám, jakmile všechno platí — když se ticket v Jiře změní, když někdo otevře stránku, nebo při denní kontrole.
- S ní klikne člověk na **Pokračovat**, jakmile platí všechno ostatní.
- Lidé uvedení v [nastavení prostoru](space-settings.md) smí s důvodem **Přesto pokračovat**; důvod jde do historie s jejich jménem.

Když si LINA nemůže být jistá — ticket byl smazán, Jira neodpovídá, ticket se nezaložil — brána zůstane zavřená a řekne proč.

## Historie

Každý krok jde do historie běhu: kdo proces spustil, kudy šel, které tickety vznikly, kdo přesto pokračoval a proč. Automatické kroky se zapisují jako **LINA**; start pravidlem šablony jako **LINA (pravidlo)** spolu s člověkem, který ho vyvolal (autorem nové stránky). Viz [Práce s procesem na stránce](work-on-a-page.md#historie).

## Kde LINA drží data

LINA ukládá procesy a jejich historii v úložišti Atlassianu pro aplikaci, ne ve stránce. Stránka nese jen kopii aktuálního stavu pro zobrazení a [hledání](find-documents-by-state.md). Úprava stránky ani jejích vlastností proces nemění.
