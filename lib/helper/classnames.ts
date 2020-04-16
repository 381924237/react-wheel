export default (...names: Array<string | undefined>) => {
  return names.filter(Boolean).join(" ");
};
