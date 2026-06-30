import { configureStore } from "@reduxjs/toolkit";

export function makeStore() {
  return configureStore({
    reducer: {},
  });
}

  export type AppStore = ReturnType<typeof makeStore>
  export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
  export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];