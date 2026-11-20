# Copy, move and delete pages

| You do | What happens to the process |
|---|---|
| *Edit* the page | nothing. Editing never moves a process on or changes the state. |
| *Restore an older version* | nothing. The process stays where it is. |
| *Rename* the page or *add a label* | nothing. It never starts a process. |
| *Copy* the page | the copy has no process and no state. Exception: a template set to [start on copies](start-automatically.md) starts a new run on the copy. |
| *Move* the page within the space | nothing changes. |
| *Move* the page to another space | the run goes with the page. From then on the new space's [settings](space-settings.md) apply (done tickets, who may continue anyway) and the run shows in the new space's overview. The history records the move. A move never starts or restarts a process. |
| *Move to the trash* | the process ends; the history stays. |
| *Restore* from the trash | the page comes back without a running process. You can start one again. |
| *Purge* from the trash | after the time set in the [app configuration](app-configuration.md#pages-purged-from-the-trash), LINA deletes the process and its history. |

Deleting a *template* does not affect pages: running processes finish by the version they started with.
