interface Props {
  header: string;
  content: string;
}

export default function ContentRight({ header, content }: Props) {
  return (
    <>
      <div className="main-detail-right-header">{header}</div>
      <div className="main-detail-right-content">{content}</div>
    </>
  );
}
