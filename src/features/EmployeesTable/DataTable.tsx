import { Button, Checkbox } from "antd";
import img1 from "../../assets/Ellipse 1 (1).png";
import img2 from "../../assets/Ellipse 1.png";
import img3 from "../../assets/Ellipse 2.png";
import { CheckOutlined, HeartOutlined } from "@ant-design/icons";

export const columns = (
  hoveredRow: number | null,
  selectedIds: number[],
  setSelectedIds: any
) => [
  {
    title: "",
    dataIndex: "id",
    key: "id",
    width: 50,
    render: (_: any, record: any) => {
      const isChecked = selectedIds.includes(record.id)
      const shouldShowCheckbox = hoveredRow === record.id || isChecked;

      return shouldShowCheckbox ? (
        <Checkbox
          checked={isChecked}
          
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedIds([...selectedIds, record.id]);
            } else {
              setSelectedIds(selectedIds.filter((id) => id !== record.id));
            }
          }}
        />
      ) : (
        <span className="font-medium">{record.id}</span>
      );
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "50%",
    render: (text: string, record: any) => (
      <div className="flex items-center gap-6">
        <img src={record.img} alt={text} />
        <span className="font-medium inter">{text}</span>
      </div>
    ),
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    render: (text: string) => <span className="inter">{text}</span>,
  },
  {
    title: "Branch",
    dataIndex: "branch",
    key: "branch",
    render: (text: string) => <span className="inter">{text}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text: boolean | string) => (
      <span className="inter">
        {typeof text === "boolean" ? (
          text ? (
            <Button
              className="bg-[#DBF9CE] flex items-center inter hover:!bg-[#DBF9CE] hover:!text-black "
            >
              <CheckOutlined />
              Active
            </Button>
          ) : (
            <Button 
              className="bg-[#EDF5FF] flex items-center inter text-[#2B74FE] hover:!bg-[#EDF5FF] hover:!text-[#2B74FE]"
            >
              <HeartOutlined />
              Vacation
            </Button>
          )
        ) : (
          text
        )}
      </span>
    ),
  },
];

export const dataSource = [
  {
    id: 1,
    name: "Ali",
    department: "IT",
    branch: "Tashkent",
    status: true,
    img: img1,
  },
  {
    id: 2,
    name: "Bek",
    department: "HR",
    branch: "Samarqand",
    status: false,
    img: img2,
  },
  {
    id: 3,
    name: "Cavid",
    department: "Finance",
    branch: "Bukhara",
    status: true,
    img: img3,
  },
  {
    id: 4,
    name: "Diyor",
    department: "Marketing",
    branch: "Namangan",
    status: false,
    img: img1,
  },
  {
    id: 5,
    name: "Elmira",
    department: "IT",
    branch: "Fergana",
    status: true,
    img: img1,
  },
  {
    id: 6,
    name: "Farruh",
    department: "HR",
    branch: "Andijan",
    status: false,
    img: img2,
  },
  {
    id: 7,
    name: "Gulnora",
    department: "Finance",
    branch: "Sirdaryo",
    status: true,
    img: img3,
  },
  {
    id: 8,
    name: "Hasan",
    department: "Marketing",
    branch: "Qashqadaryo",
    status: false,
    img: img1,
  },
  {
    id: 9,
    name: "Iroda",
    department: "IT",
    branch: "Surxondaryo",
    status: true,
    img: img2,
  },
  {
    id: 10,
    name: "Jasur",
    department: "HR",
    branch: "Tashkent",
    status: false,
    img: img3,
  },
  {
    id: 11,
    name: "Kamol",
    department: "Finance",
    branch: "Samarqand",
    status: true,
    img: img1,
  },
  {
    id: 12,
    name: "Lola",
    department: "Marketing",
    branch: "Bukhara",
    status: false,
    img: img2,
  },
  {
    id: 13,
    name: "Murod",
    department: "IT",
    branch: "Namangan",
    status: true,
    img: img3,
  },
  {
    id: 14,
    name: "Nigora",
    department: "HR",
    branch: "Fergana",
    status: false,
    img: img1,
  },
  {
    id: 15,
    name: "Otabek",
    department: "Finance",
    branch: "Andijan",
    status: true,
    img: img2,
  },
  {
    id: 16,
    name: "Parda",
    department: "Marketing",
    branch: "Sirdaryo",
    status: false,
    img: img3,
  },
  {
    id: 17,
    name: "Qobil",
    department: "IT",
    branch: "Qashqadaryo",
    status: true,
    img: img1,
  },
  {
    id: 18,
    name: "Rano",
    department: "HR",
    branch: "Surxondaryo",
    status: false,
    img: img2,
  },
  {
    id: 19,
    name: "Sardor",
    department: "Finance",
    branch: "Tashkent",
    status: true,
    img: img3,
  },
  {
    id: 20,
    name: "Tanzila",
    department: "Marketing",
    branch: "Samarqand",
    status: false,
    img: img1,
  },
  {
    id: 21,
    name: "Umid",
    department: "IT",
    branch: "Bukhara",
    status: true,
    img: img2,
  },
  {
    id: 22,
    name: "Vali",
    department: "HR",
    branch: "Namangan",
    status: false,
    img: img3,
  },
  {
    id: 23,
    name: "Xurshid",
    department: "Finance",
    branch: "Fergana",
    status: true,
    img: img1,
  },
  {
    id: 24,
    name: "Yulduz",
    department: "Marketing",
    branch: "Andijan",
    status: false,
    img: img2,
  },
  {
    id: 25,
    name: "Zafar",
    department: "IT",
    branch: "Sirdaryo",
    status: true,
    img: img3,
  },
  {
    id: 26,
    name: "Aziza",
    department: "HR",
    branch: "Qashqadaryo",
    status: false,
    img: img1,
  },
  {
    id: 27,
    name: "Bahrom",
    department: "Finance",
    branch: "Surxondaryo",
    status: true,
    img: img2,
  },
  {
    id: 28,
    name: "Dina",
    department: "Marketing",
    branch: "Tashkent",
    status: false,
    img: img3,
  },
  {
    id: 29,
    name: "Eldor",
    department: "IT",
    branch: "Samarqand",
    status: true,
    img: img2,
  },
  {
    id: 30,
    name: "Feruza",
    department: "HR",
    branch: "Bukhara",
    status: false,
    img: img3,
  },
 ];
