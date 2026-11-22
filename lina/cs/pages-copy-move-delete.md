# Kopírování, přesun a mazání stránek

| Co uděláte | Co se stane s procesem |
|---|---|
| Stránku *upravíte* | nic. Úprava proces nikdy neposune ani nezmění stav. |
| *Obnovíte starší verzi* | nic. Proces zůstává, kde je. |
| Stránku *přejmenujete* nebo *přidáte štítek* | nic. Proces se tím nikdy nespustí. |
| Stránku *zkopírujete* | kopie nemá proces ani stav. Výjimka: šablona nastavená na [start i u kopií](start-automatically.md) spustí na kopii nový běh. |
| Stránku *přesunete* v rámci prostoru | nic se nemění. |
| Stránku *přesunete* do jiného prostoru | běh jde se stránkou. Od té chvíle platí [nastavení](space-settings.md) nového prostoru (hotové tickety, kdo smí přesto pokračovat) a běh se ukazuje v přehledu nového prostoru. Historie přesun zaznamená. Přesun proces nikdy nespustí ani nerestartuje. |
| *Přesunete do koše* | proces skončí; historie zůstane. |
| *Obnovíte* z koše | stránka se vrátí bez běžícího procesu. Můžete ho spustit znovu. |
| *Vysypete* z koše | po době nastavené v [konfiguraci aplikace](app-configuration.md#stránky-vysypané-z-koše) LINA smaže proces i jeho historii. |

Smazání *šablony* stránky neovlivní: běžící procesy doběhnou podle verze, se kterou začaly.
