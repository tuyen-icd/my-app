import { useSelector } from "react-redux";
import { APPLICATION_ID } from "../configs";

const getHeader = () => {
  return {
    header: {
      "X-Parse-Application-Id": APPLICATION_ID,
    },
  };
};

const getStoreData = (reducerName) => {
  const getPending = useSelector((state) => state[reducerName].pending);

  const getData = useSelector((state) => state[reducerName].data);

  const getError = useSelector((state) => state[reducerName].error);

  return {
    data: getData,
    getPending: getPending,
    error: getError,
  };
};

export default { getStoreData, getHeader };
