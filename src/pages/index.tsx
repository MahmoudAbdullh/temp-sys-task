import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import Product from "@/components/Product";
import Vehicle from "@/types/vehicle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [isloading, setIsloading] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  // logic could be moved to Hook
  const fetchVehicles = () => {
    setIsloading(true);
    fetch(`/api/vehicles${router.asPath}`)
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data?.data || []);
        setIsloading(false);
      })
      .catch(() => {
        // handle error
      });
  };
  useEffect(() => {
    fetchVehicles();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <>
      <main>
        <NavBar itemsCount={vehicles.length} />
        <Loader isLoading={isloading}>
          <div className="d-grid">
            {vehicles.map((vehicle: Vehicle) => (
              <Product key={vehicle.Id} vehicle={vehicle} />
            ))}
          </div>
        </Loader>
      </main>
    </>
  );
}
