"use client";
import { useTheme } from "next-themes";
import {Check, Moon, Power, Sun} from "@gravity-ui/icons";
import {Switch} from "@heroui/react";
import React from 'react';

const ToggleBtn = () => {

    const { theme, setTheme } = useTheme();

    return (
        <Switch  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-[25px] w-10 bg-cyan-600 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
          >
            <Switch.Thumb
              className={`size-5 bg-white shadow-sm ${isSelected ? "ms-[17px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-3 text-cyan-600" />
                ) : (
                  <Moon className="size-3 text-blue-600" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
    );
};

export default ToggleBtn;