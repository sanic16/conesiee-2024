import BackButton from "@/components/ui/backButton/BackButton";
import classes from "./page.module.css";

export default function page() {
  return (
    <div className={`container ${classes.container}`}>
      <BackButton />
    </div>
  );
}
