import janeCooperImg from "../../../assets/tables/janeCooper.png";

export const cares = {
    careType: ["Gửi email"],
    priority: ["Ưu tiên thấp", "Ưu tiên cao"],
    employee: [
      "Hoàng Trọng Minh",
      "Nguyễn Văn Quân",
      "Lê Xuân Vinh",
      "Nguyễn Văn Đạt",
    ],
    status: [
        "Đang thực hiện",
        "Đã thực hiện"
    ]
  };
  
  function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return year + '-' + month + '-' + day;
  }

  export let data = [
    {
        id: "checkbox111",
        img: janeCooperImg,
        activityName: "Hoạt động 1",
        careType: cares.careType[0],
        customerName: "Nguyen Van A",
        priority: cares.priority[1],
        employee: cares.employee[0],
        status: cares.status[0],
        startDate: getFormattedDate(new Date()),
        endDate: getFormattedDate(new Date())
      },
      {
        id: "checkbox111",
        img: janeCooperImg,
        activityName: "Hoạt động 1",
        careType: cares.careType[0],
        customerName: "Nguyen Van A",
        priority: cares.priority[1],
        employee: cares.employee[1],
        status: cares.status[0],
        startDate: getFormattedDate(new Date()),
        endDate: getFormattedDate(new Date())
      },
      {
        id: "checkbox111",
        img: janeCooperImg,
        activityName: "Hoạt động 1",
        careType: cares.careType[0],
        customerName: "Nguyen Van A",
        priority: cares.priority[1],
        employee: cares.employee[2],
        status: cares.status[1],
        startDate: getFormattedDate(new Date()),
        endDate: getFormattedDate(new Date())
      }
  ];
  
  export const changeData = (newData) => {
    data = newData;
  };
  