# Relative Paths & Note Re-binding

## Epic: Storage & Portability

### User Story 1: Store note file paths relative to the workspace

**As a** developer who commits `.code-notes/` to a shared repository
**I want** each note's `**File:**` path stored relative to the workspace root
**So that** notes keep pointing at the right code after the repo is cloned to a different directory or machine

#### Tasks

- [x] Serialize workspace files relative to the workspace root with `/` separators
- [x] Resolve relative paths back to absolute paths on load
- [x] Keep reading legacy notes that stored absolute paths
- [x] Keep files outside the workspace absolute
- [x] Add a bulk migration for legacy notes
- [x] Unit tests for serialization, legacy reads, outside-workspace fallback and migration

#### Acceptance Criteria

- [x] New and edited notes store `**File:** src/app.ts`, never `C:\…\src\app.ts`
- [x] `loadNotes(absolutePath)` still returns the note after a round trip
- [x] A note written by an older version still loads unchanged
- [x] **Migrate Notes to Relative Paths** rewrites only convertible notes and reports counts
- [x] Legacy absolute paths match case-insensitively on Windows (`f:\…` vs `F:\…`)

### User Story 2: Re-attach an old note to a different code file

**As a** user migrating code into a new file
**I want** to point an existing note at another file
**So that** the note's content and full edit history survive the move

#### Tasks

- [x] Add `NoteManager.rebindNote(noteId, newFilePath, document?)`
- [x] Re-locate the annotated code in the target file by content hash
- [x] Clamp the old line range (and keep the original hash) when the code is absent
- [x] Move the note between per-file caches and refresh the sidebar/CodeLens
- [x] Add the **Re-attach Note to Another File…** command to the sidebar context menu
- [x] Unit tests for anchored, unanchored, deleted and agent-writer cases

#### Acceptance Criteria

- [x] Re-attaching keeps the note id, content and history
- [x] The note appears under the new file and disappears from the old one
- [x] The stored path of the re-attached note is relative to the workspace root
- [x] Re-attaching a deleted note is refused
- [x] The command is not available to agent writers

### User Story 3: Re-attach all notes of a file at once

**As a** user whose file was renamed, moved or deleted
**I want** to point every note attached to that file at a new file in one action
**So that** I do not have to re-attach 10–100 notes one by one

#### Tasks

- [x] Add `NoteManager.rebindNotesForFile(oldFilePath, newFilePath, document?)`
- [x] Share the file picker between the single and batch commands
- [x] Add **Re-attach All Notes in This File…** to the sidebar file-node context menu
- [x] Report total / re-anchored / kept-old-line counts
- [x] Unit tests for anchored, partially anchored and empty groups

#### Acceptance Criteria

- [x] A file group with N notes produces N re-attached notes under the new file
- [x] Notes whose code is missing are counted as unanchored, not dropped
- [x] Re-attaching a file with no notes reports zero instead of failing

### User Story 4: Do not create `.code-notes/` until there is a note

**As a** developer who installed the extension once
**I want** the storage folder to appear only when I actually write a note
**So that** unrelated workspaces are not polluted with an empty `.code-notes/`

#### Tasks

- [x] Stop creating the storage directory during activation
- [x] Skip export regeneration (and directory creation) when the workspace has no notes
- [x] Report that skip as `skipped` instead of writing empty `INDEX.json`/`AGENTS.md`
- [x] Stop mirroring agent settings into a workspace that has no storage directory
- [x] Keep creating the directory, and its self-ignoring `.gitignore`, on the first note write

#### Acceptance Criteria

- [x] Opening a workspace without notes leaves no `.code-notes/` behind
- [x] Running **Regenerate Exports** in such a workspace writes nothing and says so
- [x] Changing an agent setting in such a workspace writes nothing
- [x] Saving the first note creates the directory, the `.gitignore` and the exports

### User Story 5: Keyboard-first editing

**As a** user editing notes frequently
**I want** a shortcut that opens the note under the cursor in edit mode with the caret already in the editor
**So that** I can start typing without reaching for the mouse

#### Tasks

- [x] Add **Edit Note at Cursor** (`Ctrl+Alt+A` / `Cmd+Alt+A`, `editorTextFocus`)
- [x] Ensure enabling edit mode moves focus into the comment editor
- [x] Keep the same focus behaviour for the comment toolbar's edit action

#### Acceptance Criteria

- [x] The shortcut edits the note on the cursor line instead of creating a new one
- [x] With no note on that line, a message says so instead of failing silently
- [x] After the shortcut, typing goes straight into the note editor

### User Story 6: Adding a note from the keyboard focuses its input

**As a** user adding notes with `Ctrl+Alt+N`
**I want** the caret to land in the note input
**So that** I can type the note without clicking it first

#### Tasks

- [x] Reproduce the focus difference against the gutter **+** button (VS Code's native add-comment flow)
- [x] Route the shortcut through `workbench.action.addComment` when the cursor line has no note
- [x] Keep the extension's own thread editor for a second note on the same line and for selections

#### Acceptance Criteria

- [x] `Ctrl+Alt+N` on a line without notes puts the caret in the note input
- [x] Typing right after the shortcut edits the note, not the code
- [x] Adding a second note to a line that already has notes still works
- [x] Adding a note over a multi-line selection still covers the selection
