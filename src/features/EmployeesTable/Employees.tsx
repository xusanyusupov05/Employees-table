import { Select, Space, Input, Button, Table } from "antd";
import { SearchOutlined, CloudUploadOutlined } from "@ant-design/icons";
// table
import { columns, dataSource } from "../EmployeesTable/DataTable";
import { useState } from "react";
// table

const Employees = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-6 ">
        <p className="inter font-bold text-2xl">Employees</p>
        <div className="flex items-center gap-4 justify-between">
          <Space wrap>
            <Select
              defaultValue="All Branches"
              className="w-[229px] h-10 rounded-full"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
              ]}
            />
            <Select
              defaultValue="All department"
              className="w-[229px] h-10 rounded-full"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
              ]}
            />

            <Select
              defaultValue="All Status"
              
              className="w-[229px] h-10 rounded-full"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
              ]}
            />

            <Input
              placeholder="Searching"
              prefix={<SearchOutlined />}
              allowClear
              className="w-[229px] h-10 rounded-full text-black px-3 py-3 flex items-center"
            />
          </Space>
          <Button className="w-[99px] h-10 rounded-full bg-[#9FE870] hover:!bg-[#9FE870] hover:!text-black">
            <CloudUploadOutlined />
            Export
          </Button>
        </div>

        <div>
          <Table
            rowKey="id"
            columns={columns(hoveredRow, selectedIds, setSelectedIds)}
            dataSource={dataSource}
            rowHoverable={false}
            rowClassName={() => "hover:bg-[#F3FDEF] py-2"}
            onRow={(record) => ({
              onMouseEnter: () => setHoveredRow(record.id),
              onMouseLeave: () => setHoveredRow(null),
            })}
            className="relative [&_.ant-table-thead>tr>th]:bg-[#F5F5F5] [&_.ant-table-tbody>tr>td]:py-2  py-2"
            pagination={{
                className:`
                [&_.ant-pagination-item]:rounded-full 
                [&_.ant-pagination-item]:text-black
                [&_.ant-pagination-item-active]:border-[#B1EC8B]
                [&_.ant-pagination-item:hover]:border-[#4CAF50]
                [&_.ant-pagination-item-active_a]:text-black
                `,
                showTotal: (total) => (
                    <p className="absolute left-0">1-10 of {total} applicants</p>
                ),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Employees;
