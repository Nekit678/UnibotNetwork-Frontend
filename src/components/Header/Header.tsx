import { useState } from "react";
import { Nav } from "../Nav/Nav"
import "./Header.scss"
import { Button } from "antd";



export const Header: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="header">
      <div style={{ padding: "0.4rem 2rem" }}>
        <Button onClick={() => (setShowNav(!showNav))}>Toggle Menu</Button>
      </div>

      <Nav show={showNav} />
    </header>
  )
}