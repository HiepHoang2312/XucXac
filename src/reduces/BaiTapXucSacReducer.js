const initialState={
    KetQua:true,
    XucXac:[
        {value:1,img:'./img/1.png'},
        {value:1,img:'./img/1.png'},
        {value:1,img:'./img/1.png'},
    ],
    soBanThang:0,
    soBanChoi:0,
}
const BaiTapXucSacReducer=(state=initialState, action)=>{
    console.log(action);
    switch (action.type) {
        case "DAT_CUOC":{
            return{...state,KetQua:action.datcuoc};
        }
        case"PLAY_GAME":{
            let XucXacnew=[];
            for (let i=0;i<3;i++){
                let random=Math.floor(Math.random()*6)+1;
                let XucXacrandom={value:random,img:`./img/${random}.png`};
                XucXacnew.push(XucXacrandom);
            }
            state.soBanChoi +=1;
            let TongXucXac =XucXacnew.reduce((tongdiem,XucXac,index)=>{
                return tongdiem +=XucXac.value;
            },0);
            if((TongXucXac>10 &&state.KetQua===true)||(TongXucXac<=10 &&state.KetQua===false)){
                state.soBanThang +=1;
                alert("bạn thắng");
            }
            return {...state,XucXac:XucXacnew}
        }
        default:
            return {...state};
    }
}
export default BaiTapXucSacReducer;