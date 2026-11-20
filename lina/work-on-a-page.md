# Work with a process on a page

Everything happens in the **LINA** badge next to the page title. Click it to open the panel.

The badge shows where the document is:

| Badge | Meaning |
|---|---|
| *LINA* | no process runs on the page |
| *LINA · Review* | a process runs and is at the figure *Review* |
| *LINA · Approved* | no process runs; the document state is *Approved* |
| *LINA · In review · Review* | state *In review*, process at *Review* |

## Start a process

1. Click the badge.
2. In **Process to start**, choose a template. 🌐 marks a template for all spaces, 🗂️ a template of this space. Your space may have one preselected.
3. If the process needs due dates at the start, enter them.
4. Click **Start**.

The process enters its first figure; actions on the first line run right away (for example a ticket is created).

You see only templates you may start on this page. If the list is empty: *No process template you may start applies to this page.* — the templates are for other spaces, start only by a rule, or allow only some people. Ask the template owner.

## See what the document waits for

When the process is at a Condition or End that waits, the panel shows:

- every ticket created on the way, with its Jira status and a link; tickets that are not required are marked *(not required)*;
- how many required tickets are still open, for example *Cannot continue: 1 of 2 required tickets are not done.*;
- the due date, if it waits for one;
- *The process moves on by itself as soon as this holds.* — when no click is needed.

The process moves on by itself when a ticket changes in Jira, when someone opens the page, or at the daily check. Click **Check again** to look right now.

If a ticket cannot be read — *Not found in Jira, or LINA may not see it.* — the document waits. This happens when the ticket was deleted or moved to a project LINA cannot access. See [Troubleshooting](troubleshooting.md).

## Continue

If the figure waits for **A person confirms (clicks Continue)**, click **Continue** once everything else holds. If not everything holds, LINA refreshes the list and tells you what is missing.

## Choose how to continue

At a manual fork, the panel shows **Choose how to continue** with one button per branch, for example *Approve* and *Reject*. Some branches need a comment: write it and confirm. The comment goes to the history.

## Enter or change a due date

If the figure waits for a due date someone has to enter, the panel says *Waiting for someone to enter the due date.* Click **Enter the due date**, choose a date and **Save the date**. Later you can **Change the due date**. Tickets created on the way that copy the due date get the new date in Jira too. See [Due dates and reminders](due-dates.md).

## Continue anyway

Sometimes the work cannot be finished — the person responsible left, the ticket is no longer needed. People allowed in the [space settings](space-settings.md#who-may-continue-anyway) (by default the space admins) see **Continue anyway…**:

1. Click **Continue anyway…**.
2. Write why — this is required.
3. Click **Continue anyway**.

The history records your name and reason. The open tickets stay as they are in Jira.

Below a closed gate, the panel says who may continue anyway in this space, for example *Only space admins can continue before this holds.*

## End the process early

1. Click **End the process…**.
2. Write why — this is required.
3. If the template has document states, choose **Document state after ending**: keep the current one, set another one, or no state.
4. Click **End the process**.

LINA adds a comment to every open ticket of the run that the process ended. The tickets themselves are not closed.

The template decides who may end a process. If you may not: *The template of this process lets only some people end it.*

To use a different process on the page, end the running one and start the new one. A running process cannot be swapped.

## History

Click **Show history**. The newest entries are first; **More** loads older ones. Each entry says who did what and when — for example *started the process*, *created ticket DOC-12 (as the app)*, *continued Review anyway: author left the company*. Ticket keys link to Jira, e-mail entries link to the comment on the page.

Tick **Show every step (lines taken, reaching an end)** to see every line the process took.

The history stays after the process ends, and after the page is moved to the trash.

## View process flow

**View process flow** shows the drawing of the template the run follows, with the current figure highlighted (green while it waits normally, red when the process is stuck). After the run ends, **View the flow of the last run** shows where it ended. Zoom and drag to look around; nothing can be changed here.

## When the process is stuck

*The process is stuck: no line fits.* means an automatic fork found no line for the current document state. Ask the template owner — the template needs a line for that state or an *otherwise* line. The [space overview](space-overview.md) lists stuck documents under **Stuck**.

## After the process ends

The badge keeps the document state, if any. The panel says *The last process (…) is finished.* or *The last process (…) was ended: reason*, and offers to start a process again.
