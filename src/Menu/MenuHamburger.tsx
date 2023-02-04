import { useRef } from "react";

export default function MenuHamburger() {
    const menuHamburgerRef = useRef<HTMLDivElement>(null);

    const handleShowMenu = () => {
        if (menuHamburgerRef.current) {
            menuHamburgerRef.current.classList.toggle("hide-menu");
        }
    };

    return (
        <>
            <div className="menu-hamburger-button" onClick={handleShowMenu}>
                <img alt="menu" src={"../../images/icon-menu.svg"} />
            </div>
            <div className="menu-hamburger hide-menu" ref={menuHamburgerRef}>
                <div className="menu-hamburger-close" onClick={handleShowMenu}>
                    <img alt="menu-hamburger" src={"../../images/icon-menu-close.svg"} />
                </div>
                <ul className="menu-list menu-list-hamburger">
                    <li className="menu-list-hamburger-item">Home</li>
                    <li className="menu-list-hamburger-item">New</li>
                    <li className="menu-list-hamburger-item">Popular</li>
                    <li className="menu-list-hamburger-item">Trending</li>
                    <li className="menu-list-hamburger-item">Categories</li>
                </ul>
            </div>
        </>
    );
}
