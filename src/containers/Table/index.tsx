import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../components';
import { Badge, Button, Card, Divider, List, Popconfirm, Row, Skeleton, Space, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { bhxhRepository } from '../../repositories/TableRepositories';
import lodash from "lodash";

const Table = () => {
    const [total, setTotal] = useState(0);
    const [dataSource, setDatasource] = useState([])

    useEffect(() => {
        let temp = {
            CpId: "BHXH",
            So_cmt: "",
            den_ngay: "31/07/2024",
            den_ngay_bienlai_dt: "",ho_ten: "",
            ma_ctu: "BHXH",
            ma_donvi: "00",
            ma_so_bhxh: "",
            ma_user: "1000014610",
            ma_user_nvt: "",
            phuong_an: "",
            so_bien_lai_dt: "",
            trang_thai_thanh_toan: "",
            tu_ngay: "05/06/2024",
        };
        getData(temp)
    }, [])

    const getData = (filter: any) => {
        bhxhRepository.getList({
            ...filter,
            ma_ctu: 'BHXH'
        }).then(res => {
            let total = lodash.sumBy(res, 'tong_tien_NTG_dong');
            setTotal(total);
            setDatasource(res);
        }).catch(err => {
            setDatasource([]);
        })
    };

    return (
        <MainLayout>
        <div>
            <Card>
                <Row className='align-items-center justify-content-between mgbt20'>
                    <Space>
                        <h3 className='robotomedium mg-0 fsz-16 line-h-24 txt-color-black'>
                            Danh sách bảo hiểm xã hội
                        </h3>
                        <Badge
                            overflowCount={99999999999}
                            showZero={false}
                            count={0}
                            style={{backgroundColor: 'gray'}}
                        />
                    </Space>
                    <Space>
                        <Button onClick={() => window.open('https://bhxh.pvi.com.vn/file_download/BHXH.xlsx', '_blank')}
                                type={'default'} icon={<i
                            className="far fa-download mgr5"></i>}>Tải file mẫu</Button>
                        <Button onClick={() => {}} type={'default'} icon={<i
                            className="fal fa-upload mgr5"></i>}>Import excel</Button>
                        {/*<Button onClick={() => navigate('/bhxh/create')} type={'primary'} icon={<i*/}
                        {/*    className="far fa-plus-circle mgr5"></i>}>Thêm*/}
                        {/*    mới</Button>*/}
                    </Space>
                </Row>
                <Skeleton loading={false}>
                    
                <List dataSource={dataSource} renderItem={(item: any) => {
                            return <Link className={'txt-color-black'} target={'_blank'}
                                         to={`/bhxh/${item.noi_moi ? 'bhxh-new' : 'bhxh-renew'}/${item.pr_key}`}>
                                <div>
                                    <Row className={'align-items-center justify-content-between'}><span
                                        className={'txt-color-blue'}>{`#${item.pr_key}${item.ma_so_bhxh ? ` - ${item.ma_so_bhxh}` : ''}`}</span>
                                        <Space>
                                            <span>{item.trang_thai_thanh_toan}</span>
                                            {item.trang_thai_thanh_toan === 0 && <Popconfirm
                                                placement={'topLeft'}
                                                title="Bạn có chắc muốn xóa dữ liệu này?"
                                                onConfirm={() => {}}
                                                okText="Đồng ý"
                                                cancelText="Hủy"
                                            ><span><i
                                                className="cursor-pointer far fa-trash-alt"></i></span></Popconfirm>
                                            }
                                        </Space></Row>
                                    <Divider type={'horizontal'} style={{marginBottom: 5, marginTop: 5}}></Divider>
                                </div>
                            </Link>
                        }
                            }></List>
            </Skeleton>
        </Card>
    </div>
</MainLayout>
    );
}

export default Table;
