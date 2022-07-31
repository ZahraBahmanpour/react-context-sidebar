import { useGlobalContext } from "../context";
import { i18n } from "../i18n";

export default function Team() {
  const { direction } = useGlobalContext();
  const translation =
    direction === "rtl" ? i18n.pageHeading.fa : i18n.pageHeading.en;
  return (
    <div className="container">
      <h2>{translation.meet}</h2>
    </div>
  );
}
