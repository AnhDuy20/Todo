import React from "react"
import { Button } from "antd"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"

export const ThemeButton = ({ darkTheme,toggleTheme}) => {
  return (
    <div className="toggle-theme-btn">
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/> }
        </Button>
    </div>
  )
}
