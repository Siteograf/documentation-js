import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactTable from 'react-table';
import { Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { productDeleteById } from './_actions/productActions';
import Img from './../utils/img/img';

class ProductListTable extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(id) {
    this.props.productDeleteById(id);
  }

  columns() {
    return [
      {
        Header: 'Image',
        id: 'image',
        accessor: el => <Img pid={el.image[0].pid} />,
      },
      {
        Header: 'Id',
        accessor: '_id', // String-based value accessors!
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Catalog',
        accessor: 'catalog',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Actions',
        id: 'act',
        accessor: el => (
          <div>
            <Link to={`/product/${el._id}`}>View</Link>{' '}
            <Link to={`/product/edit/${el._id}`}>Edit</Link>
            <Button color="link" size="sm" onClick={() => this.delete(el._id)}>Delete</Button>
          </div>
        ),
      },
    ];
  }

  table() {
    return (
      <div>
        <ReactTable
          className="light border"
          data={this.props.productList}
          columns={this.columns()}
          minRows={0}
          defaultPageSize={30}
          showPagination={this.props.productList.length > 30}
        />
      </div>
    );
  }

  render() {
    return _.isEmpty(this.props.productList) ? <span>No products</span> : this.table();
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
});

const mapDispatchToProps = dispatch => ({
  productDeleteById: productId => dispatch(productDeleteById(productId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListTable));
