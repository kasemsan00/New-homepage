import "./assets/App.css";
import Logo from "./Logo";
import Menu from "./Menu/Menu";
import ContentRight from "./MainContent/ContentRight";
import MainContent from "./MainContent/MainContent";
import ArticleContent from "./Article/ArticleContent";
import MenuHamburger from "./Menu/MenuHamburger";

export default function App() {
    return (
        <div className="app">
            <div className="top-menu">
                <Logo />
                <Menu />
                <MenuHamburger />
            </div>
            <MainContent />
            <ArticleContent />
        </div>
    );
}
