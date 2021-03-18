import React, { PureComponent, Fragment } from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';


class LocalizedModal extends React.Component {
    state = { visible: false };
  
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    hideModal = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            Confirmation
          </Button>
          <Modal
            title="Confirmation"
            visible={this.state.visible}
            onOk={this.hideModal}
            onCancel={this.hideModal}
            okText="Yes"
            cancelText="No"
          >
            <p>Are you sure want to delete ?</p>
          </Modal>
        </>
      );
    }
  }
  