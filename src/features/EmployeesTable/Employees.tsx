import { Table } from "antd";
import FilterControls from "./FilterControls";
import { columns, dataSource } from "../EmployeesTable/DataTable";
// table
import { useState } from "react";
// table

const Employees = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-6 ">
        <p className="inter font-bold text-2xl">Employees</p>

        <div >
          <FilterControls />

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
            className="relative [&_.ant-table-tbody>tr>td]:py-2 [&_.ant-table-thead>tr>th]:bg-[#F5F5F5]"
            pagination={{
              className: `
              [&_.ant-pagination-item]:rounded-full 
              [&_.ant-pagination-item-active]:border-[#B1EC8B]
              [&_.ant-pagination-item:hover]:border-[#4CAF50]
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
