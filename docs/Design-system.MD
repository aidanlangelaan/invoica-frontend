# Invoica – Design System (Angular 20 + Tailwind)

> **Scope:** Mobile‑first UI system for an Angular 20+ app using **Angular Material 20.2.x (Material 3)** and **Tailwind CSS**. The goal is a pragmatic CRUD + dashboard experience with clear patterns (lists → side sheet → dialogs).

---

## 1) Design Principles

* **Mobile‑first:** start at 360–428px; progressively enhance to tablet/desktop.
* **Predictable flows:** list → detail (side sheet) → edit (dialog/page). No surprise navigation.
* **Lean & legible:** compact density, generous line‑height, clear dividers, minimal chrome.
* **Accessible by default:** WCAG AA contrast, visible focus, keyboard navigation, ARIA labels.
* **One source of truth:** Material 3 tokens for color/typography; Tailwind for layout/spacing.

---

## 2) Color System

Accessible, business‑neutral. Values can be tuned to brand later without breaking semantics.

**Core tokens**

* `Primary` (actions/links): **#2563EB** (Blue 600)
* `On Primary`: **#FFFFFF**
* `Secondary` (accent): **#7C3AED** (Purple 600)
* `Tertiary` (charts/info): **#0EA5E9** (Sky 500)
* `Surface` (light): **#FFFFFF**  | (dark): **#0B1020**
* `On Surface` (light): **#0F172A** | (dark): **#E5E7EB**
* `Surface Variant` (containers): light **#F8FAFC**, dark **#121833**
* `Outline` (dividers): light **#E2E8F0**, dark **#334155**
* `Success` **#16A34A**, `Warning` **#D97706**, `Error` **#DC2626**, `Info` **#2563EB**

**Usage**

* Buttons/links: Primary; secondary/tertiary only for alternatives.
* Status chips: semantic colors with readable text; never rely on color alone.
* Focus ring: high‑contrast (visible in both themes).

---

## 3) Typography

* **Family:** System stack or Inter/Roboto.
* **Scale (mobile → desktop)**

  * Display: 28 → 32 / 700 (rare)
  * Headline: 22 → 24 / 700
  * Title: 18 → 20 / 600
  * Body: 14 → 15 / 400 (default app text)
  * Caption: 12 → 13 / 500
* **Line‑height:** 1.45–1.6 for readability.
* **Numerics:** tabular numbers for amounts; right‑align currency in tables.

---

## 4) Spacing, Radius & Elevation

* **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48.
* **Gutters:** 12 on mobile, 16+ on tablet/desktop.
* **Radius:** 8 (inputs/buttons), 12 (cards), 16 (side sheets/dialogs).
* **Elevation:** subtle shadow stacks; stronger for side sheet & dialogs.

---

## 5) Breakpoints & Responsive Grid

* **XS (≤480):** one column; table rows collapse into cards; action menus use overflow.
* **SM (481–768):** two columns where appropriate; side sheet full‑screen.
* **MD (769–1024):** 12‑column grid; side sheet 560–640px.
* **LG (≥1025):** permanent sidenav; more columns visible in tables.

Tailwind guidance: use `container`, `grid`, `flex`, `gap-*`, `p-*`, `sm:*`, `md:*`, `lg:*` utilities for layout.

---

## 6) App Shell & Information Architecture

**Shell**

* Top App Bar: page title, search (collapses to icon on XS/SM), theme toggle, account menu.
* Navigation: left sidenav; **over** on mobile (modal drawer), **side** on desktop.
* Content area: page header (breadcrumbs + primary CTA), content, toasts/snackbars bottom‑end.

**IA (first‑class sections)**

* **Dashboard** (lightweight KPIs + recent activity)
* **Orders** → list, details (side sheet), lines (tab), add/edit line (dialog)
* **Invoices** → list, details (side sheet), issue/send, documents (PDF/UBL)
* **Customers** → list, create/edit
* **VAT Rates** → catalog
* **Company** → defaults (payment terms, address, bank, VAT id)

---

## 7) Screen Blueprints

### 7.1 Dashboard

* **KPI cards (2–4):** Draft Orders, Draft Invoices, Outstanding (€), Quick Actions.
* **Recent activity:** unified list of latest orders/invoices with status chips.
* **Responsiveness:** grid 1× on XS, 2× on SM, 4× on LG.

### 7.2 List Pages (CRUD Index)

* **Header:** title + primary action (e.g., *New Order*).
* **Filter bar:** keyword, date range, status chips; collapse to sheet on mobile.
* **Table (desktop):** sortable columns; sticky header.
* **Cards (mobile):** each row as a card with: title (ID + subject), meta (customer, date), right‑aligned amount, status chip, overflow menu.
* **Empty state:** icon + one‑liner + CTA.

**Suggested columns**

