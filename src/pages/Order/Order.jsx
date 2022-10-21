import { useMemo } from "react";
import PageBanner from "../../components/Bannder/PageBanner";
import OrderLists from "./OrderLists";

const Order = () => {
    const pageBanner = useMemo(() => <PageBanner title="Add To Cart"/>, []);
  return (
    <>
        {pageBanner}
        <OrderLists/>
    </>
  )
}

export default Order