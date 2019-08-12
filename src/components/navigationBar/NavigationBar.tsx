import { Link } from "react-router-dom"
import React from "react"
import { Colors } from "../../resources/Colors"

export const NavigationBar: React.StatelessComponent = () => (
  <div
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      display: "flex",
      backgroundColor: Colors.grayishBlack
    }}
  >
    <Link
      to={"/Home"}
      style={{
        color: Colors.white,
        textDirection: "none",
        fontSize: 24
      }}
    >
      Home
    </Link>
    <Link to={"/About"}> About </Link>
    <Link to={"/Blog"}> Blog </Link>
    <Link to={"/Code"}> Code </Link>
  </div>
)
