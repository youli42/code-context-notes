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
