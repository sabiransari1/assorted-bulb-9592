import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getPlaces } from "../redux/places/action";

export const HomePage = () => {
  const data = useAppSelector((store) => store.placesReducer.data);
  const dispatch = useAppDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(getPlaces());
  }, []);
  return <div>HomePage</div>;
};
