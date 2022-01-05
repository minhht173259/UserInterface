import ellieSmithImg from "../../assets/tables/ellieSmithImg.png";
import floydMilesImg from "../../assets/tables/floydMilesImg.png";
import rosaFloresImg from "../../assets/tables/rosaFloresImg.png";
import janeCooperImg from "../../assets/tables/janeCooper.png";
import bagIcon from "../../assets/tables/bagIcon.svg";
import folderIcon from "../../assets/tables/folderIcon.svg";
import joystickIcon from "../../assets/tables/joystickIcon.svg";
import basketIcon from "../../assets/tables/basketIcon.svg";

const mock = {
  firstTable: [
    {
      id: "checkbox111",
      img: janeCooperImg,
      cusId: "0001",
      cusName: "Luk Dejong",
      cusType: "Khách hàng tiềm năng",
      cusManager: "Nguyễn Văn Đạt",
      cusPhone: "098212183",
    },
    {
      id: "checkbox111",
      img: janeCooperImg,
      cusId: "0002",
      cusName: "Thầy giáo <:3",
      cusType: "Khách hàng thân quên",
      cusManager: "Lê Xuân Vinh",
      cusPhone: "094329149",
    },
  ],
  transactionsWidget: [
    {
      id: 1,
      icon: basketIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
      dropdownOpen: false,
    },
    {
      id: 2,
      icon: joystickIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
      dropdownOpen: false,
    },
    {
      id: 3,
      icon: folderIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
      dropdownOpen: false,
    },
    {
      id: 4,
      icon: bagIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
      dropdownOpen: false,
    },
  ],
  tasksWidget: [
    {
      id: 1,
      description: "Create An Image",
      time: "9 AM",
      completed: false,
    },
    {
      id: 2,
      description: "Team Design Miting",
      time: "11 AM",
      completed: false,
    },
    {
      id: 3,
      description: "Create An Image",
      time: "2.30 PM",
      completed: false,
    },
    {
      id: 4,
      description: "Interview With John Hamm",
      time: "4 PM",
      completed: false,
    },
  ],
};

export default mock;
