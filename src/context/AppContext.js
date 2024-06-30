import React, { createContext, useReducer } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";

const initialState = {
  cliente: null,
  pedidoActual: {
    pedido: {},
    total: 0,
  },
  historialPedidos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CLIENTE":
      return {
        ...state,
        cliente: action.payload,
      };
    case "SET_PEDIDO":
      return {
        ...state,
        pedidoActual: {
          pedido: action.payload.pedido,
          total: action.payload.total,
        },
      };
    case "CONFIRMAR_PEDIDO":
      addDoc(collection(db, "orders"), {
        cliente: state.cliente,
        pedido: state.pedidoActual.pedido,
        total: state.pedidoActual.total,
        invoiceType: action.payload.invoiceType,
        date: new Date().toISOString(),
      });

      return {
        ...state,
        historialPedidos: [
          ...state.historialPedidos,
          {
            cliente: state.cliente,
            pedido: state.pedidoActual.pedido,
            total: state.pedidoActual.total,
            invoiceType: action.payload.invoiceType,
            date: new Date().toISOString(),
          },
        ],
        pedidoActual: {
          pedido: {},
          total: 0,
        },
      };
    case "SET_HISTORIAL_PEDIDOS":
      return {
        ...state,
        historialPedidos: action.payload,
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchOrdersByDate = async selectedDate => {
    const startDate = new Date(selectedDate);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(selectedDate);
    endDate.setHours(23, 59, 59, 999);

    const ordersQuery = query(
      collection(db, "orders"),
      where("date", ">=", startDate.toISOString()),
      where("date", "<=", endDate.toISOString())
    );

    const querySnapshot = await getDocs(ordersQuery);
    const orders = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({ type: "SET_HISTORIAL_PEDIDOS", payload: orders });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, fetchOrdersByDate }}>
      {children}
    </AppContext.Provider>
  );
};
