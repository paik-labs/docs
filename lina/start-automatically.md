# Start a process automatically

A template can start by itself when a page is *created* — in a space, or under a parent page — and the page meets conditions you set. Nobody has to click anything.

What never starts a process: adding a label later, moving a page, renaming it, or editing it. A page that already exists keeps what it has.

## Set it up

1. Open the template in the designer and select **Start**.
2. **How it starts** → **On a page event**.
3. **Event**:
   - **Page created** — any new page in the space, or
   - **Page created under a parent page** — then choose the **Parent page**. Tick **Direct children only** if pages deeper below should not count.
4. **Space** — choose the space.
5. **And all of these hold** — optional conditions, all must hold (**Add condition**):
   - **Label** **is one of** / **is none of** the labels you list,
   - **Title contains** one of the words,
   - **Author** is one of the people.
6. Optional:
   - **Also start on copies of a page** — a copy of a page counts as a new page.
   - **Also allow a manual start** — the template is also offered on other pages to start by hand. Without it, it starts only by the rule.
7. **Save** and **Publish**. The rule works from publishing on.

## What happens

- A new page that matches gets a running process within seconds. The history shows **LINA (rule)** as the one who started it, together with the person who created the page — for example *LINA (rule) started the process: the page was created by Ann Smith*.
- If the page already runs a process, nothing happens.
- Labels added while you write the page, before you publish it, count. A label added after publishing does not.
- The template's start permissions (**Who may start and end this process**) do not apply to the rule.

## Things to know

- A start rule cannot ask for a due date "when the process is started": nobody is there to enter it. Publishing tells you so; use another way to set the date ([Due dates](due-dates.md)).
- A template made in a space can start only on pages of that space.
- Pages that LINA cannot see (restricted pages) do not start a process — LINA does not even hear about them. See [Permissions](permissions.md#restricted-pages).
