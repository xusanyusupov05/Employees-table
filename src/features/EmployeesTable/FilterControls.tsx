import { CloudUploadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";

interface FilterValues {
  branches: string;
  department: string;
  status: string;
  search: string;
}

const FilterControls = () => {
  const [form] = Form.useForm<FilterValues>();

  const handleSubmit = (values: FilterValues) => {
    console.log(values);
    form.resetFields()
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      className="flex items-center gap-4 justify-between w-full pt-4"
      initialValues={{
        branches: "all",
        department: "all",
        status: "all",
        search: "",
      }}
    >
      <Space wrap>
        <Form.Item name="branches">
          <Select
            placeholder="All Branches"
            className="w-[229px]"
            options={[
              { value: "all", label: "All Branches" },
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
            ]}
          />
        </Form.Item>

        <Form.Item name="department">
          <Select
            placeholder="All Department"
            className="w-[229px]"
            options={[
              { value: "all", label: "All Department" },
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
            ]}
          />
        </Form.Item>

        <Form.Item name="status">
          <Select
            placeholder="All Status"
            className="w-[229px]"
            options={[
              { value: "all", label: "All Status" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
          />
        </Form.Item>

        <Form.Item name="search">
          <Input
            placeholder="Searching"
            prefix={<SearchOutlined />}
            allowClear
            className="w-[229px]"
          />
        </Form.Item>
      </Space>

      <Form.Item>
        <Button
          htmlType="submit"
          className="w-[99px] bg-[#9FE870] hover:!bg-[#9FE870] hover:!text-black"
        >
          <CloudUploadOutlined />
          Export
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FilterControls;
