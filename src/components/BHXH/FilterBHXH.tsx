import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Col, DatePicker, Input, InputNumber, Row, Select, Image, Button} from "antd";
import moment from "moment";
import FilterContainer from "../Filter";
import {handleChangeRangeDate, handleInputChange} from "../../utils/StringUtils";
import lodash from "lodash";
import {PROFILE_KEY, STANDARD_DATE_FORMAT, STATUS_BHXH} from "../../core/configs/consts";
interface FilterProps{
    filter: any;
    setFilter: Dispatch<SetStateAction<any>>;
    onSearch: (filter: any)=> void;
    onReset:()=> void;
    solutions:any;
    users:any;
    departments:any;
}
function FilterBHXH(props: FilterProps){
    const {filter, onSearch, onReset, setFilter, solutions, users, departments} = props;
    const isTabletOrMobile = false;
    return <FilterContainer filter={filter} onSearch={onSearch} onReset={onReset}>
        <Row gutter={16}  className={isTabletOrMobile?'dpl-block':'dpl-flex'}>

            <Col lg={6} md={24}>
                <Row><span>Mã số BHXH</span></Row>
                <Input value={lodash.get(filter,'ma_so_bhxh','')}
                       onChange={(e)=> handleInputChange('ma_so_bhxh', e.target.value, filter, setFilter)}
                ></Input>
            </Col>
            <Col lg={6} md={24}>
                <Row><span>Tên khách hàng</span></Row>
                <Input value={lodash.get(filter,'ho_ten','')}
                       onChange={(e)=> handleInputChange('ho_ten', e.target.value, filter, setFilter)}
                ></Input>
            </Col>
            <Col lg={6} md={24}>
                <Row><span>Trạng thái</span></Row>
                <Select placeholder={'Chọn trạng thái'}
                        allowClear
                        value={lodash.get(filter,'trang_thai_thanh_toan', undefined)}
                        className={'width100'}
                        onChange={(value: string)=> handleInputChange('trang_thai_thanh_toan', value, filter, setFilter) }>
                    {STATUS_BHXH.map((x: any)=>{
                        return  <Select.Option key={x.code} value={x.code}>{x.name}</Select.Option>

                    })}
                </Select>
            </Col>
            <Col lg={6} md={24}>
                <Row><span>Phương án</span></Row>
                <Select placeholder={'Chọn phương án'}
                        allowClear
                        value={lodash.get(filter,'phuong_an', undefined)}
                        className={'width100'}
                        onChange={(value: string)=> handleInputChange('phuong_an', value, filter, setFilter) }>
                    {solutions?.map((x: any)=>{
                        return  <Select.Option key={x.Value} value={x.Value}>{x.Text} <span className={'txt-color-gray'}>({x.Value})</span></Select.Option>
                    })}
                </Select>
            </Col>
            {/*{profile.ma_donvi==='00' && <Col lg={6} md={24}>*/}
            {/*    <Row><span>Đơn vị</span></Row>*/}
            {/*    <Select placeholder={'Chọn đơn vị'}*/}
            {/*            allowClear*/}
            {/*            showSearch*/}
            {/*            filterOption={(input, option: any) => {*/}
            {/*                return option.title.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0 ||*/}
            {/*                    option.key.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;*/}
            {/*            }*/}
            {/*            }*/}
            {/*            value={lodash.get(filter, 'ma_donvi', undefined)}*/}
            {/*            className={'width100'}*/}
            {/*            onChange={(value: string) => handleInputChange('ma_donvi', value, filter, setFilter)}>*/}
            {/*        {departments?.map((x: any) => {*/}
            {/*            return <Select.Option title={x.Text} key={x.Value} value={x.Value}>{x.Text} <span*/}
            {/*                className={'txt-color-gray'}>({x.Value})</span></Select.Option>*/}
            {/*        })}*/}
            {/*    </Select>*/}
            {/*</Col>*/}
            {/*}*/}
            <Col md={24} lg={8}  className={''}>
                <Row><span>Ngày đăng ký</span></Row>
                <DatePicker.RangePicker
                    className={'width100'}
                    onChange={(date: any, dateString: any) => {
                        handleChangeRangeDate(dateString, 'tu_ngay', 'den_ngay', filter, setFilter);
                    }}
                    //@ts-ignore
                    value={[filter?.tu_ngay?moment(filter.tu_ngay, STANDARD_DATE_FORMAT):null, filter?.den_ngay?moment(filter.den_ngay, STANDARD_DATE_FORMAT):null]}
                    format={STANDARD_DATE_FORMAT} />
            </Col>
        </Row>
    </FilterContainer>
}
export default FilterBHXH;
