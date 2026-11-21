# Design a process template

Templates are designed by Confluence admins in the LINA administration (tab **Templates**), and — if the app configuration allows it — by space admins for their own space (*Space settings* → *Integrations* → LINA → **Process templates**). The designer is the same in both places.

The quickest start is a copy of a [sample template](examples.md#ready-made-sample-templates): select one marked **Bundled** and click **Copy** (the two-sheet icon). Then change what you need.

## The designer at a glance

- *Left:* the list of templates. **Create** → **Create process** or **Create subprocess**. Each template has icon buttons for **View** (eye), **Edit** (pencil), **Copy** (two sheets) and **Delete** (bin); hover over an icon to see its name.
- *Middle:* the canvas, with the **Objects** palette.
- *Right:* **Selected object** — the properties of the figure or line you clicked.
- *Top:* **Save** (keeps a draft) and **Publish** (checks the template and freezes it as a new version). Tabs **Document states** and **Administration** belong to the open template.

Each column can be folded to get more room for the canvas.

## Create a template

1. **Create** → **Create process**.
2. Enter **Name** (unique) and optionally **Description**.
3. **Scope**: **Global** (offered in every space) or **Selected spaces**.
4. The template starts with a **Start** figure. Add figures and lines, then **Save**.

## Add figures

Drag a figure from the **Objects** palette onto the canvas. Hover over an object in the palette to see what it is for. The last icon in the palette header switches between pictures and **Text only**. New figures get a name like *Condition 1*; rename them in **Selected object** — the name is what people see on the page (*LINA · Review*).

| In the palette | Figure |
|---|---|
| **Condition (waits, then goes on)** | waits for tickets, a person or a due date |
| **Manual fork** | a person chooses the branch |
| **Automatic fork** | the branch follows the document state |
| **Branch end** | an End |
| **Subprocess (choose template)** | runs a subprocess template; saved subprocesses are also listed by name under *Subprocesses* |

To delete a figure or line, select it and press Delete (or **Delete** in the panel). Start cannot be deleted.

## Draw lines

1. In the header of the **Objects** palette, click the line icon (**Draw a line**, two dots joined by a line).
2. Click a figure, then another. A line joins them.
3. After one line the designer goes back to moving and selecting (the hand icon, **Move and select**). For the next line, click the line icon again. Esc cancels.

You can also drag from the dot on a figure's edge to another figure. Esc or a click on an empty spot cancels a half-drawn line.

Start, a Condition and a Subprocess have *one* line out. If you draw a second line from a Condition, LINA inserts a **Manual fork** after it, and both lines go from the fork.

## Set what a Condition or End waits for

Select the figure. Under **Goes on when** (or **Ends when** for an End) tick any of:

- **All required tickets of this process are done** — every ticket created as *required* on the way so far. "Done" means a Jira status category chosen in the [space settings](space-settings.md) (by default *Done*).
- **A person confirms (clicks Continue)**
- **The due date has passed** — then set **Where the due date comes from**, see [Due dates and reminders](due-dates.md).

All ticked must hold. Without **A person confirms (clicks Continue)**, the process moves on by itself as soon as they do.

An End with nothing ticked ends the process as soon as it gets there. An End in a subprocess must wait for something — that says when the subprocess is over.

## Forks

*Manual fork:* each line out needs a label — select the line and fill **Condition (shown above the line)**, for example *Approve*. People see the labels as choices on the page. Tick **Choosing this branch needs a comment** where a reason is needed, for example for *Reject*.

*Automatic fork:* set **Branches by** to **Document state**. Each line out is **For the document state** of one state; mark one line **Otherwise branch** for all the other states and for a document without a state. The template needs [document states](document-states.md) first.

> In this version, an automatic fork can branch only by the document state. The option **Yes / no** cannot be published yet.

Lines may lead back to an earlier figure, for example *Reject* back to *Draft*. The process then starts a new round there.

## Add actions to a line

1. Pick an action in the palette (**Create ticket**, **Send e-mail**, **Set state**) and click a line. Or select the line and use **Add** under **Actions on this line**.
2. Fill the action in **Selected object**.

Actions on the first line (from Start) run when the process starts.

### Create ticket

1. **Find project**, then choose **Project** and **Issue type**. LINA loads the fields of the create screen from Jira.
2. Fill **Summary**, **Description** and any mandatory fields.
3. Tick **Required for approval (the gate waits for this ticket)** if the document must wait for it.
4. **Copy the due date of the figure this line leads to into the ticket's Due date** is on by default — see [Due dates](due-dates.md#due-date-in-jira).

Tickets are created as the template's **Service account** (see [Administration](#administration)), or by LINA itself when there is none.

### Send e-mail

Write **Text** and choose people under **Mention**. LINA writes the text as a comment on the page mentioning them; Confluence sends the e-mail.

### Set state

Choose the **State**. See [Document states](document-states.md).

### Placeholders

In ticket fields and e-mail texts you can write:

| Placeholder | Filled with |
|---|---|
| `{page}` | page title |
| `{link}` | link to the page |
| `{user}` | who made the step |
| `{date}` | today |
| `{process}` | template name |
| `{step}` | where this line leads |
| `{due}` | due date |

## Subprocesses

A subprocess is a template of type **Subprocess** (**Create** → **Create subprocess**). Use it for a part that repeats in several processes, for example a language review with its own ticket.

- In the main process, add a Subprocess figure and choose the template.
- The subprocess starts by itself when the process gets there; when its End holds, the main process goes on by itself.
- A subprocess cannot contain another subprocess.
- When a subprocess ends, it can set the document state (**When the subprocess ends, set the document state**).
- On the page, the badge shows where the run is inside the subprocess, for example *Language review › Proofreading*.

## Administration

Tab **Administration** of a template:

- **Service account** — the account that creates the tickets. Only Confluence admins can set it, and only from the [allowed list](app-configuration.md#allowed-service-accounts). Without it, LINA creates the tickets.
- **Who may start and end this process** — for **Start** and **End** separately: **Anyone who can see the page**, **Anyone who can edit the page**, or **Only these people and groups**. Space admins may always start and end. People who may not start a template do not see it on the page. This applies after **Save**, without publishing.

## Save and publish

- **Save** keeps a draft. Pages still use the last published version.
- **Publish** checks the saved template and freezes it as a new version. If something is missing, LINA lists what and where — for example *The line "Manual fork 1 → End" from the manual fork needs a label.* All checks are listed in [Publishing checks](reference/publish-checks.md).
- Publishing also checks access in Jira: that the account creating tickets may create them in the project, that the issue type exists, and that mandatory fields are filled. It names what is missing.
- If someone else saved the template in the meantime, LINA refuses to overwrite it — reload first.

Runs that already started keep the version they started with.

## Copy and delete

- **Copy** makes a new draft template with the same drawing and states. The service account is not copied.
- **Delete** removes the template. Running processes finish by the copy they started with. A subprocess template that another template uses cannot be deleted.

## Sample templates

The list starts with ready-made samples marked **Bundled**: *Document lifecycle*, *Procedure with proofreading* (with its subprocess *Proofreading*), *New procedures start by themselves*, *Specification to Jira work* and *Decision record*. You can only view and copy them. What each is for and what to fill in after **Copy**: [Examples](examples.md#ready-made-sample-templates).

Copying a sample that uses a subprocess copies the subprocess too, and the copy points at the copied subprocess. Publish the subprocess first.
