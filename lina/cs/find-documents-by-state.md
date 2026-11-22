# Hledání dokumentů podle stavu

LINA dělá [stav dokumentu](document-states.md) vyhledatelným v Confluence. K dispozici jsou tato pole:

| Pole | Hodnoty |
|---|---|
| `lina_state` | název stavu tak, jak mu říká šablona, například `Approved` |
| `lina_state_group` | `in_progress`, `valid`, `invalid` nebo `none` (LINA stránku zná, ale stav nemá) |
| `lina_run` | `running` nebo `ended` |
| `lina_process` | název šablony posledního běhu, například `Document lifecycle` |

## Kde hledat

1. *Rozšířené hledání v Confluence* — filtry *LINA document state* a *LINA state group*.
2. *CQL v adrese hledání:* `/wiki/search?cql=lina_state%20%3D%20%22Approved%22`
3. Makro [LINA documents](macros.md#lina-documents) — seznam na stránce bez psaní CQL. Fungují i jiná makra, která berou CQL.
4. *REST API* `GET /wiki/rest/api/search?cql=…` — pro skripty a Automation.

## Příklady

| Chci | CQL |
|---|---|
| dokumenty ve stavu *Approved* | `lina_state = "Approved"` |
| všechny platné dokumenty | `lina_state_group = "valid"` |
| všechny dokumenty, které už neplatí | `lina_state_group = "invalid"` |
| dokumenty, na kterých se pracuje | `lina_state_group = "in_progress"` |
| platné dokumenty v jednom prostoru | `space = "HR" AND lina_state_group = "valid"` |
| schválené dokumenty pod rodičovskou stránkou | `space = "HR" AND ancestor = 12345 AND lina_state = "Approved"` |
| platné dokumenty se štítkem | `lina_state_group = "valid" AND label = "policy"` |
| několik stavů | `lina_state IN ("Approved", "Published")` |
| neplatné, změněné za posledních 30 dní | `lina_state_group = "invalid" AND lastmodified > now("-30d")` |

## Dobré vědět

- Funguje jen přesná shoda: `lina_state = "Approved"`. Hledání „obsahuje“ (`~`) Confluence odmítne.
- Názvy stavů pocházejí ze šablon. Napříč šablonami je spolehlivější hledat podle skupiny.
- Hledání ukáže jen stránky, které hledající smí vidět.
- Po zkopírování stránky může hledání minutu dvě ukazovat starou hodnotu.
- Pole pro hledání jsou kopie stavu pro dohledání dokumentů. Vlastní rozhodnutí LINA je nikdy nepoužívají.
