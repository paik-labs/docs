# Examples

## Ready-made sample templates

LINA comes with five sample processes. Find them at the top of the template list in the designer, marked **Bundled**. You can **View** them and **Copy** them; the copy is your own template, which you finish and publish.

| Sample | Use it for | What it shows | After **Copy** |
|---|---|---|---|
| *Document lifecycle* | policies, guidelines: review, approval, yearly revision, retirement | the whole cycle with document states and a due date | choose the Jira project and issue type of the two tickets |
| *Procedure with proofreading* | handbooks, procedures that need a language check before approval | a [subprocess](design-a-template.md#subprocesses) with its own ticket | the subprocess *Proofreading* is copied too: choose the project and issue type in it, publish it first, then the procedure |
| *New procedures start by themselves* | every new page under a parent page gets the review without a click | a [start rule](start-automatically.md) with a label condition | select **Start**, choose the **Space** and **Parent page**; choose the project and issue type of the tickets |
| *Specification to Jira work* | specifications, change requests: approval creates the work | the approval creates the implementation ticket and the document waits until it is done | choose the project and issue type of the ticket |
| *Decision record* | decisions, ADRs, meeting decisions — no Jira needed | a decision stays in force until it is marked superseded | nothing — publish it as it is |

Then **Save** and **Publish**. If something is missing, publishing tells you what ([Publishing checks](reference/publish-checks.md)).

Change anything you like in the copy: names of figures and states, texts of tickets, due dates, who may start it. The samples themselves never change and never run.

### Document lifecycle

*Draft* (the author clicks **Continue**) → a required review ticket → *Review* → *Approve?*: *Approve* or *Reject* with a comment (back to *Draft*) → *Approved* for 365 days → a required revision ticket → *Expired* → *Keep the document?*: *Revise* (back to *Draft*) or *Retire* with a comment.

States: *Draft*, *In review*, *Approved*, *Revision due* (valid), *Retired* (not valid — readers see the banner **This document is no longer valid**).

### Procedure with proofreading

*Draft* → subprocess *Proofreading* (a required ticket "Proofread …"; over when it is done) → *Approve?*: *Approve* (ends as *Approved*) or *Return* with a comment (back to *Draft*).

While the editor works, the badge shows *LINA · Proofread · Proofreading › Proofread*. When the ticket is done, the procedure moves on by itself.

States: *Draft*, *In proofreading*, *Proofread*, *Approved*.

### New procedures start by themselves

Starts on every new page created under the parent page you choose, if the page has the label `procedure`. A required review ticket is created at once → *Review* → *Approve?*: *Approve* (ends as *Published*) or *Return* with a comment → *Rework* (the author clicks **Continue**) → a new review ticket → *Review* again.

Pages that get the label later, or are moved under the parent, do not start it — that is intended. To use other labels, edit the condition at **Start**.

States: *In review*, *Rework*, *Published*.

### Specification to Jira work

*Draft* (the author clicks **Continue**) → *Approve?*: *Approve* creates the ticket "Implement …" in Jira, or *Return* with a comment → *Implementation* waits until the ticket is done → ends as *Delivered*.

The ticket's [Source document panel](jira.md#the-source-document-panel) tells the implementer which specification it comes from. Add more **Create ticket** actions to the *Approve* line if one specification means several tickets.

States: *Draft*, *In implementation*, *Delivered*.

### Decision record

*Proposal* (the author clicks **Continue** when it is ready) → *Decide*: *Accept* (state *Decided*, a note is written as a comment on the page) or *Reject* with a reason (ends as *Rejected*) → *In force* until someone chooses *Mark as superseded* with a reason (ends as *Superseded*).

*Superseded* and *Rejected* are in the group **Not valid**, so readers see the banner and [search](find-documents-by-state.md) can tell valid decisions from old ones.

To e-mail people when a decision is accepted, select the *Accept* line, open the *Decision note* action and choose people under **Mention**.

## Draw it yourself

### Review, approval and yearly revision

The *Document lifecycle* sample, step by step:

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

### A separate proofreading step

1. **Create** → **Create subprocess**, name it *Proofreading*:
   - Start → End *Proofread*. Under **Ends when** tick **All required tickets of this subprocess are done**.
   - Line Start → *Proofread*: **Create ticket** "Proofread {page}", required.
   - **Save**, **Publish**.
2. In the main template, put a Subprocess figure before the approval and choose *Proofreading*. Optionally **When the subprocess ends, set the document state**.
3. **Publish** the main template.

### Every new procedure gets the process

1. Open the template and select **Start**.
2. **How it starts** → **On a page event** → **Page created under a parent page**; **Space** and **Parent page**.
3. **And all of these hold** → **Add condition** → **Label** **is one of** `procedure`.
4. **Publish**.

More in [Start a process automatically](start-automatically.md).

## Someone left — move the document on

*The document waits for the ticket of a colleague who has left.*

A space admin (or someone named in the [space settings](space-settings.md#who-may-continue-anyway)) opens the page, clicks **Continue anyway…**, writes the reason — "Reviewer left the company, review done by J. Smith in the meeting on 3 March" — and confirms. The history keeps the name and reason. See [Continue anyway](work-on-a-page.md#continue-anyway).
