// export const fixedData = [
//   {
//     id: "NhomKH1",
//     name: "	Khách Hàng Vip 1",
//     des: "Khách hàng VIP",
//   },
// ];
import janeCooperImg from "../../../assets/tables/janeCooper.png";

export var data = [
  {
    id: "checkbox111",
    img: janeCooperImg,
    groupId: "NhomKH1",
    groupName: "Khách Hàng Vip 1",
    numberOfCustomer: 10,
    groupDescription: "Khách hàng VIP",
  },
  {
    id: "checkbox111",
    img: janeCooperImg,
    groupId: "NhomKH2",
    groupName: "Khách hàng vip 2",
    numberOfCustomer: 10,

    groupDescription: "Khách hàng VIP",
  },
];

export var changeData = (newData) => {
  data = newData;
};
