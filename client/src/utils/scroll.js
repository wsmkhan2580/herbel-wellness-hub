export function scrollToLeadForm() {
  const node = document.getElementById('lead-form');
  if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
