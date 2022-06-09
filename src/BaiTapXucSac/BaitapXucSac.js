import React, { Component } from 'react'
import KetQua from './KetQua'
import TaiXiu from './TaiXiu'
import './BaitapXucSac.css'
import { connect } from 'react-redux'
class BaitapXucSac extends Component {
  render() {
    const{datCuoc,playGame}=this.props;
    
    return (
      <div className="game" >
          <h1 className='text-center'>Bài Tập Xúc Sắc</h1>
          <div className="row text-center">
              <div className="col-4">
                <button onClick={()=>{datCuoc(true)}} className='btnTaiXiu'>Tài</button>
              </div>
              <div className="col-4">
                <TaiXiu></TaiXiu>
               
              </div>
              <div className="col-4">
                <button onClick={()=>{datCuoc(false)}} className='btnTaiXiu'>Xỉu</button>
              </div>
                <div className="col KetQua">
                <KetQua></KetQua>
                <button onClick={()=>{playGame()}} className='btn btn-success'>PlayGame</button>
                </div>
          </div>
      </div>
    )
  }
}
const mapDispathchToProps=(dispatch)=>{
  return{
    datCuoc:(datcuoc)=>{
      const action={type:"DAT_CUOC",datcuoc};
      dispatch(action);
      
    },
    playGame:()=>{
      const action={type:"PLAY_GAME"};
      dispatch(action);
      
    }
  }
}
export default connect(null,mapDispathchToProps)(BaitapXucSac)