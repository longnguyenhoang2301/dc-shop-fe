import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../components';
import { Badge, Button, Card, Empty, Row, Skeleton, Space, Table, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { STATUS_BHXH } from '../../core/configs/consts';
import { bhxhRepository } from '../../repositories/TableRepositories';
import lodash from "lodash";
import FilterBHXH from '../../components/BHXH/FilterBHXH';

const Friend = () => {
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

    const columns: any = [
        {
            title: 'Mã tờ khai',
            dataIndex: 'pr_key',
            key: 'pr_key',
            width: 100,
            render: (text: any, record: any, index: number) => {
                return <Link target={'_blank'}
                             to={`/bhxh/${record.noi_moi ? 'bhxh-new' : 'bhxh-renew'}/${text}`}>{text}</Link>
            }
        },
        {
            title: 'Nhân viên thu',
            dataIndex: 'ten_nv_thu',
            key: 'ten_nv_thu',
            width: 150,
            render: (text: any, record: any, index: number) => {
                return <span>{text}</span>
            }
        },
        {
            title: 'Họ tên NTG',
            dataIndex: 'ho_ten',
            key: 'ho_ten',
            width: 150,
            render: (text: any, record: any, index: number) => {
                return text;
            }
        },
        {
            title: 'Mã số BHXH',
            dataIndex: 'ma_so_bhxh',
            key: 'ma_so_bhxh',
            width: 130,
            render: (text: any, record: any, index: number) => {
                return text;
            }
        },

        {
            title: 'Phương án',
            dataIndex: 'phuong_an',
            key: 'phuong_an',
            width: 150,
            render: (text: any, record: any, index: number) => {
                return text;
            }
        }, {
            title: 'Ngày đăng ký',
            dataIndex: 'ngay_tao',
            key: 'ngay_tao',
            width: 130,
            render: (text: any, record: any, index: number) => {
                return text;
            }
        },
        {
            title: <span className={'whitespace'}>Loại thù lao chi trả</span>,
            dataIndex: 'noi_moi',
            key: 'noi_moi',
            width: 170,
            render: (text: boolean, record: any, index: number) => {
                return <span>{text ? 'TL tăng mới' : 'TL tái tục'}</span>
            }
        },
        {
            title: <div><span className={'whitespace'}>Tổng số tiền NTG đóng</span><br/>
                <span className={'txt-color-white txt-size-h5'}><i
                    className="far fa-sigma"></i> = {total}</span></div>,
            dataIndex: 'tong_tien_NTG_dong',
            key: 'tong_tien_NTG_dong',
            className: 'txt-right txt-color-green',
            width: 200,
            render: (text: any, record: any, index: number) => {
                return text;
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trang_thai_thanh_toan',
            key: 'trang_thai_thanh_toan',
            width: 150,
            render: (text: number, record: any, index: number) => {
                const status = record.Thanh_toan === 2 ? STATUS_BHXH.find(x => x.code === 7) : STATUS_BHXH.find(x => x.code === text);
                    if (status) {
                        return (
                            <Tooltip title={record.url_bienlai ? 'Xem biên lai' : ''}>
                                <Button
                                    shape="round"
                                    type={'primary'}
                                    onClick={() => {
                                        if (record.url_bienlai)
                                            window.open(record.url_bienlai, '_blank');
                                    }}
                                    style={{backgroundColor: status.color, borderWidth: 0}}
                                    className={`btn__status btn__status--blue btn  _status ${record.url_bienlai ? 'cursor-pointer' : 'cursor-initial'}`}>
                                    {status.name}
                                </Button>
                            </Tooltip>
                        );
                    } else {
                        return <span>{text}</span>;
                    }
            }
        },
    ]
    return (
        <MainLayout>
        <div>
            
            <FilterBHXH departments={departments} users={users} solutions={solutions} setFilter={setFilter}
                        filter={filter} onSearch={onSearch} onReset={onReset}></FilterBHXH>
            <Card>
                <Row className='align-items-center justify-content-between mgbt20'>
                    <Space>
                        <h3 className='robotomedium mg-0 fsz-16 line-h-24 txt-color-green'>
                            Danh sách bảo hiểm xã hội
                        </h3>
                        <Badge
                            overflowCount={99999999999}
                            showZero={false}
                            count={dataSource.length}
                            style={{backgroundColor: 'gray'}}
                        />
                    </Space>
                    <Space>
                        <Button onClick={() => window.open('https://bhxh.pvi.com.vn/file_download/BHXH.xlsx', '_blank')}
                                type={'default'} icon={<i
                            className="far fa-download mgr5"></i>}>Tải file mẫu</Button>
                        <Button onClick={() => {}} type={'default'} icon={<i
                            className="fal fa-upload mgr5"></i>}>Import excel</Button>
                    </Space>
                </Row>
                <Skeleton loading={false}>
                <Table dataSource={dataSource} columns={columns}
                                                locale={{
                                                    emptyText: <Empty
                                                        description={
                                                            <span>Chưa có dữ liệu</span>
                                                        }
                                                    >
                                                        {/*<Button icon={<i className="fal fa-plus-circle mgr5"></i>} onClick={() => navigate('/bhxh/create')}*/}
                                                        {/*        type="primary">Thêm dữ liệu</Button>*/}
                                                    </Empty>
                                                }}
                                                rowKey={1}
                                                pagination={{
                                                    pageSize: 10,
                                                    showSizeChanger: true,
                                                    hideOnSinglePage: true,
                                                    onShowSizeChange: () => {}
                                                }}
                                                scroll={{y: 500}}></Table>
            </Skeleton>
        </Card>
    </div>
</MainLayout>
    );
}

export default Friend;
