export async function fetchJSON(url) {
  const res = await fetch(url);
  try {
    return await res.json();
  } catch (e) {
    return [];
  }
}
