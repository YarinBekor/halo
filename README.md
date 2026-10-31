# Pelmatech

Editable source for the current Pelmatech landing page, including the title in the upper area and both buttons underneath the description.

## Change the text

Open `index.html` in your editor. All visible page text is here:

- Main title: search for `Your Personal`.
- Supporting paragraph: search for `Meet your personal`.
- Buttons: search for `Try for Free` or `Schedule Demo`.
- Schedule and features: search for the displayed words.
- Popup headings: edit each button's `data-dialog` attribute.

Keep the surrounding HTML tags when changing text. `<br>` starts a new line.

## Preview

Double-click `index.html` to open it in a browser. Save your edits, then refresh the browser. No installation or build is needed.

## Files

- `index.html`: page structure and text.
- `styles.css`: layout, colors, and responsive styling.
- `script.js`: menu and preview popup behavior.

The signup and demo forms are previews; they do not submit to a backend.

## Repository

This folder is a local Git repository with an initial commit. Open it in your preferred code editor or Git client. You can publish it to your own GitHub account using GitHub Desktop's “Add Local Repository” and “Publish repository” actions.

Edits here do not automatically update the hosted Site. Ask Codex to publish your edited files to the existing Pelmatech Site when ready.

Current Site: https://pelmatech-health-companion-yb.tom-bekor.chatgpt.site

## Integration visual preview

Open `plugin-slot.html` for an alternate page that replaces the days card with an animated integration board. `index.html` remains unchanged.

The illustration in `plugin-slot.html` and animation in `plugin-slot.css` are a custom implementation inspired by the supplied screenshot, not the licensed CodedVisuals source. No extra packages are required. The animation respects reduced-motion preferences. The Connected badge is illustrative, not a live integration status.
