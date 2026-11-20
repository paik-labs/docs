# Find documents by state

LINA makes the [document state](document-states.md) searchable in Confluence. Two fields are available:

| Field | Values |
|---|---|
| `lina_state` | the name of the state, as the template calls it, for example `Approved` |
| `lina_state_group` | `in_progress`, `valid`, `invalid`, or `none` (LINA knows the page, but it has no state) |
| `lina_run` | `running` or `ended` |
| `lina_process` | the name of the template of the last run, for example `Document lifecycle` |

## Where to search

1. *Confluence advanced search* — filters *LINA document state* and *LINA state group*.
2. *CQL in the search address:* `/wiki/search?cql=lina_state%20%3D%20%22Approved%22`
3. The [LINA documents](macros.md#lina-documents) macro — a list on a page without writing CQL. Other macros that accept CQL work too.
4. *The REST API* `GET /wiki/rest/api/search?cql=…` — for scripts and Automation.

## Examples

| I want | CQL |
|---|---|
| documents in the state *Approved* | `lina_state = "Approved"` |
| all valid documents | `lina_state_group = "valid"` |
| all documents that are no longer valid | `lina_state_group = "invalid"` |
| documents being worked on | `lina_state_group = "in_progress"` |
| valid documents in one space | `space = "HR" AND lina_state_group = "valid"` |
| approved documents under a parent page | `space = "HR" AND ancestor = 12345 AND lina_state = "Approved"` |
| valid documents with a label | `lina_state_group = "valid" AND label = "policy"` |
| several states | `lina_state IN ("Approved", "Published")` |
| invalid, changed in the last 30 days | `lina_state_group = "invalid" AND lastmodified > now("-30d")` |

## Things to know

- Only exact matches work: `lina_state = "Approved"`. A contains-search (`~`) is refused by Confluence.
- State names come from templates. Across templates, searching by the group is more reliable.
- Search shows only pages the searching person may see.
- After a page is copied, search can show the old value for a minute or two.
- The search fields are a copy of the state for finding documents. LINA's own decisions never use them.
