import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import api from '../../api';
import { connect } from 'react-redux';

const FileUpload = (props) => {
  const fileList1 = props.fileList ? props.fileList : []
  const [fileList, setFileList] = useState(fileList1);
  console.log(fileList1, props.fileList);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    props.afterUpload(newFileList)
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const count = props.max ? props.max : 1;

  return (
    <ImgCrop rotate key={props.key}>
      <Upload
        action={ api + 'media/saveFileToStorage?token=' + props.userData.token }
        listType="picture-card"
        fileList={fileList}
        
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < count && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

const mapStateToProps = (state) => {
    return {
        userData: state.login.userData
    }
}

const mapDispatchToProps = {
  }
  
// ReactDOM.render(<FileUpload />, mountNode);
export default connect(mapStateToProps,mapDispatchToProps)(FileUpload);