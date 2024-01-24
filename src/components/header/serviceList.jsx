// ServiceList.jsx
import Link from "next/link";
import styles from "./header.module.scss";

const ServiceList = () => {
  return (
    <div className={styles.serviceList}>
      <ul className={`${styles.serviceListItem}`}>
        <li>
          <Link
            href="#"
            className={`${styles.servicesLink}`}
            style={{ whiteSpace: "nowrap" }}
          >
            Lightening
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={`${styles.servicesLink}`}
            style={{ whiteSpace: "nowrap" }}
          >
            EV Chargers
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={`${styles.servicesLink}`}
            style={{ whiteSpace: "nowrap" }}
          >
            Security
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={`${styles.servicesLink}`}
            style={{ whiteSpace: "nowrap" }}
          >
            Audio Visual
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={`${styles.servicesLink}`}
            style={{ whiteSpace: "nowrap" }}
          >
            IT Solution
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={`${styles.servicesLink}`}
            style={{ whiteSpace: "nowrap" }}
          >
            Other Services
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServiceList;
