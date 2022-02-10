import { useLocation } from "react-router-dom";

export const ShowBreadcrumbs = () => {
  const location = useLocation();
  return <span>{location.pathname}</span>;
};
