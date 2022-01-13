export const customers = {
  status: ['Khách hàng mới', 'Khách hàng VIP', 'Khách hàng khó tính'],
  types: ['Cá nhân', 'Doanh nghiệp'],
  assignees: [
    'Hoàng Trọng Minh',
    'Nguyễn Văn Quân',
    'Lê Xuân Vinh',
    'Nguyễn Văn Đạt',
  ],
};

export let data = [
  {
    id: 'checkbox113',
    code: 'KH001',
    name: 'Nguyễn Bá Đức',
    status: customers.status[0],
    type: customers.types[0],
    email: 'westhammu@gmail.com',
    phone: '0915538877',
    assignee: customers.assignees[0],
  },
  {
    id: 'checkbox113',
    code: 'KH002',
    name: 'Trịnh Văn Thắng',
    status: customers.status[0],
    type: customers.types[1],
    email: 'baroimeo@gmail.com',
    phone: '096299871',
    assignee: customers.assignees[0],
  },
  {
    id: 'checkbox113',
    code: 'KH003',
    name: 'Vũ Long Vũ',
    status: customers.status[1],
    type: customers.types[1],
    email: 'baroimeo@gmail.com',
    phone: '096299871',
    assignee: customers.assignees[0],
  },
  {
    id: 'checkbox113',
    code: 'KH004',
    name: 'Mạc Trung Tình',
    status: customers.status[2],
    type: customers.types[1],
    email: 'baroimeo@gmail.com',
    phone: '096299871',
    assignee: customers.assignees[0],
  },
  {
    id: 'checkbox113',
    code: 'KH005',
    name: 'Trần Quốc Trung',
    status: customers.status[0],
    type: customers.types[1],
    email: 'baroimeo@gmail.com',
    phone: '096299871',
    assignee: customers.assignees[0],
  },
];

export const changeData = (newData) => {
  data = newData;
};
