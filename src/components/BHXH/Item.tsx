import React from "react";
import {Row} from "antd";
interface Props{
    title:any;
    value:any;
}
const ItemMobile=(props: Props)=>{
    const {title, value} = props;
    return <Row className={'justify-content-between'}><span>{title}:</span><span className={'robotomedium'}>{value}</span></Row>

}
export default ItemMobile;
