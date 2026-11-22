# Konfigurace aplikace

Admini Confluence nastavují LINA pro celý site v administraci LINA, na záložce **Konfigurace**. Jak administraci otevřít: [Začínáme](getting-started.md#jak-otevřít-administraci-lina).

## Povolené servisní účty

Proces zakládá tickety v Jiře pod *servisním účtem*, který určuje jeho šablona, nebo pod samotnou LINA, když šablona žádný neurčuje. Šablony smí vybírat jen z tohoto seznamu, takže nikdo nedonutí LINA zakládat tickety pod libovolným člověkem.

- Účty přidáte tlačítkem **Přidat…** a ze seznamu je zase odeberete.
- Prázdný seznam: šablony servisní účet nemají a tickety zakládá LINA.
- Servisní účet šablony smí nastavit jen admini Confluence.

Proč servisní účet: tickety pak mají skutečného zadavatele a o tom, kde smí vznikat, rozhodují oprávnění toho účtu v Jiře. Šablonu, jejíž účet ze seznamu zmizí, nejde publikovat, dokud nezvolí jiný.

## Šablony v prostorech

- **Admini prostorů smí vytvářet šablony procesů pro svůj prostor** — vypnuto: používají se jen šablony vytvořené v administraci. Zapnuto: admini prostorů navrhují šablony pro svůj prostor v *Space settings* → *Integrations* → LINA → **Šablony procesů**.
- **Admini prostorů vidí globální šablony a smí si je zkopírovat do svého prostoru** — globální šablonu nikdy nezmění, jen si udělají vlastní kopii.

## Stránky vysypané z koše

Stránka v koši svůj proces ukončí; historie zůstává. Když se stránka z koše vysype, LINA smaže proces i jeho historii po době nastavené v **Proces a jeho historii držet** — od **vůbec — smazat hned** po 12 měsíců (výchozí). LINA to kontroluje jednou týdně.

Klikněte na **Uložit**.
