"use client";
import React, { useEffect, useState, ReactElement } from "react";
import { Grid } from "antd";
import Login from "@/components/Login";
import Register from "@/components/Register";
import ForgotPassword from "@/components/ForgotPassword";
import LoginPanel from "@/components/LoginPanel";
import GetStartedApp from "@/components/GetStartedApp";

export type ComponentList = "LOG-IN" | "REGISTER" | "FORGOT-PASSWORD" | "";

export default function Home() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const smDown = ((screens.xs || screens.sm) && !screens.md) || false;
  const isMd = (!screens.lg && screens.md) || false;
  const isLg = (!screens.xl && screens.lg) || false;
  const isXs = screens.xs;

  const [currentComponent, setCurrentComponent] = useState<ComponentList>("");
  const [activeComponent, setActiveComponent] = useState<ReactElement>();
  const [changeComponent, setChangeComponent] = useState(false);

  const changeCurrentComponent = () => {
    switch (currentComponent) {
      case "LOG-IN":
        setActiveComponent(() => (
          <Login onCurrentComponent={setCurrentComponent} />
        ));
        break;
      case "REGISTER":
        setActiveComponent(() => (
          <Register onCurrentComponent={setCurrentComponent} />
        ));
        break;
      case "FORGOT-PASSWORD":
        setActiveComponent(() => (
          <ForgotPassword onCurrentComponent={setCurrentComponent} />
        ));
        break;
      default:
        setActiveComponent(() => (
          <Login onCurrentComponent={setCurrentComponent} />
        ));
        break;
    }
  };

  useEffect(() => {
    changeCurrentComponent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentComponent]);
  console.log(currentComponent);

  console.log(smDown);
  console.log(screens);

  return !isXs ? (
    <div className="flex min-h-screen w-screen items-center justify-center bg-blue-100">
      <div
        className={
          smDown
            ? "flex h-screen w-full flex-col  bg-white"
            : isMd
              ? "flex w-11/12 rounded-lg bg-white shadow-lg"
              : isLg
                ? "flex w-11/12 rounded-lg bg-white shadow-lg"
                : "h-9/12 flex w-9/12 rounded-lg bg-white shadow-lg"
        }
      >
        <div
          className={
            smDown
              ? "w-full bg-blue-500 px-8 py-14"
              : isMd
                ? "w-5/12  rounded-s-lg bg-blue-500 px-8 py-14"
                : "h-full w-8/12 flex-col rounded-s-lg bg-blue-500 p-14"
          }
        >
          <LoginPanel smDown={smDown} isMd={isMd} />
        </div>
        <div
          className={
            smDown
              ? "flex h-full w-full items-center justify-center"
              : isMd
                ? "flex w-7/12 items-center justify-center"
                : isLg
                  ? " flex w-6/12 rounded-lg bg-white shadow-lg"
                  : "flex w-4/12 items-center justify-center"
          }
        >
          <div className="flex w-full min-w-80 max-w-96 flex-col justify-center gap-4 p-8">
            {activeComponent}
          </div>
        </div>
      </div>
    </div>
  ) : !changeComponent ? (
    <GetStartedApp onChangeComponent={setChangeComponent} />
  ) : (
    <div className="flex min-h-screen w-screen flex-col justify-center gap-4 p-4">
      {activeComponent}
    </div>
  );
}
