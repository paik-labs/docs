# LINA in Jira

LINA needs no setup in Jira. It creates tickets from Confluence, and reads them when a document waits.

## Tickets created by a process

- A ticket is created by a **Create ticket** action on a line of the template — in the project, with the issue type and fields chosen in the [designer](design-a-template.md#create-ticket).
- It is created as the template's service account, or as LINA.
- It gets a link to the Confluence page.
- If the line leads to a figure with a due date, the ticket gets that *Due date* ([Due dates](due-dates.md#due-date-in-jira)).
- When a process is ended early, its open tickets get a comment saying so.

A *required* ticket holds the document until it is done. "Done" is a Jira status category set in the [space settings](space-settings.md#when-is-a-ticket-done) — by default *Done*. You close the ticket the normal Jira way; the document then moves on by itself.

## The Source document panel

Every ticket created by LINA has the panel *Source document* in Jira. It shows:

- **Created from the document** — link to the page,
- the process and where the document is now (*The document is at: Review*),
- the **Document state:**,
- the due date,
- what the ticket means for the document:
  - *Required: the document cannot go on while this ticket is open.*
  - *The document waits for this ticket — it goes on once the required tickets are done.*
  - *Accompanying ticket: the document does not wait for it.*
- whether the process is finished, ended, or a later run has started.

If you cannot open the page in Confluence, the panel does not name it: *This ticket was created by a LINA process on a Confluence page you cannot open.*

## Things to know

- Deleting a required ticket, or moving it where LINA cannot read it, keeps the document waiting. Someone allowed must [continue anyway](work-on-a-page.md#continue-anyway).
- LINA does not change Jira workflows and needs no Jira admin.
- Jira is optional. Without it, templates simply have no ticket actions.
