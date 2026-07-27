// Mild deterrents against casual right-click / DevTools access.
// These do not and cannot prevent anyone from viewing a website's HTML —
// browsers always expose rendered markup. This only discourages casual use.
export function installInspectionGuard() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const blockedWithModifier =
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      ["I", "J", "C"].includes(key);
    const blockedViewSource =
      (event.ctrlKey || event.metaKey) && !event.shiftKey && key === "U";
    const blockedDevToolsKey = key === "F12";

    if (blockedWithModifier || blockedViewSource || blockedDevToolsKey) {
      event.preventDefault();
    }
  });
}
