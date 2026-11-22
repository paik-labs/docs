# Čtení stavu stránky (API)

Pro reporty, dashboardy a skripty můžete stav, proces a krok stránky číst běžným REST API Confluence. LINA vlastní endpoint nemá; oprávnění kontroluje Confluence.

```
GET /wiki/api/v2/pages/{pageId}/properties?key=lina_doc_state_b2587ea4
```

Hodnota je v `results[0].value`:

```json
{ "state": "In review", "group": "in_progress", "process": "Document lifecycle",
  "step": "Review", "running": true, "since": "2026-11-20T10:00:00.000Z" }
```

| Pole | Význam |
|---|---|
| `state` | název stavu dokumentu; chybí, když dokument stav nemá |
| `group` | `in_progress`, `valid`, `invalid` nebo `none` |
| `process` | název šablony posledního běhu na stránce |
| `step` | figura, kde běh je (v podprocesu: `Podproces › Figura`); jen dokud běží |
| `running` | `true`, dokud běh trvá; `false`, když skončil nebo stránka žádný nemá |
| `since` | během běhu: kdy dorazil do `step`; po skončení: kdy běh skončil (ISO-8601, UTC) |
| `run` | `running` nebo `ended` — totéž co `running`, ale jako text, aby šlo hledat (`lina_run`) |

## Dobré vědět

- Kdo stránku nevidí, dostane 404.
- Stránka bez této vlastnosti zatím proces nemá, nebo se její proces od zavedení tohoto pole nezměnil.
- Kopie stránky začíná s `{ "group": "none" }`.
- Hodnota je kopie zapisovaná po každé změně běhu. Lidé, kteří smí stránku upravovat, by ji technicky mohli přepsat. Používejte ji pro reporty, ne pro rozhodování.
- Klíč a názvy polí zůstanou, jak jsou; nová pole mohou přibýt.
- Chcete-li najít mnoho stránek, nejdřív hledejte ([Hledání dokumentů podle stavu](find-documents-by-state.md)) a detail pak čtěte tady.
