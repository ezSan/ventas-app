import React, { createContext, useReducer } from "react";

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
      return {
        ...state,
        historialPedidos: [
          ...state.historialPedidos,
          {
            cliente: state.cliente,
            pedido: state.pedidoActual.pedido,
            total: state.pedidoActual.total,
            invoiceType:action.payload.invoiceType,
          },
        ],
        pedidoActual: {
          pedido: {},
          total: 0,
        },
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
