export const rc = (classNames: (string | null | undefined)[]) => {
  const filteredClassNames = classNames.filter(
    (cn) => typeof cn === "string" && cn.length
  ) as string[];
  if (!filteredClassNames.length) return "";
  
  return filteredClassNames.reduce((pr, cur) => `${pr} ${cur}`);
};
