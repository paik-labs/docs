# Oprávnění

LINA se řídí oprávněními Confluence a Jiry. Nikdy neukáže stránku někomu, kdo by ji v Confluence nemohl otevřít.

## Kdo smí co

| Akce | Kdo |
|---|---|
| Navrhovat globální šablony, nastavit servisní účty, konfigurace aplikace | admini Confluence |
| Navrhovat šablony pro prostor | admini prostoru, pokud to [konfigurace aplikace](app-configuration.md#šablony-v-prostorech) dovoluje |
| Nastavení prostoru | admini prostoru |
| Vyzkoušet ukázku | admini Confluence kdekoli; admini prostoru ve svém prostoru |
| Spustit proces na stránce | podle šablony: kdokoli, kdo stránku vidí, kdokoli, kdo ji smí upravit, nebo jen vybraní lidé a skupiny. Admini prostoru vždy. |
| Předčasně ukončit proces | podle šablony (pravidlo platné ve chvíli, kdy běh začal). Admini prostoru vždy. |
| Vybrat větev, kliknout na **Pokračovat**, zadat termín | kdokoli, kdo stránku vidí |
| **Přesto pokračovat** | podle [nastavení prostoru](space-settings.md#kdo-smí-přesto-pokračovat); výchozí jsou admini prostoru |
| Vidět historii | kdokoli, kdo stránku vidí |
| Vidět přehled prostoru | každý v prostoru; stránky, které nemůže otevřít, se mu nevypíšou |
| Vidět panel v Jiře | kdokoli, kdo vidí ticket; stránka se jmenuje jen tomu, kdo ji smí otevřít |

## Tickety a přístup do Jiry

- Tickety se zakládají pod servisním účtem šablony, nebo pod LINA.
- Při publikaci šablony LINA ověří, že účet, pod kterým se tickety zakládají — i vy jako autor — je smí ve zvoleném projektu zakládat, a jmenovitě vypíše, co chybí.
- Za běhu chybějící přístup zastaví krok se srozumitelnou zprávou v panelu a v historii, nikdy potichu.

## Stránky s omezením

LINA pracuje jako uživatel s vlastním účtem. *Stránka s omezením zobrazení je pro LINA neviditelná*, dokud aplikaci někdo nedá přístup — stejně jako pro kteréhokoli jiného člověka. Na takové stránce LINA neukáže odznak, nespustí proces a nedostává události (takže pravidlo startu se nespustí).

Takhle Confluence chrání omezený obsah, není to chyba. Pokud LINA na stránkách s omezením potřebujete, přidejte aplikaci do omezení stránky.
