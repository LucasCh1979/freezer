import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSolidFridge } from "react-icons/bi";
import { GiMeat, GiChickenLeg, GiNoodles, GiFruitBowl, GiSlicedBread, GiChocolateBar } from "react-icons/gi";
import { IoFishSharp } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa6";
import { PiCheeseBold } from "react-icons/pi";
import { LuPizza } from "react-icons/lu";
import '../css/NavCategorias.css';


function BarraNavegador() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><BiSolidFridge color='lightblue' fontSize={'15vh'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='nav-categorias' href="#home">Home</Nav.Link>
                        <NavDropdown className='nav-categorias' title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item className='nav-categorias' href="#action/3.1">
                                <GiMeat className='nav-categoria-icons'/> Carne de res
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.2">
                                <GiChickenLeg className='nav-categoria-icons'/> Carne de pollo
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.3">
                                <IoFishSharp className='nav-categoria-icons'/> Carne de pescado
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.4">
                                <GiNoodles className='nav-categoria-icons'/> Pastas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.4">
                                <GiFruitBowl className='nav-categoria-icons'/> Verduras/Frutas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.4">
                                <GiSlicedBread className='nav-categoria-icons'/> Panificados
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.4">
                                <FaRegSnowflake className='nav-categoria-icons'/> Hielo
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.4">
                                <GiChocolateBar className='nav-categoria-icons'/> Postres
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.4">
                                <LuPizza className='nav-categoria-icons'/> Precocidos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='nav-categorias' href="#action/3.4">
                                <PiCheeseBold className='nav-categoria-icons'/> Fiambres/Quesos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <BiSolidFridge color='red' fontSize={'15vh'} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraNavegador;