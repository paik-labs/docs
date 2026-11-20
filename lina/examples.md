# Examples

Each example says what to draw. For the details of each step, follow the links to [Design a process template](design-a-template.md).

## 1. Review, approval and yearly revision

*A new policy must be reviewed by a colleague in Jira. Only then can it be approved or returned — with a reason. An approved policy is valid for a year, then it needs a revision.*

The fastest way: **Copy** the bundled *Document lifecycle* — it is exactly this process. In the copy, select the two lines with a ticket, choose the Jira project and issue type, and publish.

To draw it yourself:

1. **Document states** tab: *Draft* (In progress), *In review* (In progress), *Approved* (Valid), *Revision due* (Valid), *Retired* (Not valid).
2. Figures, left to right:
   - Start
   - Condition *Draft* — **A person confirms (clicks Continue)**: the author says the draft is ready.
   - Condition *Review* — **All required tickets of this process are done**.
   - Manual fork *Approve?*
   - Condition *Approved* — **The due date has passed**, **Automatically**, **X days after the process gets here**, 365 days. Optionally a reminder 30 days before.
   - Condition *Expired* — **All required tickets of this process are done**.
   - Manual fork *Keep the document?*
   - End *Retired* — set the state *Retired*.
3. Lines and their actions:
   - Start → *Draft*: **Set state** *Draft*.
   - *Draft* → *Review*: **Create ticket** "Review {page}", **Required for approval (the gate waits for this ticket)**; **Set state** *In review*.
   - *Review* → *Approve?*
   - *Approve?* → *Approved*, label *Approve*: **Set state** *Approved*.
   - *Approve?* → *Draft*, label *Reject*, **Choosing this branch needs a comment**: **Set state** *Draft*.
   - *Approved* → *Expired*: **Create ticket** "Revise {page}", required; **Set state** *Revision due*.
   - *Expired* → *Keep the document?*
   - *Keep the document?* → *Draft*, label *Revise*.
   - *Keep the document?* → *Retired*, label *Retire*, comment required.
4. **Save**, **Publish**.

What people see: after approval the badge says *LINA · Approved · Approved*; in a year a revision ticket appears in Jira; a retired policy shows the banner **This document is no longer valid**.

## 2. A separate proofreading step

*Before a handbook goes to approval, a language editor proofreads it in a ticket of its own.*

1. **Create** → **Create subprocess**, name it *Proofreading*:
   - Start → End *Proofread*. Under **Ends when** tick **All required tickets of this subprocess are done**.
   - Line Start → *Proofread*: **Create ticket** "Proofread {page}", required.
   - **Save**, **Publish**.
2. In the main template, put a Subprocess figure before the approval and choose *Proofreading*. Optionally **When the subprocess ends, set the document state** to a state of your own, for example *Proofread*.
3. **Publish** the main template.

The badge shows *Proofreading › Proofread* while the editor works; when the ticket is done, the main process goes on by itself.

## 3. Every new procedure gets the process

*Every new page under "Procedures" labelled `procedure` should start the approval by itself. An old page that gets the label later should not.*

1. Open the template and select **Start**.
2. **How it starts** → **On a page event** → **Page created under a parent page**; **Space** and **Parent page** *Procedures*.
3. **And all of these hold** → **Add condition** → **Label** **is one of** `procedure`.
4. **Publish**.

New pages created with the label start the process. Adding the label to an existing page does nothing — that is intended. More in [Start a process automatically](start-automatically.md).

## 4. Someone left — move the document on

*The document waits for the ticket of a colleague who has left.*

A space admin (or someone named in the [space settings](space-settings.md#who-may-continue-anyway)) opens the page, clicks **Continue anyway…**, writes the reason — "Reviewer left the company, review done by J. Smith in the meeting on 3 March" — and confirms. The history keeps the name and reason. See [Continue anyway](work-on-a-page.md#continue-anyway).
