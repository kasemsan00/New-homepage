interface Props {
    image: string;
    number: string;
    title: string;
    content: string;
}

export default function ArticleItem({ image, number, title, content }: Props) {
    return (
        <div className="article-item">
            <div className="article-item-image">{image}</div>
            <div className="article-item-detail">
                <div className="article-item-number">{number}</div>
                <div className="article-item-header">{title}</div>
                <div className="article-item-content">{content}</div>
            </div>
        </div>
    );
}
