const classnames = (...names: Array<string | undefined>) => {
  return names.filter(Boolean).join(" ");
};

export default classnames;
