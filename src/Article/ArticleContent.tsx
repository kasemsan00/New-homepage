import ArticleItem from "./ArticleItem";

export default function ArticleContent() {
    return (
        <div className="article-content">
            <ArticleItem
                imagePath={"../../images/image-retro-pcs.jpg"}
                number={"01"}
                title={"Reviving Retro PCs"}
                content={"What happens when old PCs are given modern upgrades"}
            />
            <ArticleItem
                imagePath={"../../images/image-top-laptops.jpg"}
                number={"02"}
                title={"Top 10 Laptops of 2022"}
                content={"Our best picks for various needs and budgets"}
            />
            <ArticleItem
                imagePath={"../../images/image-gaming-growth.jpg"}
                number={"03"}
                title={"The Growth of Gaming"}
                content={"How the pandemic has sparked fresh opportunities"}
            />
        </div>
    );
}
