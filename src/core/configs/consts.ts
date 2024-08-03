export const API_BASE_URL: string = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : '';
export const API_BASE_MY_PVI_URL: string = process.env.REACT_APP_API_MY_PVI_URL ? process.env.REACT_APP_API_MY_PVI_URL : '';

export const API_TOKEN_URL: string = process.env.REACT_APP_IAM_API_URL? process.env.REACT_APP_IAM_API_URL:'';
export const APP_ID: string = process.env.REACT_APP_APPID? process.env.REACT_APP_APPID:'';
export const PRIVATE_KEY: string = process.env.REACT_APP_PRIVATE_KEY? process.env.REACT_APP_PRIVATE_KEY:'';

export const INPUT_DEBOUNCE_TIME: number = 400;
export const STANDARD_DATE_FORMAT: string = 'DD/MM/YYYY';
export const STANDARD_DATE_FORMAT2: string = 'YYYYMMDD';
export const STANDARD_MONTH_FORMAT: string = 'MM/YYYY';
export const STANDARD_YEAR_FORMAT: string = 'YYYY';
export const STANDARD_TIME_FORMAT: string = 'HH:mm:ss';
export const STANDARD_TIME_FORMAT2: string = 'HH:mm';
export const STANDARD_DATE_TIME_FORMAT: string = `${STANDARD_TIME_FORMAT2} ${STANDARD_DATE_FORMAT}`;
export const DEFAULT_PAGE_SIZE: number = 25;
export const PAGINATION_SIZE = [DEFAULT_PAGE_SIZE, 50, 100];
export const PROFILE_KEY = 'PROFILE';
export const PERMISSION_KEY = 'PERMISSION';
export const TYPE_LOGIN_KEY = 'TYPE_LOGIN_KEY';
export const PROFILE_SUB_KEY = 'PROFILE_SUB';
export const TOKEN_KEY = 'TOKEN_KEY';
export const VER3 = 'VER3';
export const CPID = 'BHXH';
export const API_KEY = 'h793dd73fc57e93f394e5db3c3f36e3f';
export const BHXH_NEW_ROUTE = 'bhxh-new';
export const BHXH_RENEW_ROUTE = 'bhxh-renew';
export const BHYT_NEW_ROUTE = 'bhyt-new';
export const BHYT_RENEW_ROUTE = 'bhyt-renew';
export const BHYT_OTHER_ROUTE = 'bhyt-other';
export const BHXH_OTHER_ROUTE = 'bhyt-other';
export const BHXH_INTEREST_RATE = 0.00363;
export const BHYT_FULL_HGD = 2340000;
export const VIETNAM = 'VN';
export const GENDER = [
    {
        Text: 'Nam',
        Value: '1'
    },
    {
        Text: 'Nữ',
        Value: '0'
    }
];
export const METHOD_PAID = [
    {
        name: '1 tháng'
    }, {
        name: '3 tháng'
    }, {
        name: '6 tháng'
    }, {
        name: '12 tháng'
    }, {
        name: 'Còn thiếu'
    }, {
        name: 'Về sau'
    }, {
        name: 'Khác'
    }
]
export const validateMessages = {
    required: "${label} không được để trống!",
    // ...
};
export const MAX_MONTH = 60;
export const MUC_DONG_HGD = [
    {
        name: '100%',
        value: 100
    },
    {
        name: '70%',
        value: 70
    },
    {
        name: '60%',
        value: 60
    },
    {
        name: '50%',
        value: 50
    },
    {
        name: '40%',
        value: 40
    }
];
export const TL_NSNN_HT = [
    {
        name: 'Hộ nghèo -30%',
        value: 30
    },
    {
        name: 'Hộ cận nghèo - 25%',
        value: 25
    },
    {
        name: 'Đối tượng khác - 10%',
        value: 10
    }];
