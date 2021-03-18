import React, { PureComponent, Fragment } from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { getRequest, deleteRequest } from '../../../helpers/apihelper';
import { seo } from '../../../helpers/default';
import { withRouter } from 'react-router';
// import DataTable from '../../../components/Datatable/Datatable';

class ListProductCategory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
      
        {
          title: 'Product Category',
          dataIndex: 'product_category',
          width: "300px",
          key: 'product_category',
          defaultSortOrder: 'ascend',
          render: (text, record) => <p>{text}</p>,
        },
       
        {
          title: 'Action',
          key: 'action',
          width: "250px",
          defaultSortOrder: 'ascend',
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => this.editProduct_Category(record.id)} icon={<EditOutlined />} size="middle" />
              <Button type="default" color="error" danger onClick={() => this.deleteProduct_Category(record)} icon={<DeleteOutlined />} size="middle" />
            </Space>
          ),
        },
      ],
      data: [],
      dataArrived: false
    }
  }

  editProduct_Category = (id) => {
    console.log(id);
    this.props.history.push('/masters/edit_product_category/' + id)
  }

  confirmDelete = (id) => {
    deleteRequest('masters/product_category?id=' + id).then(data => {
      if (data.status === "info") {
        this.props.history.go(0)
      }
    })
  }

  deleteProduct_Category = (user) => {
    const id = user.id
    console.log(id);
    const name = user.product_category;
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure want to delete ' + name + " ?",
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => this.confirmDelete(id)
    });
  }

  componentDidMount = () => {
    seo({
      title: 'List Product Category',
      metaDescription: 'List Product Category'
    });
    getRequest('masters/product_category').then(data => {
      if (data.status === "success") {
        this.setState({
          ...this.state,
          data: data.data,
        })
      }
    })
    // }
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2" align="right">
            <Button type="primary" onClick={() => { this.props.history.push("/masters/add_product_category") }}> Add </Button>
          </div>
          <br />
          <br />
        </div>
        <Table className="table-scroll" columns={this.state.columns}  dataSource={this.state.data} />
        {/* <DataTable columns={this.state.columns} dataSource={this.state.data}></DataTable> */}
      </Fragment>
    )
  }
}


export default withRouter(ListProductCategory);