import {
  allBookDeleted,
  bookAddedToCard,
  bookDeletedFromCard,
} from "../../actions";
import "./ShoppingCardTable.css";
import { connect } from "react-redux";

const ShoppingCardTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash" />
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-card-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: {total} KZT</div>
    </div>
  );
};

const mapStateToProps = ({ cardData, orderTotal }) => {
  return {
    items: cardData,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCard,
  onDecrease: bookDeletedFromCard,
  onDelete: allBookDeleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable);
