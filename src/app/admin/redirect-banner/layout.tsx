import classes from "./page.module.css";

export default function AdminBannerRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={classes.main}>{children}</div>;
}
