# Permissions

LINA follows Confluence and Jira permissions. It never shows a page to someone who could not open it in Confluence.

## Who may do what

| Action | Who |
|---|---|
| Design global templates, set service accounts, app configuration | Confluence admins |
| Design templates for a space | space admins, if the [app configuration](app-configuration.md#templates-in-spaces) allows it |
| Space settings | space admins |
| Try the sample | Confluence admins anywhere; space admins in their own space |
| Start a process on a page | as the template says: anyone who can see the page, anyone who can edit it, or only chosen people and groups. Space admins always. |
| End a process early | as the template says (the rule from the moment the run started). Space admins always. |
| Choose a branch, click **Continue**, enter a due date | anyone who can see the page |
| **Continue anyway** | as the [space settings](space-settings.md#who-may-continue-anyway) say; by default space admins |
| See the history | anyone who can see the page |
| See the space overview | everyone in the space; pages they cannot open are not listed |
| See the Jira panel | anyone who can see the ticket; the page is named only to those who can open it |

## Tickets and Jira access

- Tickets are created as the template's service account, or as LINA.
- When a template is published, LINA checks that the account creating tickets — and you, the author — may create them in the chosen project, and names what is missing.
- At run time, missing access stops the step with a clear message in the panel and history, never silently.

## Restricted pages

LINA works like a user with its own account. *A page with view restrictions is invisible to LINA* until someone gives the app access to it — the same as for any other person. On such a page LINA cannot show the badge, start a process, or receive events (so a start rule does not fire).

This is how Confluence protects restricted content, not an error. If you need LINA on restricted pages, add the app to the page restrictions.