export const TEMPS_EXCEL_EXPORT = [
    {
        name: 'EBH',
        code: 'EBH',
        headerBHYT: ["STT", "Phương án (Xem chi tiết theo link) (*)", "Họ và tên (*)", "Mã số BHXH", "Số Sổ BHXH", "Đã có sổ\n(Có/Không)", "Ngày sinh", "Chỉ có năm sinh (Có/Không )", "Giới tính\n(Nam/Nữ) ", "Mã vùng sinh sống (Xem chi tiết theo link)", "Dân tộc", "Quốc tịch", "Nơi cấp giấy khai sinh (*)", "Địa chỉ liên hệ (*)", "Tỉnh KCB", "Bệnh viện", "Tỷ lệ đóng BHYT(%)", "Thời hạn sử dụng thẻ BHYT, từ ngày", "Số tháng", "Mức đóng HGĐ", "Số tiền đóng(=Lương cơ sở*mức đóng HGĐ)", "Mức tiền đóng(=Số tiền đóng*Số tháng*Tỷ lệ đóng BHYT)", "Số biên lai", "Ngày biên lai", "Ghi chú", "Số CMT", "Hộ gia đình", "Mức hưởng BHYT(*)", "Số điện thoại", "Mã hộ gia đình", "Nhân viên thu", "Mã nhân viên thu"],
        headerBHXH: ["STT", "Phương án (Xem chi tiết theo link) (*)", "Họ và tên (*)", "Mã số BHXH", "Số Sổ BHXH", "Ngày sinh", "Chỉ có năm sinh (Có/Không )", "Giới tính\n(Nam/Nữ)", "Dân tộc", "Quốc tịch", "Nơi cấp giấy khai sinh (*)", "Địa chỉ liên hệ (*)", "Tỉnh KCB", "Bệnh viện", "Mức tiền làm căn cứ đóng (*)\n(Nếu để trống và có nhập Hệ số chương trình sẽ tự động tính giá trị)", "Phương thức đóng (*)", "Lãi suất đầu tư quỹ BHXH bình quân trên năm (%)", "Số tháng đóng(*)", "Từ tháng năm(*)", "Tổng số tiền đóng\n(=Mức tiền căn cứ đóng x Số tháng đóng x Tỷ lệ đóng) - Lãi\n(Nếu để trống phần mềm tự động tính giá trị căn cứ vào phương thức đóng)", "Tổng số tiền NTG đóng\n(=Mức tiền làm căn cứ đóng * Số tháng đóng * Tỷ lệ đóng - Số tiền NSNN hỗ trợ - Số tiền NSĐP hỗ trợ - Số tiền hỗ trợ khác)\n(Nếu để trống phần mềm tự động tính giá trị với phương thức đóng 1/3/6/12 tháng)", "Tỷ lệ NSNN hỗ trợ (%)", "Số tiền NSNN Hỗ trợ\n(Nếu để trống phần mềm tự động tính giá trị căn cứ vào phương thức đóng)", "Tỷ lệ đóng (*)\n(Nếu để trống mặc định hiển thị là 22%)", "Hệ số\n=(Mức tiền làm căn cứ đóng - Mức chuẩn hộ nghèo của khu vực nông thôn)/50.000\n(Nếu để trống và có nhập Mức tiền làm căn cứ đóng phần mềm sẽ tự động tính giá trị)", "Tỷ lệ NSĐP hỗ trợ (%)", "Số tiền NSĐP hỗ trợ\n(tự động tính giá trị nếu nhập tỷ lệ NSĐP căn cứ vào phương thức đóng)", "Tỷ lệ hỗ trợ khác", "Tiền hỗ trợ khác\n(tự động tính giá trị nếu nhập tỷ lệ hỗ trợ khác căn cứ vào phương thức đóng)", "Ghi chú", "Số điện thoại", "Số CMND/Hộ chiếu/Thẻ căn cước", "Mã hộ gia đình", "Nhân viên thu", "Mã nhân viên thu", "Ngày biên lai", "Số biên lai "],
        headerSub: ['STT', 'Họ và tên', 'Mã số BHXH', 'Số sổ BHXH', 'Ngày sinh (Chỉ nhập năm nếu chỉ nhớ năm sinh)', 'Chỉ có năm sinh (Có/Không )', 'Mối quan hệ với chủ hộ', 'Giới tính (Nam/Nữ)', 'Nơi cấp giấy khai sinh (*)', 'Số CMND', 'Ghi chú', 'Họ tên chủ hộ', 'Số điện thoại chủ hộ', 'Loại giấy tờ', 'Số giấy tờ', 'Địa chỉ', 'Quốc Tịch (*)', 'Dân Tộc (*)']
    },
    {
        name: 'VNPT',
        code: 'VNPT',
        headerBHYT: ["ID Lao động", "Họ tên", "Mã số BHXH", "Mã phòng ban", "Loại khai báo", "Phương án", "Tỷ lệ NSDP", "Ngày biên lai", "Số biên lai ", "Người tham gia thứ", "Mức tiền đóng", "Số tiền thực tế", "Mức hưởng BHYT", "Từ ngày", "Ngày chết", "Hỗ trợ khác", "Tỉnh đang sinh sống", "Mã tỉnh đang sinh sống", "Huyện đang sinh sống", "Mã huyện đang sinh sống", "Xã đang sinh sống", "Mã xã đang sinh sống", "Địa chỉ đang sinh sống", "Số tháng", "Ghi chú", "Ngày sinh", "Giới tính", "Tỉnh - Bệnh viện", "Mã Tỉnh - Bệnh viện", "Bệnh viện (KCB ban đầu)", "Mã Bệnh viện", "Mã vùng sinh sống", "Bổ sung thêm TK1", "CMND", "Mã hộ gia đình", "Quốc tịch", "Mã quốc tịch", "Dân tộc", "Mã Dân tộc", "Tỉnh - Khai sinh", "Mã Tỉnh - Khai sinh", "Huyện - Khai sinh", "Mã huyện - Khai sinh", "Xã - Khai sinh", "Mã xã - Khai sinh", "Tỉnh - Địa chỉ liên hệ", "Mã tỉnh - Địa chỉ liên hệ", "Huyện - Địa chỉ liên hệ", "Huyện - Địa chỉ liên hệ", "Xã - Địa chỉ liên hệ", "Mã xã - Địa chỉ liên hệ", "Địa chỉ nhận hồ sơ", "Tên cha/mẹ/người giám hộ", "Điện thoại liên hệ", "Mức tiền đóng", "Phương thức đóng", "Nội dung yêu cầu thay đổi", "Hồ sơ kèm theo", "Email liên hệ", "Địa chỉ khai sinh"],
        headerBHXH: ["ID Lao động", "Họ tên", "Mã số BHXH", "Loại khai báo", "Phương án", "Mức tiền đóng", "Từ tháng", "Số tháng", "Tỷ lệ đóng (%)", "Tỷ lệ NSNN hỗ trợ (%)", "Tiền NSNN hỗ trợ", "Tỷ lệ NSDP (%)", "Tiền NSDP", "Tỷ lệ hỗ trợ khác (%)", "Tiền hỗ trợ khác", "Tiền tự nguyện đóng", "Tổng tiền đóng", "Tỉnh - Địa chỉ đang sinh sống", "Mã tỉnh - Địa chỉ đang sinh sống", "Huyện - Địa chỉ đang sinh sống", "Huyện - Địa chỉ đang sinh sống", "Xã - Địa chỉ đang sinh sống", "Mã xã - Địa chỉ đang sinh sống", "Địa chỉ đang sinh sống", "Ghi chú", "Phương thức đóng", "Hệ số (%)", "Bổ sung thêm TK1", "CMND", "Mã hộ gia đình", "Ngày sinh", "Giới tính", "Quốc tịch", "Mã quốc tịch", "Dân tộc", "Mã Dân tộc", "Tỉnh - Bệnh viện", "Mã Tỉnh - Bệnh viện", "Bệnh viện (KCB ban đầu)", "Mã Bệnh viện", "Tỉnh - Khai sinh", "Mã Tỉnh - Khai sinh", "Huyện - Khai sinh", "Mã huyện - Khai sinh", "Xã - Khai sinh", "Mã xã - Khai sinh", "Tỉnh - Địa chỉ liên hệ", "Mã tỉnh - Địa chỉ liên hệ", "Huyện - Địa chỉ liên hệ", "Huyện - Địa chỉ liên hệ", "Xã - Địa chỉ liên hệ", "Mã xã - Địa chỉ liên hệ", "Địa chỉ nhận hồ sơ", "Tên cha/mẹ/người giám hộ", "Điện thoại liên hệ", "Mức tiền đóng", "Nội dung yêu cầu thay đổi", "Hồ sơ kèm theo", "Email liên hệ", "Địa chỉ khai sinh"],
        headerSub: ["ID Lao động lấy ở Sheet Dữ Liệu", "Họ tên Thành viên", "Mã số BHXH", "Ngày sinh (tháng/năm hoặc năm sinh)", "Giới tính", "Tỉnh khai sinh", "Mã tỉnh khai sinh", "Huyện khai sinh", "Mã huyện khai sinh", "Xã khai sinh", "Mã xã khai sinh", "Tên Thôn/Xóm", "Mối quan hệ", "Mã quan hệ", "Số CMND", "Ghi chú", "Người tham gia (0: Không\n1: Có)\"", "Số điện thoại", "Loại giấy tờ", "Số giấy tờ", "Quốc tịch", "Dân tộc", "Tỉnh hộ khẩu", "Mã tỉnh hộ khẩu", "Huyện hộ khẩu", "Mã huyện hộ khẩu", "Xã hộ khẩu", "Mã xã hộ khẩu", "Mã số hộ gia đình", "Địa chỉ hộ khẩu", "Địa chỉ đăng ký khai sinh"]
    }
]
export const MA_CTU = [
    {
        code: 'BHXH',
        name: 'Bảo hiểm xã hội'
    },
    {
        code: 'BHYTHGD',
        name: 'Bảo hiểm y tế hộ gia đình'
    },
    {
        code: 'BHYTHCN',
        name: 'Bảo hiểm y tế hộ cận nghèo'
    },
    // {
    //     code:'BHYTNTH',
    //     name:'Bảo hiểm y tế nhà tu hành'
    // },
    {
        code: 'BHYTHNLDN',
        name: 'Bảo hiểm y tế hộ nông, lâm, diêm, ngư nghiệp'
    },
    {
        code: 'BHYTHDTTS',
        name: 'Bảo hiểm y tế hộ dân tộc thiểu số'
    },
]
export const MA_CTU2 = [
    {
        code:'602A',
        name:'602A',
        isBHXH:true,
    isPermission:true,
    note:'Hoàn trả tiền đã đóng đối với người tham gia BHXH tự nguyện',
    },
    // {
    //     code:'604',
    //     name:'604',
    // isPermission:true,
    // note:'Đăng ký, thay đổi thông tin đóng BHXH, BHYT, BHTN, HTNLĐ, BNN',
    //     isBHXH:true,
    // },
     {
        code:'606A',
    isPermission:false,
    note:'Hoàn trả tiền đã đóng đối với người tham gia BHYT theo hộ gia đình, người tham gia BHYT được ngân sách nhà nước hỗ trợ một phần mức đóng do đóng trùng',
        name:'606A'
    },{
        code:'606B',
    isPermission:false,
    note:'Hoàn trả tiền đã đóng đối với người tham gia BHYT theo hộ gia đình, người tham gia BHYT được ngân sách nhà nước hỗ trợ một phần mức đóng do bị chết',
        name:'606B'
    },
    {
        code:'607',
    isPermission:false,
    note:'Cấp lại sổ BHXH không thay đổi thông tin',
        name:'607',
        isBHXH:true,
    },{
        code:'608',
    isPermission:false,
    note:'Cấp lại sổ BHXH do thay đổi thông tin',
        name:'608',
        isBHXH:true,
    },
    {
        code: '610',
        isPermission: false,
        note:'Cấp lại, đổi thẻ BHYT do thay đổi thông tin về nhân thân, mã đối tượng, mã quyền lợi, mã nơi đối tượng sinh sống',
        name: '610'
    }, {
        code: '612',
        isPermission: false,
        note:'Cấp lại, đổi thẻ BHYT do mất, hỏng không thay đổi thông tin',
        name: '612'
    }
    ,{
        code:'613',
        isPermission:false,
        note:'Cấp lại, đổi thẻ BHYT do thay đổi thời điểm đủ 05 năm liên tục, nơi KCB ban đầu',
        name:'613'
    },

]
export const PAYMENT_STATUSES = [
    {
        code: 1,
        name: 'Chưa thanh toán',
        color: '#F4B171',
    },
    {
        code: 2,
        name: 'Đã thanh toán',
        color: '#096DD9'
    },
    // {
    //     code:3,
    //     name:'Hủy',
    //     color:'#5A1004'
    // }
]
export const SO_THANG_DONG_VESAU = [
    {
        name: '24 tháng',
        value: 24
    },
    {
        name: '36 tháng',
        value: 36
    },
    {
        name: '48 tháng',
        value: 48
    },
    {
        name: '60 tháng',
        value: 60
    }

]
export const STATUS_BHXH = [
    {
        name: 'Đã ghi nhận',
        code: 0,
        color: '#31c7b6',
    },
    {
        name: 'Chờ thanh toán',
        code: 1,
        color: '#ccc936',
    },
    {
        name: 'Đã thanh toán',
        code: 2,
        color: '#f85f1c',
    },
    {
        name: 'Đã tạo hồ sơ',
        code: 3,
        color: '#45c738',
    },
    {
        name: 'Đã gửi hồ sơ',
        code: 4,
        color: '#1cadfd',
    },
    {
        name: 'BHXH đã chấp nhận',
        code: 5,
        color: '#3545a6',
    },
    {
        name: 'BHXH trả lại',
        code: 6,
        color: '#fd001e',
    },
    {
        name: 'Hủy tờ khai',
        code: 7,
        color: '#091113',
    }
]
export const STATUS_SMS = [
    {
        name: 'Chờ xử lý',
        code: 1,
        color: '#d93f3f',
    },
    {
        name: 'Thành công',
        code: 2,
        color: '#096DD9',
    }
]
export const TYPE_USER = [
    {
        code: 'NVT',
        value: 'Nhân viên thu'
    }, {
        code: 'QL',
        value: 'Quản lý'
    }, {
        code: 'NVTDL',
        value: 'Nhân viên thu & đại lý'
    }, {
        code: 'CBBHXH',
        value: 'Cán bộ BHXH'
    }
]
export const METHOD_RECEIVE = [
    {
        code: 0,
        value: 'Nhận tại CQBH'
    }, {
        code: 1,
        value: 'Qua bưu điện'
    }
]

