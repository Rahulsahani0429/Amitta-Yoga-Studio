import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RouterContext = createContext(null);

const normalizePath = (path) => {
  if (!path) return "/";
  const clean = path.split("#")[0].split("?")[0];
  return clean.endsWith("/") && clean.length > 1 ? clean.slice(0, -1) : clean;
};

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const value = useMemo(
    () => ({
      pathname,
      navigate(to) {
        const nextPath = normalizePath(to);
        if (nextPath !== pathname) {
          window.history.pushState({}, "", nextPath);
          setPathname(nextPath);
        }
      }
    }),
    [pathname]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useLocation() {
  const router = useContext(RouterContext);
  if (!router) return { pathname: normalizePath(window.location.pathname) };
  return { pathname: router.pathname };
}

export function Link({ to, href, children, onClick, target, ...props }) {
  const router = useContext(RouterContext);
  const destination = to || href || "/";

  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      target === "_blank" ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      destination.startsWith("http") ||
      destination.startsWith("tel:") ||
      destination.startsWith("mailto:")
    ) {
      return;
    }

    event.preventDefault();
    router?.navigate(destination);
  };

  return (
    <a href={destination} target={target} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function NavLink({ to, className, children, ...props }) {
  const { pathname } = useLocation();
  const isActive = normalizePath(to) === pathname;
  const resolvedClassName = typeof className === "function" ? className({ isActive }) : className;

  return (
    <Link to={to} className={resolvedClassName || (isActive ? "active" : "")} {...props}>
      {children}
    </Link>
  );
}
