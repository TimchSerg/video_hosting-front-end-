import React, { useEffect } from "react";
import { Norr } from "components/norr";
import { SeverityType } from "components/norr";
import { useDispatch } from "react-redux";
import { hideNorr } from "features/norr/slice";
import { useAppSelector } from "app/hooks";

export const NorrComponent: React.FC<any> = () => {
  const { show, severity, message } = useAppSelector( state => state.norr );
  const dispatch = useDispatch();

  useEffect(()=> {
    if(show) setTimeout(()=> dispatch(hideNorr()), 5000)
  }, [show]) // eslint-disable-line react-hooks/exhaustive-deps

  return <Norr show={show} severity={severity as SeverityType} message={message} />
}

export default NorrComponent;