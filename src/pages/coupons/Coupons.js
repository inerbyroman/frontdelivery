import { useMemo, useState } from "react";
import { getCouponsAPI } from "../../api/api";

const Coupons = () => {
  const [couponsData, setCouponsData] = useState();
  useMemo(async () => {
    setCouponsData(await getCouponsAPI());
  }, []);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="border border-black rounded h-[80vh] mx-5 flex p-5 gap-5">
      {couponsData &&
        couponsData.map((coupon) => {
          return (
            <div className="border border-black rounded w-full h-fit p-5">
              <div className="">
                <img
                  className="object-cover h-36 w-full rounded"
                  src={coupon.img}
                  alt="img"
                />
              </div>
              <div className="whitespace-nowrap text-center my-5">
                {coupon.name}
                {"("}
                {coupon.code}
                {")"}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => copyCode(coupon.code)}
                  className="border rounded p-2 m-auto"
                >
                  Copy
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Coupons;
