/**
 * convertRoutes
 * @param routes routes
 */
export function convertRoutes(routes) {
  const res = [];
  let filterRoutes = routes.filter((i) => !i.hidden);
  filterRoutes.forEach((route) => {
    const tmp = { ...route };
    if (tmp.children) {
      tmp.children = convertRoutes(tmp.children);
    }
    res.push(tmp);
  });
  return res;
}
