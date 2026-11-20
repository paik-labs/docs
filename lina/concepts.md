# How LINA works

## Template and run

A *template* is a process drawn in the LINA designer: figures joined by lines. Admins design and *publish* it. A published template is offered on pages, or starts by itself on new pages.

A *run* is one template running on one page. A page has at most one running process. The run follows the template *as it was published when the run started*: later changes to the template, or deleting it, do not change running processes.

A process starts only in two ways:

- *by hand* — someone picks a template on the page and clicks **Start**, or
- *by a rule of the template when a page is created* — see [Start a process automatically](start-automatically.md).

Adding a label, moving or renaming a page never starts, restarts or replaces a process.

## Figures

| Figure | What it does |
|---|---|
| **Start** | where the process begins. Every template has exactly one. |
| **Condition** | a stop. The document waits here until everything ticked holds — tickets done, a person confirms, a due date passed — then goes on along its one line. |
| **Manual fork** | a person chooses how to continue, for example *Approve* or *Reject*. A branch can require a comment. |
| **Automatic fork** | LINA chooses the way on by the [document state](document-states.md). |
| **Subprocess** | runs another template (of type *Subprocess*) inside this one, then goes on by itself. |
| **End** | the process ends here. An End can also wait, like a Condition, before it ends. |

## Actions on lines

Actions sit on lines, not on figures. They run when the process takes the line.

| Action | What it does |
|---|---|
| **Create ticket** | creates a Jira issue from a form loaded from Jira (project, issue type, fields of the create screen). The ticket links back to the page. A ticket can be *required*: then a Condition or End that waits for tickets does not let the document on until it is done. |
| **Send e-mail** | writes a comment on the page that mentions the chosen people; Confluence e-mails them. |
| **Set state** | sets the [document state](document-states.md), for example *Approved*. |

Texts of actions can contain placeholders such as `{page}` or `{due}` — see [Design a process template](design-a-template.md#placeholders).

## The gate

A Condition or End that waits is called a gate. LINA checks it *at the moment someone or something tries to move on*: it reads the tickets from Jira right then. If something is missing, the panel on the page says exactly what: which ticket is not done, which date has not passed.

- Without **A person confirms (clicks Continue)**, the process moves on by itself as soon as everything holds — when a ticket changes in Jira, when someone opens the page, or at the daily check.
- With it, a person clicks **Continue** once everything else holds.
- People named in the [space settings](space-settings.md) may **Continue anyway** with a reason, which goes to the history with their name.

When LINA cannot be sure — a ticket was deleted, Jira does not answer, a ticket was not created — the gate stays closed and says why.

## History

Every step goes to the run's history: who started the process, which line was taken, which tickets were created, who continued anyway and why. Automatic steps are recorded as **LINA**, together with the person who caused them (for example the author of a new page). See [Work with a process on a page](work-on-a-page.md#history).

## Where LINA keeps its data

LINA stores processes and their history in Atlassian's storage for the app, not in the page. The page carries only a copy of the current state, used for display and [search](find-documents-by-state.md). Editing the page or its properties does not change the process.
