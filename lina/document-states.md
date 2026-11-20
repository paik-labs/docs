# Document states

A document state says what the document *is*: *Draft*, *Approved*, *Revision due*, *Retired*. It is separate from where the process is, and it *stays after the process ends* — an approved policy stays *Approved* although nothing runs on it.

## Define states in a template

Open the template's **Document states** tab:

1. **Add state** and enter its **Name**.
2. Choose its **Group**:
   - **In progress** — being written or reviewed,
   - **Valid** — people may rely on it,
   - **Not valid** — expired, withdrawn, replaced.
3. Order the states with **Move up** / **Move down**. **Remove** works only for a state the process does not use.

The group lets LINA treat states of different templates alike: the space overview and [search](find-documents-by-state.md) can show "all valid documents" whatever each template calls its states.

## Change the state

- **Set state** action on a line — the state changes when the process takes the line.
- On an **End**: **When the process ends here, set the document state**.
- On a **Subprocess**: **When the subprocess ends, set the document state**.
- When someone ends a process early, they choose **Document state after ending**.

The state changes only through the process. Editing the page does not change it.

## Branch by state

An **Automatic fork** with **Branches by** = **Document state** takes the line for the current state. Mark one line **Otherwise branch** for states without their own line. See [Design a process template](design-a-template.md#forks).

## Where people see the state

- The badge next to the page title: *LINA · Approved*.
- The page panel: **Document state:** in colour by group.
- **Documents by state:** in the [space overview](space-overview.md).
- The [Jira panel](jira.md) of every ticket created from the document.
- Confluence search: `lina_state = "Approved"` — see [Find documents by state](find-documents-by-state.md).

## Documents that are no longer valid

A page whose state is in the group **Not valid** shows its readers a banner above the content: **This document is no longer valid**, with the state and process. Readers can **Dismiss** it. Use it so nobody follows a retired procedure by mistake.

## Copied pages

A copy of a page does not take over the state or process. It starts without a state — unless a template [starts automatically on copies](start-automatically.md).
