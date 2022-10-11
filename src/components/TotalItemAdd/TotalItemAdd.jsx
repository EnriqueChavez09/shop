import { useSelector } from "react-redux";
export const TotalItemAdd = () => {
  const amount = useSelector((state) => state.amount.value);
  localStorage.setItem("totalItem", amount);
  return <div className="totalItemAdd">{amount}</div>;
};
