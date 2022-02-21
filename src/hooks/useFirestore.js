import { useReducer, useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer();
};
