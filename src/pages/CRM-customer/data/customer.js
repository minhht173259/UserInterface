export const customers = {
  status: ["Đang hoạt động", "Ngưng hoạt động"],
  types: ["Cá nhân", "Doanh nghiệp"],
  assignees: [
    "Hoàng Trọng Minh",
    "Nguyễn Văn Quân",
    "Lê Xuân Vinh",
    "Nguyễn Văn Đạt",
  ],
};

export let data = [
  {
    id: "checkbox113",
    code: "KH001",
    name: "David moi",
    status: customers.status[0],
    type: customers.types[0],
    email: "westhammu@gmail.com",
    phone: "0915538877",
    assignee: customers.assignees[0],
  },
  {
    id: "checkbox113",
    code: "KH002",
    name: "Thầy giáo bả :<3",
    status: customers.status[0],
    type: customers.types[1],
    email: "baroimeo@gmail.com",
    phone: "096299871",
    assignee: customers.assignees[0],
  },
];

export const changeData = (newData) => {
  data = newData;
};
