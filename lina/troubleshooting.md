# Troubleshooting

Messages that block publishing a template are listed in [Publishing checks](reference/publish-checks.md).

## On a page

### The template I want is not in the list.
*No process template you may start applies to this page.* Check in the designer: the template is published; its **Scope** includes this space; **Who may start and end this process** includes you; and if it starts **On a page event**, **Also allow a manual start** is ticked.

### The document does not move on although the ticket is done.
Click **Check again**. If the ticket is in a status that Jira puts in the category *In Progress* (for example "In review"), it does not count as done — ask a space admin to [tick that category](space-settings.md#when-is-a-ticket-done) or move the ticket to a *Done* status.

### Not found in Jira, or LINA may not see it.
The ticket was deleted, moved to another project, or the project's permissions changed. The document waits. Restore the ticket's access, or [continue anyway](work-on-a-page.md#continue-anyway).

### Jira did not create this ticket
The step went through, but the ticket was not created — the message says why (usually permissions or a mandatory field). The gate stays closed for the missing required ticket. Fix the template and [continue anyway](work-on-a-page.md#continue-anyway), or end the process and start again.

### Someone moved the process in the meantime.
Someone else clicked at the same time. The panel is refreshed; look and try again.

### The process is stuck: no line fits.
An automatic fork has no line for the current state. Ask the template owner to add one, or an *Otherwise branch*.

### You may not continue before this holds.
You are not among the people the [space settings](space-settings.md#who-may-continue-anyway) allow to continue anyway.

### The badge shows only "LINA" on a restricted page.
LINA cannot see restricted pages. See [Permissions](permissions.md#restricted-pages).

## In the designer

### Someone else saved this template in the meantime.
Reload the template before saving, otherwise you would overwrite their changes.

### Only a Confluence administrator can set or change the service account.
Ask a Confluence admin to set it, or leave **Service account** empty — LINA then creates the tickets.

### This subprocess cannot be deleted while another template uses it.
Remove it from the templates that use it first. The designer names them.

### The ticket form shows few projects or fields.
The form reads Jira with the rights of the template's service account (after **Save**), or LINA's when there is none. Projects the account cannot create issues in are not offered.

## Space settings

### LINA could not load the settings of this space.
Space settings open only for admins of that space.

### Personal spaces have no LINA settings.
The defaults apply there: tickets count as done in the *Done* category, space admins may continue anyway.

## Getting started

### You cannot create issues in that Jira project yourself
The sample creates its ticket only in a project where you can create issues. Choose another project, or tick **No Jira — run the sample without a ticket**.
