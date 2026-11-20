# Read the state of a page (API)

For reports, dashboards and scripts you can read the state, process and step of a page with the standard Confluence REST API. LINA has no endpoint of its own; Confluence checks the permissions.

```
GET /wiki/api/v2/pages/{pageId}/properties?key=lina_doc_state_b2587ea4
```

The value is in `results[0].value`:

```json
{ "state": "In review", "group": "in_progress", "process": "Document lifecycle",
  "step": "Review", "running": true, "since": "2026-11-20T10:00:00.000Z" }
```

| Field | Meaning |
|---|---|
| `state` | name of the document state; missing when the document has none |
| `group` | `in_progress`, `valid`, `invalid` or `none` |
| `process` | template name of the last run on the page |
| `step` | figure where the run is (in a subprocess: `Subprocess › Figure`); only while it runs |
| `running` | `true` while the run goes on; `false` when it has ended or the page has none |
| `since` | while running: when it got to `step`; after the end: when the run ended (ISO-8601, UTC) |

## Things to know

- Someone who cannot see the page gets 404.
- A page without the property has no process yet, or its process has not changed since this field was introduced.
- A copy of a page starts with `{ "group": "none" }`.
- The value is a copy written after every change of the run. People who may edit the page could technically overwrite it. Use it for reports, not for decisions.
- The key and field names stay as they are; new fields may be added.
- To find many pages, search first ([Find documents by state](find-documents-by-state.md)), then read the detail here.
