import React, { PureComponent, Fragment } from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { getRequest, deleteRequest } from '../../../helpers/apihelper';
import { seo } from '../../../helpers/default';
import { withRouter } from 'react-router';
import DataTable from '../../../components/Datatable/Datatable';

class ListLedger extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'S.No',
          dataIndex: 'sno',
          width: "300px",
          key: 'sno',
          defaultSortOrder: 'ascend',
          // render: (text, record) => <p>{ 1 }</p>,
        },
        {
          title: 'Ledger',
          dataIndex: 'ledger',
          width: "300px",
          key: 'ledger',
          defaultSortOrder: 'ascend',
          render: (text, record) => <p>{text}</p>,
        },
        {
          title: 'Address',
          dataIndex: 'Address',
          width: "300px",
          key: 'Address',
          defaultSortOrder: 'ascend',
          // render : (text, row) => 
          //   <p>{ text.toUpperCase() }</p>

        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          width: "300px",
          key: 'mobile',
          defaultSortOrder: 'ascend',
          // render : (text, row) => 
          //   <p>{ text.toUpperCase() }</p>
        },
        {
          title: 'GST',
          dataIndex: 'gstno',
          width: "300px",
          key: 'gstno',
          defaultSortOrder: 'ascend',
        },
        {
          title: 'Ledger Group',
          dataIndex: 'ledger_group',
          width: "300px",
          key: 'ledger_group',
          defaultSortOrder: 'ascend',
        },
        {
          title: 'Ledger Category',
          dataIndex: 'ledger_category',
          width: "300px",
          key: 'ledger_category',
          defaultSortOrder: 'ascend',
        },
        {
          title: 'Status',
          key: 'status',
          width: "250px",
          dataIndex: 'status',
          defaultSortOrder: 'ascend',
          // render: status => (
          //   <>
          //   <Tag color={ status === "inactive" ? "error" : "green" } key={status}>
          //     { status ? status.toUpperCase() : ""}
          //   </Tag>
          //   </>
          // ),
        },
        {
          title: 'Action',
          key: 'action',
          width: "250px",
          defaultSortOrder: 'ascend',
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => this.editLedger(record.id)} icon={<EditOutlined />} size="middle" />
              <Button type="default" color="error" danger onClick={() => this.deleteLedger(record)} icon={<DeleteOutlined />} size="middle" />
            </Space>
          ),
        },
      ],
      data: [],
      dataArrived: false
    }
  }

  editLedger = (id) => {
    console.log(id);
    this.props.history.push('/masters/edit_ledger/' + id)
  }

  confirmDelete = (id) => {
    deleteRequest('masters/ledger?id=' + id).then(data => {
      if (data.status === "info") {
        this.props.history.go(0)
      }
    })
  }

  deleteLedger = (user) => {
    const id = user.id
    console.log(id);
    const name = user.name;
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
      title: 'List Ledger',
      metaDescription: 'List Ledger'
    });
    getRequest('masters/ledger').then(data => {
      if (data.status === "success") {
        var newData = [];
        data.data.map(dt => {
          var newArr = [];
          Object.entries(dt).map(item => {
            newArr.push(item[1]);
          })
          newData.push(newArr);
        })
        this.setState({
          ...this.state,
          data: newData,
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
            <Button type="primary" onClick={() => { this.props.history.push("/masters/add_ledger") }}> Add </Button>
          </div>
          <br />
          <br />
        </div>
        {/* <Table className="table-scroll" columns={this.state.columns}  dataSource={this.state.data} /> */}
        <DataTable columns={this.state.columns} dataSource={this.state.data}></DataTable>
      </Fragment>
    )
  }
}


export default withRouter(ListLedger);