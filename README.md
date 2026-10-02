# DesignCanvas — Local AI Design Conversion & Remix

DesignCanvas is a personal, local-only Next.js (App Router, strict TypeScript) application that converts flat UI design images (PNG, JPG, WebP) into editable canvas layers, and allows you to **remix** multiple reference designs into a brand-new cohesive design by selectively extracting specific design aspects (Layout Skeleton, Typography, Components, Theme/Colors, Content, Style).

It runs **entirely on your local machine** with zero paid API requirements by default, leveraging your signed-in Antigravity CLI (`agy`) as the intelligent vision engine.

---

## Key Capabilities

### 1. Mode A: Convert
- Upload a single flat screenshot or design mock.
- Server-side Sharp image analysis and AI layer decomposition.
- Extracts background color, text layers, shapes, image elements, and color tokens.
- Generates an editable canvas design with pixel-accurate bounds, font scales, and real-pixel sampled colors.

### 2. Mode B: Remix
- Upload 2 to 6 reference images.
- Assign **semantic roles** to each reference:
  - **BASE** (exactly 1 required): defines layout skeleton, artboard dimensions, grid rhythm, and section flow.
  - **TYPOGRAPHY**: extracts font families, weights, type scales, and line heights; applies them by semantic role (`heading`, `subheading`, `body`, `cta`, `label`, `nav-item`, `caption`).
  - **COMPONENTS**: detect specific components (`navbar`, `hero`, `card`, `button`, `form`, etc.); pick which ones to swap into the base design with preview thumbnails.
  - **THEME (COLORS)**: extracts color usage and roles (`primary`, `secondary`, `accent`, `surface`, `background`, `border`); remaps layer fills and canvas background.
  - **CONTENT**: maps copy and text strings onto destination text layers matching semantic roles.
  - **STYLE**: applies corner radii, shadow styles, and border finishes.
- **Conflict Resolution**: When multiple references claim the same role, priority controls determine the winning source (or later-ordered reference wins by default).
- **Free-text Instructions**: Optional tuning prompt (e.g. "Use a dark theme", "make cards more spacious").
- **Deterministic Post-processing**:
  - Auto text-fitting and wrapping calculations to prevent overflow.
  - WCAG AA contrast verification (4.5:1 ratio for normal text, 3:1 for large/bold text) with automatic luminance correction.
  - Layer clamping and overlap collision avoidance.
- **Recompose**: Cached DesignDNA is reused on disk (indexed by SHA-256) so you can tweak roles or instructions with zero re-extraction delay.

### 3. Canvas Editor
- Built on `react-konva` (lazy-loaded with zero SSR).
- Zoom & pan (mouse wheel, pan tool, fit-to-screen).
- Multi-select marquee and selection handles (resize, rotate) with snapping guides.
- Double-click inline text editing with dynamic Google Fonts loading.
- Layers panel: drag to reorder z-index, visibility/lock toggles, rename, duplicate, delete.
- Properties panel: inspect transform coordinates, styling, opacity, and token bindings.
- Token-aware editing: editing a global token (e.g. Primary Color or Heading Font) updates all bound layers automatically.
- Side-by-side **Sources comparison drawer**: view your reference images right next to your active canvas.
- Undo/redo with full history stack and keyboard shortcuts (`Cmd+Z`, `Cmd+Shift+Z`, `Cmd+D`, `Delete`, arrow keys to nudge).
- Multi-ratio PNG export (1x, 2x Retina, 3x Print) and JSON design file export.
- Autosaves to browser `localStorage` and `.data/designs/` on disk.

### 4. Personal Design Library
- Save extracted palettes, typography systems, and components as reusable presets.
- Presets are stored under `.data/library/` for instant reuse across sessions.

---

## Prerequisites & Setup

### 1. Antigravity CLI (`agy`)
Ensure `agy` is installed and you are signed in on your machine:
```bash
# Verify installation
which agy
agy --version
```

If not signed in, run:
```bash
agy auth login
```

### 2. Environment Configuration
Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

Default configuration (`.env`):
```ini
AI_PROVIDER=agy
PORT=3000
```

*(Optional)* If you wish to use the Google GenAI API instead of the local CLI:
```ini
AI_PROVIDER=gemini
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Installation & Running
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Architectural Decisions & Implementation

1. **Local AI Engine (`src/server/ai/`)**:
   - `AgyProvider` creates an isolated temporary directory per call, writes references as `ref_1.png`, `ref_2.png`, etc., spawns `agy -p "<prompt>" --print-timeout 2m --dangerously-skip-permissions`, and recursively removes the directory in `finally`.
   - Single-concurrency queue (`aiQueue`) serializes calls to prevent system overload from concurrent heavy model executions.
   - Non-TTY transcript fallback: If stdout is empty, `AgyProvider` reads the latest transcript from `~/.gemini/antigravity-cli/brain/<uuid>/.system_generated/logs/transcript.jsonl`.
   - Schema validation retry: If output fails Zod parsing, `AgyProvider` issues a repair prompt with the exact validation error issues.

2. **Server-Side Image Processing (`sharp`)**:
   - Image magic bytes validation (`PNG`, `JPEG`, `WebP`) and dimension bounds checking (300px to 4000px).
   - Real-pixel color sampling: inspects center pixels of shape bounds to verify AI color guesses.
   - Server-side cropping: extracts component previews and image layer assets into `.data/assets/`.

3. **Storage Layer (`src/server/storage/`)**:
   - Strictly local filesystem storage under `.data/`:
     - `.data/cache/`: DesignDNA cached by SHA-256 of image bytes.
     - `.data/designs/`: JSON design artboard files.
     - `.data/library/`: Reusable presets (palettes, typography, components).
     - `.data/assets/`: Cropped PNG assets and previews.

4. **Code Quality & Style Integrity**:
   - Matches all existing design tokens (`navy`, `amber`, `brand.orange`, `Outfit`, `Plus Jakarta Sans`, `shadow-card`, dark mode).
   - **Zero comments in frontend code** (`.tsx`, `.ts`, `.css`) per strict project requirements.
   - Strict TypeScript everywhere without untyped `any` bypasses.

---

## Unit Testing

Run the Vitest test suite covering box normalization, role precedence, text fitting, contrast calculation, and JSON extraction/repair:
```bash
npm run test
```

Test suite coverage:
- `tests/box.test.ts`: Normalized 0-1000 coordinate conversion, pixel mapping, bounds clamping, and overlap resolution.
- `tests/merge.test.ts`: Role precedence rules, base layout preservation, aspect overrides, priority conflict handling, and base validation.
- `tests/text-fit.test.ts`: Text dimension wrapping, line height ratios, and font size downscaling.
- `tests/contrast.test.ts`: Relative luminance, WCAG AA contrast ratio validation, and automated text color adjustment.
- `tests/repair.test.ts`: JSON parsing from markdown fences, prose extraction, character sanitization, and repair prompt construction.

---

## Known Limitations

- **Complex Vector Paths**: Stylized custom freeform SVG curves and intricate hand illustrations are cropped and preserved as high-fidelity image layers rather than converted into bezier curves.
- **Agy Queueing**: Because local model execution is compute-intensive, calls are processed sequentially through a single-concurrency queue.
# Designa
