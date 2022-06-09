import React, { Component } from 'react'
import { connect } from 'react-redux'
 class TaiXiu extends Component {
   render() {
    const{XucXac}=this.props;
    return (
      <div>
        {XucXac.map((XucXac,index)=>{
          return <img key={index} className='mx-2' style={{width:40,height:40}} src={XucXac.img} alt={XucXac.img} />
        })}
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return{
    XucXac: state.BaiTapXucSacReducer.XucXac,
  };
};
export default connect(mapStateToProps)(TaiXiu)
