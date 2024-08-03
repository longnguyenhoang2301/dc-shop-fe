import {Button, Card, Col, Row } from 'antd';
import React from 'react';
import lodash from "lodash";
import {ReloadOutlined} from '@ant-design/icons';
interface FilterContainerProps{
    filter: any;
    onSearch:(filter: any)=> any;
    onReset:()=> any;
    children:any;
}
function FilterContainer(props: FilterContainerProps){
    const {filter, onSearch, onReset, children} = props;
    return <Card className={'mgbt10'}>
        <span className={'txt-size-h5 txt-color-black robotomedium mgbt10'}>
					{'Tìm kiếm'}
				</span>
        <div className={'pdl10 mgt10'}>{children}</div>
        <Row className={'align-items-center justify-content-end mgt15'}>
            <Col>
                {!lodash.isEmpty(filter) &&
                    <span onClick={onReset} className={'mgr20 cursor-pointer txt-size-h8 robotoregular txt-color-gray refresh-filter-btn'}>
                        <ReloadOutlined className={''}/> &nbsp;
                        {'Refresh'}</span>}
                <Button
                    className={'border-radius6 _btn-search'}
                    type={"primary"}
                    ghost
                    onClick={() => onSearch({...filter, page: 0})}
                >
                    <i className="fal fa-search txt-size-h7 mgr5"/>
                    <span className={'txt-size-h7 robotoregular'}>{'Tìm kiếm'}</span>

                </Button>
            </Col>
        </Row>
    </Card>
}
export default FilterContainer;
