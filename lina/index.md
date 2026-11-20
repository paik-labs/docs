<img src="assets/lina.svg" alt="LINA" width="64" height="64">

# LINA — documents that set work in motion

LINA gives a Confluence page a process. When the document reaches a certain point, LINA creates the work that follows from it in Jira, and the document does not move on until that work is done.

A typical example: a new policy page starts a process. LINA creates a review ticket in Jira for the reviewer. The page waits at *Review* until the ticket is done, then a person approves or returns it. The approved policy is valid for a year, then LINA creates a revision ticket.

You draw the process yourself, once, as a template. Every page that runs it follows the drawing.

## Find what you need

| I want to… | Read |
|---|---|
| see what LINA does in ten minutes, without setting anything up | [Getting started](getting-started.md) |
| understand the words: template, run, Condition, fork, gate, state | [How LINA works](concepts.md) |
| draw my own process | [Design a process template](design-a-template.md) |
| have new pages get a process by themselves | [Start a process automatically](start-automatically.md) |
| start a process on a page, see what it waits for, move it on | [Work with a process on a page](work-on-a-page.md) |
| let a document wait for a date, expire after a year, remind people | [Due dates and reminders](due-dates.md) |
| give documents states like *Draft*, *Approved*, *Retired* | [Document states](document-states.md) |
| see which documents are overdue, stuck or waiting in a space | [Space overview](space-overview.md) |
| move a document on although its ticket is not done | [Continue anyway](work-on-a-page.md#continue-anyway) |
| decide when a Jira ticket counts as done, who may continue anyway | [Space settings](space-settings.md) |
| know, from a Jira ticket, which document it belongs to | [LINA in Jira](jira.md) |
| put the process history, or a list of documents with their state, on a page | [Macros](macros.md) |
| find all approved or no longer valid documents | [Find documents by state](find-documents-by-state.md) |
| read a page's state from a script or report | [Read the state of a page (API)](read-api.md) |
| set up service accounts, templates in spaces, retention | [App configuration](app-configuration.md) |
| know who may do what | [Permissions](permissions.md) |
| know what happens when a page is copied, moved or deleted | [Copy, move and delete pages](pages-copy-move-delete.md) |
| start from a ready-made process (approval, proofreading, specification → Jira, decision record) | [Sample templates](examples.md#ready-made-sample-templates) |
| build a common process step by step | [Examples](examples.md#draw-it-yourself) |
| understand a message LINA shows | [Troubleshooting](troubleshooting.md) and [Publishing checks](reference/publish-checks.md) |

## Where LINA appears

| Where | What you do there | Who |
|---|---|---|
| The **LINA** badge next to a page title | start a process, see what it waits for, move it on, history | everyone who can see the page |
| Space sidebar → *Space apps* → LINA | [overview](space-overview.md) of processes in the space | everyone in the space |
| *Space settings* → *Integrations* → LINA | [space settings](space-settings.md) and space templates | space admins |
| *Confluence administration* → *Apps* → LINA | [templates](design-a-template.md), [configuration](app-configuration.md), [Get started](getting-started.md) | Confluence admins |
| The *Source document* panel on a Jira ticket | [which document a ticket belongs to](jira.md) | everyone who can see the ticket |

LINA works in English, Czech, German, French, Russian and Simplified Chinese, following the language in each user's Atlassian profile.
