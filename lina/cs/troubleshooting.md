# Řešení potíží

Hlášky, které blokují publikaci šablony, jsou vypsané v [Kontrolách při publikaci](reference/publish-checks.md).

## Na stránce

### Šablona, kterou chci, v seznamu není.
*Na tuto stránku se nevztahuje žádná šablona, kterou smíte spustit.* Zkontrolujte v návrháři: šablona je publikovaná; její **Rozsah** zahrnuje tento prostor; **Kdo smí tento proces spustit a ukončit** zahrnuje vás; a pokud startuje **Při události stránky**, je zaškrtnuté **Dovolit i ruční spuštění**.

### Dokument se neposune, i když je ticket hotový.
Klikněte na **Zkontrolovat znovu**. Pokud je ticket ve stavu, který Jira řadí do kategorie *In Progress* (například „In review“), za hotový se nepočítá — požádejte admina prostoru, ať [tu kategorii zaškrtne](space-settings.md#kdy-je-ticket-hotový), nebo ticket přesuňte do stavu kategorie *Done*.

### V Jiře nenalezen, nebo ho LINA nesmí vidět.
Ticket byl smazán, přesunut do jiného projektu, nebo se změnila oprávnění projektu. Dokument čeká. Vraťte ticketu přístup, nebo [přesto pokračujte](work-on-a-page.md#přesto-pokračovat).

### Jira tento ticket nezaložila
Krok proběhl, ale ticket nevznikl — hláška řekne proč (obvykle oprávnění nebo povinné pole). Brána zůstane kvůli chybějícímu povinnému ticketu zavřená. Opravte šablonu a [přesto pokračujte](work-on-a-page.md#přesto-pokračovat), nebo proces ukončete a spusťte znovu.

### Mezitím proces posunul někdo jiný.
Někdo jiný klikl ve stejnou chvíli. Panel se obnovil; podívejte se a zkuste to znovu.

### Proces uvízl: nehodí se žádná čára.
Automatické rozcestí nemá čáru pro aktuální stav. Požádejte vlastníka šablony, ať ji doplní, nebo přidá *Větev „jinak“*.

### Dřív, než tohle platí, pokračovat nesmíte.
Nepatříte mezi lidi, kterým [nastavení prostoru](space-settings.md#kdo-smí-přesto-pokračovat) dovoluje přesto pokračovat.

### Odznak na stránce s omezením ukazuje jen „LINA“.
LINA stránky s omezením nevidí. Viz [Oprávnění](permissions.md#stránky-s-omezením).

## V návrháři

### Mezitím šablonu uložil někdo jiný.
Před uložením šablonu znovu načtěte, jinak byste jeho změny přepsali.

### Servisní účet smí nastavit nebo změnit jen administrátor Confluence.
Požádejte admina Confluence, ať ho nastaví, nebo nechte **Servisní účet** prázdný — tickety pak zakládá LINA.

### Tento podproces nejde smazat, dokud ho používá jiná šablona.
Nejdřív ho odeberte ze šablon, které ho používají. Návrhář je vyjmenuje.

### Neznámý uživatel
Confluence pro člověka vybraného v šabloně nevrátil jméno — obvykle jde o smazaný nebo deaktivovaný účet. Člověka odeberte (×) a vyberte někoho jiného. Po najetí myší na jméno uvidíte ID účtu.

### Formulář ticketu ukazuje málo projektů nebo polí.
Formulář čte Jiru s právy servisního účtu šablony (po **Uložit**), nebo s právy LINA, když šablona žádný nemá. Projekty, kde účet nesmí zakládat issues, se nenabízejí.

## Nastavení prostoru

### LINA nemohla načíst nastavení tohoto prostoru.
Nastavení prostoru se otevře jen adminům toho prostoru.

### Osobní prostory nemají nastavení LINA.
Platí tam výchozí hodnoty: tickety se počítají jako hotové v kategorii *Done*, přesto pokračovat smí admini prostoru.

## Začínáme

### V tomto projektu Jiry sami nemůžete zakládat tickety
Ukázka zakládá ticket jen v projektu, kde smíte zakládat issues. Vyberte jiný projekt, nebo zaškrtněte **Bez Jiry — ukázka bez ticketu**.
