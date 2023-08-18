import "./BookListItem.css";

const BookListItem = (props) => {
  const { title, author, price, coverImage } = props.book;
  const { onAddedToCard } = props;
  return (
    <div className="book-list-item">
      <div className="book-list-cover">
        <img src={coverImage} alt="cover" className="book-cover"></img>
      </div>
      <div className="book-details">
        <a href="https://google.com" className="book-title">
          {title}
        </a>
        <div className="book-author">{author} </div>
        <div className="book-price">{price} KZT</div>
        <button className="btn btn-info add-to-card" onClick={onAddedToCard}>
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
