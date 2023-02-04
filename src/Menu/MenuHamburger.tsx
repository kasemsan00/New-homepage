import { useRef } from "react";

export default function MenuHamburger() {
    const menuHamburgerRef = useRef<HTMLDivElement>(null);
    const menuHamburgerPanelRef = useRef<HTMLDivElement>(null);

    const handleShowMenu = () => {
        if (menuHamburgerRef.current) {
            menuHamburgerRef.current.classList.toggle("hide-menu");
        }
        if (menuHamburgerPanelRef.current) {
            menuHamburgerPanelRef.current.classList.toggle("hidden");
        }
    };

    return (
        <>
            <div className="menu-hamburger-button" onClick={handleShowMenu}>
                <img alt="menu" src={"../../images/icon-menu.svg"} />
            </div>
            <div className="menu-hamburger-panel hidden" ref={menuHamburgerPanelRef}>
                <div className="back-drop"></div>
                <div className="menu-hamburger ">
                    <div className="menu-hamburger-close" onClick={handleShowMenu}>
                        <img alt="menu-hamburger" src={"../../images/icon-menu-close.svg"} />
                    </div>
                    <ul className="menu-list-hamburger">
                        <li className="menu-list-hamburger-item">Home</li>
                        <li className="menu-list-hamburger-item">New</li>
                        <li className="menu-list-hamburger-item">Popular</li>
                        <li className="menu-list-hamburger-item">Trending</li>
                        <li className="menu-list-hamburger-item">Categories</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