* Orders: `#`, Subject, Customer, Order Date, Status, Lines, Total (€)
* Invoices: `#`, Subject, Customer, Issue/Due, Status, Total Incl. VAT (€)
* Customers: Name, Email, Phone, Default Rates, Payment Terms
* VAT Rates: Name, Country, % (Category), Active

### 7.3 Details Side Sheet (640px desktop / fullscreen mobile)

* Header: title + close + overflow (Edit, Delete).
* Tabs: **Overview** | **Lines** (Orders/Invoices).
* Overview: two‑column definition list of key fields.
* Totals card: Subtotal, VAT, Total (locale nl‑NL).
* Lines tab: compact table with *Add line* (dialog) and per‑line overflow actions.

### 7.4 Create/Edit Forms

* 1 column on mobile; 2 columns on md+.
* Group fields: **Basics**, **Billing**, **Defaults**.
* Sticky footer actions: Cancel / Save.
* Validation: inline messages + error summary on submit; keyboard‑friendly order.

---

## 8) Components & Patterns

* **Top App Bar:** sticky, 56–64px height; search collapses; theme toggle with ARIA label.
* **Sidenav:** icons + labels; active state pill; collapsible groups if needed.
* **Table/Card Rows:** compact density; hover highlight (desktop); swipe/overflow menu (mobile).
* **Chips:** statuses (Draft, Ready, Invoiced, Issued) with semantic color + text.
* **Dialogs:** 560–720px; focus trap; escape to close; confirm destructive actions.
* **Side Sheet:** end‑aligned, 560–640px; scrollable content; discrete background scrim.
* **Forms:** clear labels, helper text, inline errors; date pickers for dates; select for customers with typeahead on desktop, full‑screen picker on mobile.
* **Feedback:** snackbars for success/error; skeleton loaders for tables and sheets.

---

## 9) Accessibility & States

* **Contrast:** text ≥ 4.5:1; large text/icons ≥ 3:1.
* **Focus:** visible ring on all interactive elements; not color‑only.
* **Keyboard:** tab order = visual order; `Skip to content` link at top.
* **States:** Loading/Empty/Error defined per data region; announce via `aria-live` where appropriate.

---

## 10) Microcopy Guidelines

* Buttons: *Create, Save, Cancel, Edit, Delete, Issue, Generate Invoice*.
* Empty orders: “No orders yet. Create your first order to start invoicing.”
* Delete confirm: “This will permanently delete the order and its lines.”

---

## 11) Theming & Technology Notes (Angular Material 20.2 + Tailwind)

* **Material as token source:** Use Material 3 theme tokens to define base color/typography/density. Tailwind handles layout/spacing and quick utility styling.
* **Light/Dark:** Maintain both themes; apply via a root class (e.g., `.dark`). Ensure data tables/dividers keep contrast in dark.
* **Component density:** Prefer default density for touch targets on mobile; reduce slightly for desktop lists/tables.
* **Icons:** Use Material Icons or Lucide; ensure consistent stroke/size (20–24 px).
* **Motion:** subtle transitions (200 ms); avoid large parallax; respect `prefers-reduced-motion`.

---

## 12) Data Presentation Standards

* **Currency:** `nl-NL`, currency EUR with narrow no‑break space if possible (e.g., `€ 1.234,56`).
* **Dates:** ISO on inputs (`YYYY‑MM‑DD`), localized for display (`DD‑MM‑YYYY`).
* **Status vocabulary:** *Draft, Ready, Invoiced, Issued*.
* **Sorting defaults:** newest first; stable secondary sort by ID.

---

## 13) Example Page Layouts (component blueprint)

### Page Header

* Left: Title + breadcrumb.
* Right: Primary CTA (+ optional secondary).
* Below: optional filter bar.

### List → Details → Edit

1. User lands on list; filters/search at top.
2. Click row → side sheet (non‑blocking; keeps list context).
3. Edit from sheet → dialog (quick edits) or full page (complex edits).

---

## 14) Performance & UX

* Virtual scroll for long lists; progressive data fetching.
* Debounced search; async customer typeahead; cache recent entities.
* Optimistic UI for line add/remove; reconcile on API response.
* Keep interactions under 100 ms where possible; show skeletons above 250 ms.

---

## 15) Build Order (Recommended)

1. **Theme & tokens** (light/dark) + Tailwind base.
2. **App shell** (toolbar, sidenav, routing outlets).
3. **List pattern** (table/cards responsive) + filter bar.
4. **Side sheet** for details + totals.
5. **Order lines dialog** with live totals.
6. **Invoices** (issue/send) + document attachments.
7. **Customers, VAT Rates, Company** forms.
8. **Dashboard** cards + recent activity.

---

## 16) QA Checklist

* Mobile navigation reachable with one hand; primary actions within 72 px of thumb zone.
* All interactive elements ≥ 44×44 px on touch.
* Focus order verified per page; escape closes dialogs.
* Dark theme contrast verified on table dividers and chips.
* Locale formatting (dates/currency) verified across list, sheet, dialog.

