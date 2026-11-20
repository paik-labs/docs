# Macros

LINA has two macros you can put on any page. Both only show information: they never start, move or end a process.

To insert one, edit the page, type `/LINA` and pick the macro. To change its settings, select the macro and click the pencil icon.

## LINA process history

Shows the history of the process on the page where the macro is — the same entries as **Show history** in the badge next to the title: who did what and when, with links to the Jira tickets.

| Setting | Choices |
|---|---|
| **Runs** | **The last run** (default) or **All runs on this page** |
| **Steps** | **Important steps only** (default) or **Every step** (lines taken, reaching an end) |
| **Rows per page** | 10, 25 or 50; **More** loads older entries |

Readers can still tick **Show every step (lines taken, reaching an end)** themselves. On a page without a process the macro says *No process has run on this page yet.* A copy of the page shows an empty history, because a copy does not take over the process.

## LINA documents

Lists pages with a LINA process — for example all valid policies of a space, or everything still in review below a handbook page.

| Setting | Choices |
|---|---|
| **Where** | **This space (or the space below)**, **Pages below this page**, **Pages below another page**, **The whole site** |
| **Space key (empty = this space)** | another space, for example `HR` |
| **Page ID or link (for "Pages below another page")** | paste the page link, or its ID |
| **Document state** | **Any**, **In progress**, **Valid**, **Not valid** — the [group](document-states.md) of the state |
| **Process** | **Running or ended**, or **Running only** |
| **Process name (exact; empty = any)** | the name of the template, exactly as it is written |

Columns: document, space (for the whole site), state, process · figure where the run is (or *ended*), and since when.

### Who sees what

The list is searched as the person reading the page. *Pages they may not read are not listed* — two readers can see different lists on the same page. There is no count of hidden pages.

### Things to know

- The list comes from Confluence search over the state LINA writes on each page ([Find documents by state](find-documents-by-state.md)). After a change it can take a minute or two to show.
- Pages whose process has not changed since this version of LINA show — instead of the process and figure, and **Running only** does not find them yet. They appear after their next step.
- Due dates and Jira tickets are not in this macro. For those, use the [space overview](space-overview.md).
