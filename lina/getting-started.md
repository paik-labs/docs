# Getting started

You can see the whole circle — a page that waits for a Jira ticket and moves on by itself when the ticket is done — in about ten minutes, without designing anything.

## Before you start

- LINA is installed for Confluence. Jira is optional: without it, the sample runs without a ticket.
- You are a Confluence admin, or an admin of the space where the sample goes.

## Open the LINA administration

Confluence admins: click the gear icon (*Confluence administration*) → in the sidebar under *Settings* expand *Apps* → **LINA**.

The administration opens on the **Get started** tab, next to **Templates** and **Configuration**. The *Get Started* link shown after installing the app leads to the same page.

Space admins without Confluence admin rights can start the sample from the [space overview](space-overview.md) of their own space instead: when nothing runs there yet, the overview offers it.

## Try it on a sample document

On **Get started**:

1. **Space for the sample page** — choose the space.
2. **Who creates the ticket in Jira** — **LINA (the app)**, or a service account if your admin [allowed one](app-configuration.md#allowed-service-accounts).
3. **Jira project for the ticket** — a project where you yourself may create issues. No Jira? Tick **No Jira — run the sample without a ticket**.
4. Click **Try it**.

LINA creates:

- a published template *Document lifecycle (sample)*, offered only in that space,
- a sample page, with you as the author,
- a running process on it, which has already created a review ticket and now waits at *Review*.

Click **Open the sample page**.

## What to look at

1. *The badge next to the page title* shows where the document is, for example *LINA · In review · Review*. Click it.
2. The panel lists the review ticket, its status in Jira and *1 of 1 required tickets are not done*. There is nothing to click: the page waits.
3. *Close the ticket in Jira* (move it to a *Done* status). Open the page again: the process has moved on by itself to *Approve?*, where a person chooses *Approve* or *Reject*.
4. Choose one. **Show history** tells who did what and when, including the ticket LINA created.
5. Open **View process flow** to see the drawing of the process and where the page is in it.
6. In the space sidebar, open *Space apps* → LINA to see the [space overview](space-overview.md).

## Next steps

- Make your own process: copy the bundled template *Document lifecycle* and adjust it — see [Design a process template](design-a-template.md) and the [Examples](examples.md).
- Let new pages get the process automatically: [Start a process automatically](start-automatically.md).
- Decide what counts as a done ticket and who may skip the wait: [Space settings](space-settings.md).

The sample is an ordinary page and template. Delete them when you no longer need them.
