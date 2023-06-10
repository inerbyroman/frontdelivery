import { useState } from "react";
import { getOrderAPI } from "../../api/api";

const History = () => {
  const [sendData, setSendData] = useState();
  const [currentHistory, setCurrentHistory] = useState();

  const onChangeHandler = (event, key) => {
    setSendData((prev) => ({ ...prev, [key]: event.target.value }));

    setTimeout(async () => {
      if (sendData?.email?.length > 3 && sendData?.phone?.length > 3) {
        const data = await getOrderAPI(sendData.email, sendData.phone);
        setCurrentHistory(data);
      }
    }, 2000);
  };

  return (
    <div className="h-[80vh] w-[90vw] flex flex-col m-auto mt-5 gap-5 border border-black rounded py-4 px-10">
      <div className="w-full flex flex-col gap-3 justify-center items-center h-[30vh] border border-black rounded p-10">
        <label>Email:</label>
        <input
          value={sendData?.email || ""}
          className="border outline-none rounded p-2 w-[300px]"
          type="email"
          onChange={(e) => onChangeHandler(e, "email")}
        />

        <label>Phone:</label>
        <input
          value={sendData?.phone || ""}
          className="border outline-none rounded p-2 w-[300px]"
          type="tel"
          onChange={(e) => onChangeHandler(e, "phone")}
        />
      </div>
      <div className="border border-black rounded flex-grow p-3 flex flex-col gap-5  overflow-y-auto">
        {currentHistory &&
          currentHistory.map((orderData) => {
            const order = JSON.parse(orderData.items);
            return (
              <div className="border border-black rounded p-3 flex items-center justify-between gap-5">
                <div className="flex gap-4 overflow-x-auto">
                  {order.foods.map((item) => {
                    return (
                      <div className="border border-black rounded p-3 flex">
                        <div className="w-full">
                          <img
                            className="object-cover h-16"
                            src={`${item.image}`}
                            alt="img"
                          />
                        </div>

                        <div className="flex flex-col p-2 justify-between items-center">
                          <h5 className="whitespace-nowrap">
                            {item.title} x {item.count}
                          </h5>
                          <p className="whitespace-nowrap">
                            price: {item.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="w-[20vw] whitespace-nowrap text-center">
                  Total price: {order.price}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default History;
