export default function dateParser(date) {
  return date.toISOString().substring(0, 10);
}