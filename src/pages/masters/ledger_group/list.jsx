import React, { PureComponent, Fragment } from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { getRequest, deleteRequest } from '../../../helpers/apihelper';
import { seo } from '../../../helpers/default';
import { withRouter } from 'react-router';
// import DataTable from '../../../components/Datatable/Datatable';

class ListLedgerGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
      
        {
          title: 'Ledger Group',
          dataIndex: 'ledger_group',
          width: "300px",
          key: 'ledger_group',
          defaultSortOrder: 'ascend',
          render: (text, record) => <p>{text}</p>,
        },
        {
          title: 'drcr',
          dataIndex: 'drcr',
          width: "300px",
          key: 'drcr',
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
              <Button type="primary" onClick={() => this.editLedger_Group(record.id)} icon={<EditOutlined />} size="middle" />
              <Button type="default" color="error" danger onClick={() => this.deleteLedger_Group(record)} icon={<DeleteOutlined />} size="middle" />
            </Space>
          ),
        },
      ],
      data: [],
      dataArrived: false
    }
  }

  editLedger_Group = (id) => {
    console.log(id);
    this.props.history.push('/masters/edit_ledger_group/' + id)
  }

  confirmDelete = (id) => {
    deleteRequest('masters/ledger_group?id=' + id).then(data => {
      if (data.status === "info") {
        this.props.history.go(0)
      }
    })
  }

  deleteLedger_Group = (user) => {
    const id = user.id
    console.log(id);
    const name = user.ledger_group;
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
      title: 'List Ledger Group',
      metaDescription: 'List Ledger Group'
    });
    getRequest('masters/ledger_group').then(data => {
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
            <Button type="primary" onClick={() => { this.props.history.push("/masters/add_ledger_group") }}> Add </Button>
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


export default withRouter(ListLedgerGroup);