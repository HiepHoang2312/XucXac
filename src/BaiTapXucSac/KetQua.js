import React, { Component } from 'react'
import { connect } from 'react-redux'
 class KetQua extends Component {
  render() {
    const {KetQua,SoBanThang,soBanChoi}=this.props;
    return (
      <div>
      <div>
        Bạn chọn: <span className='text-danger'>{KetQua?'Tài':'Xỉu'}</span>
      </div>
      <div>
       Số bàn thắng: <span className='text-success'>{SoBanThang}</span>
      </div>
      <div>
        Tổng số bàn chơi: <span className='text-primary'>{soBanChoi}</span>
      </div>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return{
    SoBanThang: state.BaiTapXucSacReducer.soBanThang,
    soBanChoi: state.BaiTapXucSacReducer.soBanChoi,
    KetQua: state.BaiTapXucSacReducer.KetQua,
  };
};
export default connect(mapStateToProps)(KetQua)