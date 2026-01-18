export default function applyHTMLStyles(text: string) {
  if (!text) return "";

  // Escape HTML to prevent XSS attacks (pure string method)
  const escapeHTML = (str: string) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // Process the text with regex patterns
  let result = escapeHTML(text);

  // Bold: **text** -> <strong>text</strong>
  result = result.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="text-foreground">$1</strong>',
  );

  // Italic: *text* -> <em>text</em>
  result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Strikethrough: ~~text~~ -> <s>text</s>
  result = result.replace(/~~(.+?)~~/g, "<s>$1</s>");

  // Line breaks: \n -> <br>
  result = result.replace(/\\n/g, "<br>");

  return result;
}
