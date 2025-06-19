function getPaginationPages(current, total) {
  const pages = [];
  const seen = new Set();

  const add = (val) => {
    if (!seen.has(val)) {
      seen.add(val);
      pages.push(val);
    }
  };

  add(1);

  if (current - 2 > 2) {
    add("...");
  }

  for (let i = current - 2; i <= current + 2; i++) {
    if (i > 1 && i < total) {
      add(i);
    }
  }

  if (current + 2 < total - 1) {
    add("...");
  }

  if (total > 1) {
    add(total);
  }

  return pages;
}

export default getPaginationPages;
