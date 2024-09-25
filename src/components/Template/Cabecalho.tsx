import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import Carrinho from "./Carrinho";

export default function Cabecalho() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    <Logo />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleOffcanvas}
                    aria-controls="offcanvasNavbar"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} id="offcanvasNavbar" style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Padaria Seu Pizza</h5>
                        <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link href="#home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#produtos" className="nav-link">Produtos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="#" className="nav-link dropdown-toggle" role="button" onClick={toggleOffcanvas}>
                                    Categorias
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link href="#doces" className="dropdown-item">Doces</Link></li>
                                    <li><Link href="#salgados" className="dropdown-item">Salgados</Link></li>
                                    <li><Link href="#paes" className="dropdown-item">Tipos de Pães</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="#contatos" className="nav-link">Contatos</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#localizacao" className="nav-link">Localização</Link>
                            </li>
                        </ul>
                        <div className="navbar-icons">
                            <Carrinho /> {/* Usando o componente Carrinho */}
                            <Link href="/login" className="nav-link">
                                <i className="fas fa-sign-in-alt"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
