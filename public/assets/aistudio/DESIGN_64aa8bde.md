---
name: Tactile Studio Desk
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#424752'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#727783'
  outline-variant: '#c2c6d4'
  surface-tint: '#005db7'
  primary: '#004d99'
  on-primary: '#ffffff'
  primary-container: '#1565c0'
  on-primary-container: '#dae5ff'
  inverse-primary: '#a9c7ff'
  secondary: '#785900'
  on-secondary: '#ffffff'
  secondary-container: '#fdc003'
  on-secondary-container: '#6c5000'
  tertiary: '#9d0045'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9065b'
  on-tertiary-container: '#ffdde2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468c'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#fabd00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#ffd9df'
  tertiary-fixed-dim: '#ffb1c1'
  on-tertiary-fixed: '#3f0018'
  on-tertiary-fixed-variant: '#8f003f'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
  wood-desk: '#8D5B3C'
  paper-white: '#F8F9FA'
  cardboard: '#C8A27C'
  accent-cyan: '#00BCD4'
  ink-soft: '#4B5563'
  mat-blue-light: '#1E88E5'
  shadow-tint: '#071A36'
  border-cardboard: '#A67C52'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: 0em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '800'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
  space-2xl: 3.5rem
---

## Brand & Style

This design system channels the tactile charm and structured rigor of a physical creative director's workbench. It merges skeuomorphic workshop materiality—a self-healing coordinate drafting mat, thick chipboard clipboard backings, torn graph paper, binder clips, and vinyl sticker art—with the technical clarity of engineering blueprints.

The target audience spans creative agencies, design technologists, software engineers, and product studios who value high craft, personality, and physical metaphor over sterilized flat UI. The interface evokes feelings of active creation, playful precision, analog delight, and meticulous attention to detail.

The visual style blends **Tactile / Skeuomorphic** dimensionality with **Modern Blueprint** structures:
- Realistic layered surfaces that cast deep, physical ambient occlusions and colored drop shadows.
- Playful analog stationery props (spiral wires, paper tears, binder clips, sticky notes, washi tape strips).
- Technical precision elements: isometric millimeter coordinates, monospace telemetry badges, alignment crosshairs, and bounding boxes.
- Bold sticker titles with crisp white die-cut strokes and chunky pixelated accents.

## Colors

The palette reproduces the tactile environment of an industrial cutting mat layered on top of warm studio furniture:

- **Primary (`#1565C0`)**: Self-healing drafting mat blue. Used for primary interactive highlights, outer surface gradients, vector bounding boxes, and headline drop strokes.
- **Secondary (`#FFC107`)**: Studio warning yellow. Drives high-energy calls-to-action, lanyard cords, folder tabs, tape highlights, and active states.
- **Tertiary (`#FF4081`)**: Neon binder-clip magenta. Reserved for physical fasteners, alert badges, tape strips, and playful punchy stickers.
- **Neutral (`#111827`)**: Drafting fountain ink. Sets deep, hyper-legible body typography and foundational structural lines on paper surfaces.

### Surface and Accent Roles
- **Wood Desk (`#8D5B3C`)**: The grounding perimeter surface framing the workbench.
- **Paper White (`#F8F9FA`)**: Primary content cards, torn graph pads, and project sheets. Faint 18px engineering grid lines (`rgba(21, 101, 192, 0.08)`) sit on this base.
- **Cardboard Clipboard (`#C8A27C`)**: Secondary container planes, backing sheets, and grouping trays, framed by `#A67C52`.
- **Accent Cyan (`#00BCD4`)**: Technical telemetry, software badges, and vector anchor highlights.
- **Soft Ink (`#4B5563`)**: Supporting documentation, dates, subtitles, and secondary tabular labels.

## Typography

The typographic hierarchy orchestrates a tension between mechanical engineering clarity, playful die-cut sticker titling, and approachable modern prose:

- **Display & Section Titles (`Syne`, 800 weight)**: Provides ultra-chunky geometric shapes suitable for die-cut sticker styling. Rendered with an outer white stroke/bevel and drop-shadows. Where a retro video-game aesthetic is desired, pixel display glyphs complement this tier.
- **Section Headings & Interface Content (`Plus Jakarta Sans`)**: Delivers clean, humanist readability on paper cards and modal clipboards. Semi-bold and bold weights guide the user through complex case studies without competing with the stationery styling.
- **Blueprint Specs & Technical Metadata (`JetBrains Mono`)**: Handles all coordinate systems, timestamps, file extensions, and pill-shaped badge data to reinforce drafting precision.
- **Handwritten Annotations**: Freehand marginalia, quick reminders, and directional callout arrows should be styled in a loose script (such as Caveat) in bold weight, angled between -4° and 6° over graph paper margins.

## Layout & Spacing

The layout model simulates physical sheets arranged across a surface. It operates on two coordinated modular spatial rhythms:
1. **The 32px Drafting Grid**: Dictates master board bounds, section splits, and macro stationery placement.
2. **The 18px Graph Rhythm**: Governs internal card padding, margins, line wrapping, and checklist layouts inside notebook sheets.

### Layout Architecture
- **Desktop (≥ 1280px)**: Multi-layer workspace with a max container width of 1140px. Cards are offset with organic rotational tilts (`-2.5°` to `+2.2°`) to emulate scattered stationery. 4-column staggered grids for portfolio project cards.
- **Tablet (768px – 1024px)**: 2-column stacked sheets. Props reduce scale by 30%, and card rotations are damped to a subtle ±1° range.
- **Mobile (≤ 375px – 480px)**: 1-column linear flow. Rotational transforms normalize to `0°` to prevent overflow and preserve reading edges; sheets fill width with safe 16px lateral gutters.

### Alignment & Structure
Outer containers conform to realistic physical objects (the clipboard, the torn memo, the spiral notebook). Elements inside conform strictly to the standard grid, keeping form fields and lists rigorously squared while their holding papers float casually.

## Elevation & Depth

Visual hierarchy is constructed through multi-planar skeuomorphism and atmospheric lighting rather than generic blur drop-shadows.

### Z-Index Spatial Stratum
1. **Desk Foundation (`z-index: 0`)**: Rich brown wood grain texture.
2. **Drafting Surface (`z-index: 10`)**: Royal blue cutting mat overlay featuring 32px millimeter coordinate guides and a soft radial center highlight.
3. **Sub-boards & Backers (`z-index: 20`)**: Heavy recycled chipboard clipboards with 6px perimeter borders and inset drop shadows.
4. **Paper Planes (`z-index: 30`)**: Torn-edge spiral notebook sheets, graph paper cards, and legal slips.
5. **Interactive Props & Fasteners (`z-index: 40`)**: Neon binder clips, washi tape bands, hanging ID lanyards, and sticky pads.
6. **Die-Cut Stickers & Floating Controls (`z-index: 50`)**: Action stickers, navigation pills, and cursor pointers.

### Shadow Specifications
- **Tactile Object Elevation**: Dual-layer shadow with cold blue ambient tinting:
  `box-shadow: 0 14px 28px rgba(7, 26, 54, 0.28), 0 4px 10px rgba(7, 26, 54, 0.18)`
- **Die-Cut Sticker Stroke & Offset**: Hard directional drop shadow:
  `box-shadow: 3px 4px 0px #0D47A1` combined with a crisp `3px` white outer silhouette.
- **Paper Crease Effect**: A vertical linear gradient (`90deg, rgba(0,0,0,0.06) 0%, rgba(255,255,255,0.4) 50%, rgba(0,0,0,0.08) 100%`) applied down the center fold of notebook sheets.
- **Stationery Lift on Hover**: Elements lift `-8px` on the Y-axis, reset their rotational tilt to `0deg`, and cast a deepened 36px ambient shadow.

## Shapes

The design system maintains a tactile contrast between machine-stamped pills, hand-torn fibers, and crisp organic stationery sheets:

- **Core Radius (`roundedness: 2`)**: Content cards, sticky notes, and cardboard backers feature 8px (`0.5rem`) to 16px (`1rem`) radiused corners.
- **Pill System**: Telemetry chips, action buttons, and status indicator strips utilize fully-rounded capsules (`9999px`).
- **Physical Torn Edges**: Notebook margins employ irregular bottom tears realized via CSS `clip-path` polygon cuts (`polygon(0% 0%, 100% 0%, 100% calc(100% - 12px), ... 0% calc(100% - 10px))`).
- **Spiral Binding & Perforations**: Circular cutouts along top/side borders generated using `radial-gradient` masking to expose the cutting mat below.
- **Adhesive Washi Tape**: Semi-translucent, rectangular corner anchors with ragged ends angled at 45° across card perimeters.

## Components

### 1. Buttons & CTAs
- **Sticker Button (Primary)**: Bold Syne or pixel typography set over `#FFC107` or `#FF4081` background, encased in a 3px white border with a 3px solid ink/blue hard offset shadow. On click: depress `-2px` with zero shadow.
- **Blueprint Pill (Secondary)**: Translucent navy backdrop (`rgba(13, 37, 76, 0.72)`), 1px stroke (`rgba(255, 255, 255, 0.28)`), JetBrains Mono typography, with a glowing cyan or yellow dot indicator.

### 2. Paper Cards & Containers
- **Spiral Notebook Sheet**: White paper (`#F8F9FA`) with faint 18px blue graph lines, punched binder rings at the header, center fold gradient, and tactile dual drop shadow. Carries primary case-study content.
- **Cardboard Baseboard**: Raw cardboard finish (`#C8A27C`) with thick wood-toned borders (`#A67C52`), anchored by a brushed metallic clamp or hanging lanyard strap.
- **Sticky Note Pad**: Square canary-yellow (`#FFC107`) or pastel pink surface angled at ±2°, casting an asymmetrical bottom-corner curl shadow.

### 3. Chips & Metadata Pills
- **Telemetry Tags**: High-contrast, monospaced blueprint capsules. Standard format: `[CATEGORY // 2026]`.
- **App Badges**: Rounded square app tiles (`[Ai]`, `[Ps]`, `[Figma]`, `[Code]`) featuring tactile inner glows and subtle glossy bevels.

### 4. Selection Controls & Checklists
- **Checkboxes**: Drawn as small hand-stamped blueprint squares (`18px × 18px`). When checked, they fill with ink blue and display an energetic pink or yellow pencil check mark.
- **Radio Buttons**: Styled as target crosshairs or coordinate registration marks that fill with a solid central core when active.

### 5. Form Fields & Inputs
- **Engineering Ruled Inputs**: Transparent fill with a single solid dark ink underline matching the paper grid rhythm. Monospace label floating directly above like an engineering field spec.
- **Focus State**: The underline switches to `#00BCD4` accompanied by a tiny coordinate pin marker (`[X: 104.2]`) displayed at the field’s right margin.

### 6. Fasteners & Props (Decorative Anchors)
- **Binder Clips**: Hot pink (`#FF4081`) or chrome clamp body gripping the top edge of paper sheets with silver wire loop extensions.
- **Corner Tape**: Semi-transparent matte washi tape strips securing card edges to the cutting mat.