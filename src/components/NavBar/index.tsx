import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import CN from "classnames";
import { Filter } from "@/types/vehicle";
import styles from "./NavBar.module.css";

const NavBar = ({ itemsCount }: { itemsCount: number }) => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    if (!!router.query?.q) setQuery(router.query?.q as string);

    return () => {};
  }, [router.query]);

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setQuery(value);
    if (value.length >= 2) {
      router.push(`?q=${value}`);
    }
    if (value.length < 1) router.push(`?q=`);
  };

  const handleSortChange = (filter: Filter) => {
    if (router.query.sortBy === filter) return router.push(`?sortBy=`);
    router.push(`?sortBy=${filter}`);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <h2 className={styles.title}>Vehicles & Machinery</h2>
        <p className={styles.subTitle}>
          <span>{itemsCount}</span> Available Items
        </p>
      </div>
      <div className={styles.navRight}>
        <input
          type="search"
          placeholder="search..."
          className={styles.inputSearch}
          value={query}
          onChange={handleSearch}
        />
        <button
          className={CN({
            active: (router.query.sortBy as Filter) === "price",
          })}
          onClick={() => handleSortChange("price")}
        >
          Price
        </button>
        <button
          className={CN({
            active: (router.query.sortBy as Filter) === "years",
          })}
          onClick={() => handleSortChange("years")}
        >
          Years
        </button>
        <button
          className={CN({
            active: (router.query.sortBy as Filter) === "end-date",
          })}
          onClick={() => handleSortChange("end-date")}
        >
          End Date
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