export const UNITS_STATUSES = [
    {
        from: 0,
        to: 1,
        value: 'Chờ đăng ký'
    },
    {
        from: 2,
        to: 2,
        value: 'Đã đăng ký'
    },
    {
        from: 3,
        to: 4,
        value: 'Chờ sửa đổi'
    },
    {
        from: 5,
        to: 5,
        value: 'Đã sửa đổi'
    },
    {
        from: 6,
        to: 7,
        value: 'Chờ hủy'
    },
    {
        from: 8,
        to: 8,
        value: 'Đã hủy'
    },
]
export const BILL_STATUSES = [
    {
        code: 0,
        name: 'Tạo mới',
        color: '#45c738',
    }, {
        code: 1,
        name: 'Đã gửi',
        color: '#1cadfd',
    },
    {
        code: 2,
        name: 'Thành công',
        color: '#1668F8',
    }, {
        code: 4,
        name: 'Bị trả lại',
        color: '#fd001e',
    }
]
export const BHXH_OTHER_STATUSES = [
    {
        code: 0,
        name: 'Đã tạo hồ sơ',
        color: '#72AC4D',
    }, {
        code: 1,
        name: 'Đã gửi hồ sơ',
        color: '#F4B171',
    },
    {
        code: 2,
        name: 'BHXH đã chấp nhận',
        color: '#096DD9',
    }, {
        code: 4,
        name: 'BHXH trả lại',
        color: '#d93f3f',
    },{
        code: 10,
        name: 'Chưa tạo hồ sơ',
        color: '#72AC4D',
    },
]

export const BHYT_TYPE = [
    {
        code: 'GT',
        name: 'Giảm trùng',
        type: 'error'
    },
    {
        code: 'GK',
        name: 'Giảm khác',
        type: 'info'
    },
    {
        code: 'GG',
        name: 'Giảm do gộp',
        type: 'error'
    },
    {
        code: 'GM',
        name: 'Giảm do mất',
        type: 'error'
    },
    {
        code: 'BS',
        name: 'Bổ sung',
        type: 'error'
    },
    {
        code: 'TM',
        name: 'Tăng Nhân khẩu (Phát sinh mới)',
        type: 'info'
    },
    {
        code: 'TC',
        name: 'Tăng Nhân khẩu (do Chuyển đến)',
        type: 'info'
    },
    {
        code: 'GC',
        name: 'Giảm Nhân khẩu (do Chuyển nhân khẩu tới Địa bàn mới)',
        type: 'info'
    },
    {
        code: 'HC',
        name: 'Hiệu chỉnh thông tin',
        type: 'info'
    },
    {
        code: 'SO',
        name: '',
        type: 'info'
    },
    {
        code: null,
        name: 'Không có thông tin',
        type: 'info'
    },
]
