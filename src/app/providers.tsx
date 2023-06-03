"use client";
import { Provider } from "react-redux";
import { store } from "../../store";
import { store } from "@/store";

export default function providers({ children }: { children: React.ReactNode }) {
  return <Provider {...{ store }}>{children}</Provider>;
}