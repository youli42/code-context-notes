# Commands & Keyboard Shortcuts

## Keyboard shortcuts

| Command | Windows/Linux | Mac | Description |
|---|---|---|---|
| Add Note | `Ctrl+Alt+N` | `Cmd+Alt+N` | Add a note to the current line or selection |
| Delete Note at Cursor | `Ctrl+Alt+D` | `Cmd+Alt+D` | Delete the note at the cursor |
| Edit Note at Cursor | `Ctrl+Alt+A` | `Cmd+Alt+A` | Edit the note under the cursor; the comment editor is focused so you can type immediately |
| View Note History | `Ctrl+Alt+H` | `Cmd+Alt+H` | View a note's history |
| Refresh All Notes | `Ctrl+Alt+R` | `Cmd+Alt+R` | Refresh all note displays |

Inside the comment editor: **Bold** `Ctrl/Cmd+B`, **Italic** `Ctrl/Cmd+I`, **Inline code** `Ctrl/Cmd+Shift+C`, **Code block** `Ctrl/Cmd+Shift+K`, **Link** `Ctrl/Cmd+K`.

## Command Palette

All commands are available from the Command Palette (`Ctrl/Cmd+Shift+P`), prefixed **Code Notes:**.

### Notes

- **Add Note** — add a note to the selection or current line
- **Delete Note at Cursor**
- **Edit Note at Cursor** — open the note under the cursor in edit mode, with the caret already in the editor
- **View Note History**
- **Refresh All Notes**
- **Set Note Type / Tags / Priority…** — edit a note's [structured metadata](note-types-metadata.md)
- **Filter Notes by Type…** — filter the sidebar by type/tag
- **Toggle Expired Notes** — show or hide expired notes
- **Re-attach Note to Another File…** — point an existing note at a different file; content and history are kept, and the code is re-located by content hash
- **Re-attach All Notes in This File…** — batch form of the above for a whole file group in the sidebar (right-click the file node), for when the old file was renamed, moved or deleted
- **Migrate Notes to Relative Paths** — rewrite legacy absolute `**File:**` paths as workspace-relative so notes stay portable

### Sidebar

- **Refresh Sidebar**
- **Collapse All**

### Agents

- **Regenerate Exports (INDEX.json / AGENTS.md)** — force-regenerate the [agent exports](agents-and-mcp.md)

### Agent activity (audit mode)

- **Revert this agent change**
- **Open the note this entry refers to**
- **Truncate Audit Log**

### Pending agent proposals (queue mode)

- **Approve**
- **Reject**
- **Edit and approve**

### Formatting

- **Show Markdown Formatting Guide**

See the [Trust model](trust-model.md) guide for how the agent commands fit together.
