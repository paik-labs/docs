# Due dates and reminders

A Condition or End can wait for a due date: **The due date has passed**. Use it for "valid for a year", "review by the end of the quarter" or "wait two weeks before publishing".

## Where the due date comes from

Select the Condition or End in the designer, tick **The due date has passed**, then choose under **Where the due date comes from**:

**Automatically**

- **On a fixed date** — a calendar date.
- **X days after the process starts**
- **X days after the process gets here** — for example 365 for "valid for a year after approval".

**Manually (a person enters it)**

- **Entered when the process is started** — whoever starts the process enters the date before **Start**. Not available for templates that [start automatically](start-automatically.md).
- **Entered when the process gets here** — the people under **Who is asked (e-mail)** get an e-mail asking for the date. Anyone who opens the page can then enter it. Until then the document waits.

The due date can be combined with other conditions, for example "the tickets are done *and* the due date has passed".

## What happens on the due date

LINA runs a *daily check*. When a due date has passed and nothing else is missing, the check moves the process on — and the actions on the next line run, for example a revision ticket is created. If the figure also waits for **A person confirms (clicks Continue)**, the check does not move it; a person clicks **Continue**.

The daily check runs once a day at a time set by Atlassian, not at midnight. A document can therefore move on up to a day after its due date. Opening the page moves it on at once.

The check is safe to repeat: a ticket is never created twice.

## Reminders

Under **Remind this many days before (empty = no reminder)** enter a number of days, and choose **Who gets the reminder e-mail**. LINA writes a comment on the page mentioning them, once, that many days before the due date. Confluence e-mails them.

## Due date in Jira

A **Create ticket** action on a line that leads into a figure with a due date copies that date into the ticket's *Due date* — option **Copy the due date of the figure this line leads to into the ticket's Due date** (on by default).

- If the date is entered only later, LINA writes it into the tickets then, and again when it changes.
- If the issue type has no *Due date* on its create screen, the designer warns you. Jira may refuse it; the history then says so and the ticket still counts.

## See what is due

The [space overview](space-overview.md) has **Overdue**, **Due soon** (next 14 days) and **No due date**. The [Jira panel](jira.md) shows the due date on each ticket.
