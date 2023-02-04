import ArticleItem from "./ArticleItem";

export default function ArticleContent() {
    return (
        <div className="article-content">
            <ArticleItem image={"..."} number={"01"} title={"Reviving Retro PCs"} content={"What happens when old PCs are given modern upgrades"} />
            <ArticleItem image={"..."} number={"02"} title={"Top 10 Laptops of 2022"} content={"Our best picks for various needs and budgets"} />
            <ArticleItem image={"..."} number={"03"} title={"The Growth of Gaming"} content={"How the pandemic has sparked fresh opportunities"} />
        </div>
    );
}
