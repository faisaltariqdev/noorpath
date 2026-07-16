# Admin platform — public website preview mode

When visitors click **Live Demo** on [noorpath.online](https://www.noorpath.online) or **Open interactive lesson preview** in the homepage Noorani Qaida section, they are sent to:

```
https://admin.noorpath.online/admin/noorani-qaida?preview=public&source=website&section=lesson
```

## Expected admin behaviour

| Query param | Purpose |
|---|---|
| `preview=public` | Enable read-only marketing preview (no admin auth required for demo UX, or show limited guest view) |
| `source=website` | Analytics / attribution from public site |
| `section=lesson` | Open only the **Lesson** area (e.g. Alif lesson flow) |

## UI requirements

1. **Unlocked:** Lesson module / letter lesson screen (meet, hear, trace, play pattern as implemented in admin).
2. **Locked (visible but disabled):** Dashboard, full curriculum navigation beyond demo letter, progress persistence, certificates, parent/teacher admin tools, settings, billing, user profile edits.
3. Show a persistent banner: *“Preview mode — enrol for full access”* with link back to `https://www.noorpath.online/courses/noorani-qaida-online`.
4. Do not expose authenticated admin controls or student PII in preview mode.

## Implementation sketch (admin codebase)

```ts
const params = new URLSearchParams(window.location.search);
const isPublicPreview =
  params.get("preview") === "public" &&
  params.get("source") === "website";

if (isPublicPreview) {
  enableGuestLessonPreview({ section: params.get("section") ?? "lesson" });
  lockAllRoutesExcept(["/admin/noorani-qaida/lesson", "/admin/noorani-qaida/lesson/*"]);
}
```

## Public site constant

Defined in `src/lib/nooraniQaidaPlatform.ts` as `NOORANI_QAIDA_LIVE_PREVIEW_URL`.
