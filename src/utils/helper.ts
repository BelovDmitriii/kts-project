export const updateURLQueryParam = (name: string, value: string | null) => {

  const url = new URL(window.location.href);
  if (value !== null) {
    url.searchParams.set(name, value);
  } else {
    url.searchParams.delete(name);
  }
  window.history.pushState({}, '', url);
};
