# Security Specification & Threat Model (TDD)

## 1. Data Invariants
- **Leads Collection (`/leads/{leadId}`)**:
  - Open for public creation (unauthenticated) to allow leads from prospective clients.
  - Read, Update, and Delete are restricted to authenticated administrators, or disallowed entirely by default.
  - Properties must adhere strictly to the JSON schema: `id`, `name`, `email`, `phone`, `serviceRequired`, `createdAt`, `status` must be valid types with length boundaries.
- **Subscribers Collection (`/subscribers/{subscriberId}`)**:
  - Open for public creation (unauthenticated) to allow user subscription.
  - Read, Update, and Delete are restricted or disallowed.
  - Properties must contain `email` and `subscribedAt`.

## 2. The "Dirty Dozen" Payloads (Targeting Firestore Rules)

### Payload 1: Lead Identity Spoofing (Public Read)
- **Action**: Read a draft of a lead document as a random or unauthenticated visitor.
- **Result**: `PERMISSION_DENIED`

### Payload 2: Subscriber Hijack (Public Modify)
- **Action**: Public unauthenticated user attempting to modify another subscriber email.
- **Result**: `PERMISSION_DENIED`

### Payload 3: Lead Overwrite Status (State Shortcutting)
- **Action**: Malicious actor posting check-in with `status: "completed"` directly during create, shortcutting verification.
- **Result**: `PERMISSION_DENIED` (Create must restrict initial status strictly to `"new"`)

### Payload 4: ID Poisoning (Length Exploit)
- **Action**: Sending an incredibly long document ID to crash parsing index.
- **Result**: `PERMISSION_DENIED` (Document ID length must be bounded <= 128 characters)

### Payload 5: Lead Value Poisoning (Giant Key)
- **Action**: Attempting to set `name` to a 10MB text string.
- **Result**: `PERMISSION_DENIED` (Strings must be bounded <= 1000 characters)

### Payload 6: Spoofed Timestamp
- **Action**: Forging `createdAt` with a timestamp from 2020.
- **Result**: `PERMISSION_DENIED` (Must strictly equal `request.time`)

### Payload 7: Ghost Fields (Shadow Fields)
- **Action**: Creating a lead containing unrequested properties (e.g., `isAdmin: true`).
- **Result**: `PERMISSION_DENIED` (Strictly enforces key size and valid keys)

### Payload 8: Direct Admin Setup Bypass
- **Action**: Creating a document under `/admins/{adminId}` directly to gain administrative permissions.
- **Result**: `PERMISSION_DENIED` (Write to admins is locked or strictly restricted)

### Payload 9: Subscriber Field Poisoning
- **Action**: Subscribing with a non-email string.
- **Result**: `PERMISSION_DENIED`

### Payload 10: Anonymous Read Queries
- **Action**: Public wildcard subscription list harvesting.
- **Result**: `PERMISSION_DENIED`

### Payload 11: Lead Delete Attack
- **Action**: Attempting to delete arbitrary leads as a visitor.
- **Result**: `PERMISSION_DENIED`

### Payload 12: Lead status transition bypass
- **Action**: Public user attempting to upgrade a lead's status to `"contacted"` directly.
- **Result**: `PERMISSION_DENIED`

---

## 3. The Rules Schema Concept
`DRAFT_firestore.rules` implements the specifications described above and is verified by compiling the standard Firestore config.
