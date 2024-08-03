import {Button, Card, Col, Row } from 'antd';
import React, {useEffect, useState} from 'react';
import lodash from "lodash";
import {ReloadOutlined} from '@ant-design/icons';
interface FilterContainerProps{
    filter: any;
    onSearch:(filter: any)=> any;
    onReset:()=> any;
    children:any;
    loading:boolean;
}
function FilterSearchContainer(props: FilterContainerProps){
    const {filter, onSearch, onReset, children, loading} = props;
    const [isCaptcha, setCaptcha] = useState<boolean>(false);
    const recaptchaRef = React.createRef<any>();
    // useEffect(()=>{
    //     recaptchaRef?.current?.reset();
    // });
    const onChange=()=>{
        setCaptcha(true);
    }
    const handleSearch=()=>{
        recaptchaRef?.current?.reset();
        setCaptcha(false);
        onSearch(filter);
    }
    const handleReset=()=>{
        recaptchaRef?.current?.reset();
        setCaptcha(false);
        onReset();
    }
    return <div className={'mgbt10'}>
        <span className={'txt-size-h5 txt-color-black robotomedium mgbt10'}>
					{'Nhập thông tin tra cứu'}
				</span>
        <div className={'pdl10 mgt10'}>{children}</div>

        <Row className={'align-items-center justify-content-between mgt15'}>
            <Col>
                {!lodash.isEmpty(filter) &&
                    <span onClick={handleReset} className={'mgr20 cursor-pointer txt-size-h8 robotoregular txt-color-gray refresh-filter-btn'}>
                        <ReloadOutlined className={''}/> &nbsp;
                        {'Refresh'}</span>}
                <Button
                    disabled={!isCaptcha}
                    className={'border-radius6 _btn-search'}
                    type={"primary"}
                    ghost
                    loading={loading}
                    onClick={handleSearch}
                >
                    <i className="fal fa-search txt-size-h7 mgr5"/>
                    <span className={'txt-size-h7 robotoregular'}>{'Tra cứu'}</span>

                </Button>
            </Col>
        </Row>
    </div>
}
export default FilterSearchContainer;
