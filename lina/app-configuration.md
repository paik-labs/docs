# App configuration

Confluence admins configure LINA for the whole site in the LINA administration, tab **Configuration**. How to open the administration: [Getting started](getting-started.md#open-the-lina-administration).

## Allowed service accounts

A process creates its Jira tickets as the *service account* its template names, or as LINA itself when there is none. Templates can choose only from this list, so nobody can make LINA create tickets as an arbitrary person.

- Add accounts with **Add…**, remove them from the list.
- Empty list: templates have no service account and LINA creates the tickets.
- Only Confluence admins can set a template's service account.

Why a service account: tickets then show a real reporter, and the account's Jira permissions decide where tickets may be created. A template whose account is removed from the list cannot be published until it chooses another one.

## Templates in spaces

- **Space admins can create process templates for their space** — off: only the templates made in the administration are used. On: space admins design templates for their own space in *Space settings* → *Integrations* → LINA → **Process templates**.
- **Space admins may see and copy the global templates into their space** — they can never change a global template, only make their own copy.

## Pages purged from the trash

A page in the trash ends its process; the history stays. Once the page is purged from the trash, LINA deletes the process and its history after the time set in **Keep the process and its history for** — from **nothing — delete at once** to 12 months (default). LINA checks weekly.

Click **Save**.
