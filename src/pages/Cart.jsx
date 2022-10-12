import React from "react";
import { CartDetail, CartWithoutItem } from "../containers";
import { BasicLayout } from "../layouts";
import { useSelector } from "react-redux";
export default function Cart() {
  const amount = useSelector((state) => state.amount.value);
  return (
    <>
      <BasicLayout>
        <main>{amount === 0 ? <CartWithoutItem /> : <CartDetail />}</main>
      </BasicLayout>
    </>
  );
}
