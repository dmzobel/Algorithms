// script for replacing hyperlinked text with normal text and a hyperlinked superscript citation

const links = Array.from(document.getElementsByTagName('a'));

links.forEach((link, idx) => {
  const span = document.createElement('span');
  span.innerText = link.innerText;

  const a = document.createElement('a');
  a.innerText = `[${idx}]`;
  a.href = link.href;

  const sup = document.createElement('sup');
  sup.appendChild(a); // wrapping `a` in a superscript

  const parent = link.parentNode;
  parent.insertBefore(span, link);
  parent.insertBefore(sup, link);
  link.remove();
});
