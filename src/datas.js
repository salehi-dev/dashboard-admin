let xAxisData = [
  {
    name: "Jan",
    Sale: 12_000,
  },
  {
    name: "Feb",
    Sale: 34_000,
  },
  {
    name: "Mar",
    Sale: 22_090,
  },
  {
    name: "Apr",
    Sale: 99_000,
  },
  {
    name: "May",
    Sale: 54_000,
  },
  {
    name: "Jun",
    Sale: 85_000,
  },
  {
    name: "Jul",
    Sale: 34_000,
  },
  {
    name: "Agu",
    Sale: 18_598,
  },
  {
    name: "Sep",
    Sale: 15_398,
  },
  {
    name: "Oct",
    Sale: 73_078,
  },
  {
    name: "Nov",
    Sale: 12_900,
  },
  {
    name: "Dev",
    Sale: 97_000,
  },
];

const newMembers = [
  {
    id: 1,
    username: "Aref Salehi",
    title: "FrontEnd Developer",
    img: "./images/profile.png",
  },
  {
    id: 2,
    username: "Alexander",
    title: "Web Developer",
    img: "./images/profile2.png",
  },
  {
    id: 3,
    username: "Ethan",
    title: "Mobile Developer",
    img: "./images/profile3.png",
  },
  {
    id: 4,
    username: "Asef Salehi",
    title: "AI Specialist",
    img: "./images/profile4.png",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Aref Salehi",
    date: "27 Jan 2024",
    amount: 399,
    status: "Approved",
    img: "./images/profile.png",
  },
  {
    id: 2,
    customer: "Alexander",
    date: "23 Sep 2020",
    amount: 593,
    status: "Declined",
    img: "./images/profile5.png",
  },
  {
    id: 3,
    customer: "Benjamin",
    date: "04 Aug 2022",
    amount: 495,
    status: "Pending",
    img: "./images/profile3.png",
  },
  {
    id: 4,
    customer: "Asef Salehi",
    date: "05 Feb 2023",
    amount: 492,
    status: "Approved",
    img: "./images/profile2.png",
  },
];

let userRows = [
  {
    id: 1,
    username: "Aref Salehi",
    avatar: "./images/profile.png",
    status: "active",
    transaction: "$129.52",
    email: "m.arf.salehi@gmail.com",
  },
  {
    id: 2,
    username: "Alexander",
    avatar: "./images/profile2.png",
    status: "non-active",
    transaction: "$110",
    email: "wakilahmad@gmail.com",
  },
  {
    id: 3,
    username: "Benjamin",
    avatar: "./images/profile4.png",
    status: "active",
    transaction: "$98",
    email: "faridqatali@gmail.com",
  },
  {
    id: 4,
    username: "Asef Salehi",
    avatar: "./images/profile3.png",
    status: "active",
    transaction: "$0",
    email: "asefsalehi@gmail.com",
  },
  {
    id: 5,
    username: "Charlotte",
    avatar: "./images/profile5.png",
    status: "active",
    transaction: "$55.98",
    email: "naqizadeh@gmail.com",
  },
];

let products = [
  {
    id: 1,
    title: "Asus",
    avatar: "/images/product1.png",
    price: "890",
    stock: "No",
    model: "Asus ROG Series",
  },
  {
    id: 2,
    title: "Acer",
    avatar: "/images/product2.png",
    price: "933",
    stock: "Yes",
    model: "Acer Predator",
  },
  {
    id: 3,
    title: "HP",
    avatar: "/images/product3.png",
    price: "590",
    stock: "Yes",
    model: "HP Spectre x360",
  },
  {
    id: 4,
    title: "Dell",
    avatar: "/images/product4.png",
    price: "455",
    stock: "Yes",
    model: "Dell Alienware",
  },
  {
    id: 5,
    title: "MacOS",
    avatar: "/images/product9.png",
    price: "1,022",
    stock: "Yes",
    model: "MacBook Pro",
  },
  {
    id: 6,
    title: "Asus",
    avatar: "/images/product5.png",
    price: "2,465",
    stock: "Yes",
    model: "Asus VivoBook Series",
  },
  {
    id: 7,
    title: "Acer",
    avatar: "/images/product6.png",
    price: "560",
    stock: "No",
    model: "Acer Swift",
  },
  {
    id: 8,
    title: "MacOS",
    avatar: "/images/product7.png",
    price: "999",
    stock: "Yes",
    model: "MacBook Pro with M1 chip",
  },
  {
    id: 9,
    title: "MacOS",
    avatar: "/images/product8.png",
    price: "2,344",
    stock: "No",
    model: "MacBook Air",
  },
];

const productsData = [
  {
    name: "Jan",
    sale: `${1140}`,
  },
  {
    name: "Feb",
    sale: `${3500}`,
  },
  {
    name: "Mar",
    sale: `${2475}`,
  },
  {
    name: "Mar",
    sale: `${3575}`,
  },
];

export {
  xAxisData,
  newMembers,
  transactions,
  userRows,
  products,
  productsData,
};
