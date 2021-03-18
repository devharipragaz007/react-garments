import React, { PureComponent, Fragment } from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import { getRequest } from '../../../helpers/apihelper';
import { seo } from '../../../helpers/default';
import { withRouter } from 'react-router';



class ListAddLess extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            columns : [
                {
                  title: 'Name',
                  dataIndex: 'name',
                  width : "300px",
                  key: 'name',
                  defaultSortOrder: 'ascend',
                  render: (text, record) => <p>{ text }</p>,
                },
                {
                  title: 'Calculate Type',
                  dataIndex: 'calculate_type',
                  width : "300px",
                  key: 'calculate_type',
                  defaultSortOrder: 'ascend',
                  render : (text, row) => 
                    <p>{ text.toUpperCase() }</p>
                  
                },
                {
                  title: 'Type',
                  dataIndex: 'type',
                  width : "300px",
                  key: 'type',
                  defaultSortOrder: 'ascend',
                  render : (text, row) => 
                    <p>{ text.toUpperCase() }</p>
                },
                {
                  title: 'Value',
                  dataIndex: 'value',
                  width : "300px",
                  key: 'value',
                  defaultSortOrder: 'ascend',
                  render : (text, record) => 
                    <p>{ text + (record.type === "percent" ? " %" : "") }</p>
                  
                },
                {
                  title: 'Status',
                  key: 'status',
                  width : "250px",
                  dataIndex: 'status',
                  defaultSortOrder: 'ascend',
                  render: status => (
                    <>
                    <Tag color={ status === "inactive" ? "error" : "green" } key={status}>
                      { status ? status.toUpperCase() : ""}
                    </Tag>
                    </>
                  ),
                },
                {
                  title: 'Action',
                  key: 'action',
                  width : "250px",
                  defaultSortOrder: 'ascend',
                  render: (text, record) => (
                    <Space size="middle">
                      <Button type="primary" onClick={ () => this.editAddLess(record.id) } icon={<EditOutlined />} size="middle" />
                      <Button type="default" color="error" danger onClick={ () => this.deleteAddLess(record) }  icon={<DeleteOutlined />} size="middle" />
                    </Space>
                  ),
                },
              ],
              data : [],
              dataArrived : false
        }
    }

    editAddLess = (id)=> {
      console.log(id);
      this.props.history.push('/masters/edit_addless/' + id)
    }

    confirmDelete = (id) => {
      getRequest('masters/deleteAddLess?id=' + id).then(data => {
        if(data.status === "info")
        {
          this.props.history.go(0)
        }
      })
    }

    deleteAddLess = (user)=> {
      const id = user.id
      console.log(id);
      const name = user.name ;
      Modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: 'Are you sure want to delete ' + name + " ?",
        okText: 'Yes',
        cancelText: 'No',
        onOk : () => this.confirmDelete(id)
      });
    }

    componentDidMount = () => {
      seo({
          title: 'List Add Less',
          metaDescription: 'List Add Less'
        });
        getRequest('masters/getAllAddLesss').then(data => {
          if(data.status === "success")
          {
            this.setState({
              ...this.state,
              data : data.data,
            })
          }
        })
      // }
    }

    render(){
        return(
          <Fragment>
            <div className="row">
              <div className="col-md-10"></div>
              <div className="col-md-2" align="right">
                <Button type="primary" onClick={ () => { this.props.history.push("/masters/add_addless") } }> Add </Button>
              </div>
              <br/>
              <br/>
            </div>
            <Table className="table-scroll" columns={this.state.columns}  dataSource={this.state.data} />
          </Fragment>
        )
    }
}


export default withRouter(ListAddLess);