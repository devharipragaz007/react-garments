import React, { PureComponent, Fragment } from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { getRequest, deleteRequest } from '../../../helpers/apihelper';
import { seo } from '../../../helpers/default';
import { withRouter } from 'react-router';
// import DataTable from '../../../components/Datatable/Datatable';

class ListLedgerCategory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
      
        {
          title: 'Ledger Category',
          dataIndex: 'ledger_category',
          width: "300px",
          key: 'ledger_category',
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
              <Button type="primary" onClick={() => this.editLedger_Category(record.id)} icon={<EditOutlined />} size="middle" />
              <Button type="default" color="error" danger onClick={() => this.deleteLedger_Category(record)} icon={<DeleteOutlined />} size="middle" />
            </Space>
          ),
        },
      ],
      data: [],
      dataArrived: false
    }
  }

  editLedger_Category = (id) => {
    console.log(id);
    this.props.history.push('/masters/edit_ledger_category/' + id)
  }

  confirmDelete = (id) => {
    deleteRequest('masters/ledger_category?id=' + id).then(data => {
      if (data.status === "info") {
        this.props.history.go(0)
      }
    })
  }

  deleteLedger_Category = (user) => {
    const id = user.id
    console.log(id);
    const name = user.ledger_category;
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
      title: 'List Ledger Category',
      metaDescription: 'List Ledger Category'
    });
    getRequest('masters/ledger_category').then(data => {
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
            <Button type="primary" onClick={() => { this.props.history.push("/masters/add_ledger_category") }}> Add </Button>
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


export default withRouter(ListLedgerCategory);