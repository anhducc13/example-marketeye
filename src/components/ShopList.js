import React, { useState } from "react";
import { Table, Icon, Form, Input, Select, Button, Modal } from "antd";
import { ShopForm } from "./ShopForm";

const { Option } = Select;

const fakeData = [];

for (let i = 0; i < 100; i++) {
  fakeData.push({
    key: i,
    name: `name${i}`,
    domain: "https://www.lazada.vn/",
    activate: true,
    activeInProductPrice: false,
    excludeFromEmailContent: true
  });
}

export const ShopList = props => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [filtering, setFiltering] = useState({
    textSearch: "",
    filterActive: "all",
    currentPage: 1,
    pageSize: 10
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: val => (
        <div
          style={{
            cursor: "pointer",
            color: "#1E9AFF"
          }}
          onClick={() => setVisibleModal(true)}
        >
          {val}
        </div>
      )
    },
    {
      title: "Domain",
      dataIndex: "domain",
      render: val => (
        <a href={val} target="blank">
          {val}
        </a>
      )
    },
    {
      title: "Activate",
      dataIndex: "activate",
      render: val =>
        val ? (
          <Icon type="check" style={{ color: "#006200" }} />
        ) : (
          <Icon type="close" style={{ color: "#96012F" }} />
        )
    },
    {
      title: "Active in product price",
      dataIndex: "activeInProductPrice",
      render: val =>
        val ? (
          <Icon type="check" style={{ color: "#006200" }} />
        ) : (
          <Icon type="close" style={{ color: "#96012F" }} />
        )
    },
    {
      title: "Exclude from email content",
      dataIndex: "excludeFromEmailContent",
      render: val =>
        val ? (
          <Icon type="check" style={{ color: "#006200" }} />
        ) : (
          <Icon type="close" style={{ color: "#96012F" }} />
        )
    }
  ];

  const onSelectChange = selected => {
    console.log("selectedRowKeys changed: ", selected);
    setSelectedRowKeys(selected);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  const handleChange = pagination => {
    setFiltering({
      ...filtering,
      currentPage: pagination.current,
      pageSize: pagination.pageSize
    });
  };

  const onClickSearch = e => {
    e.preventDefault();
    console.log(filtering);
  };

  return (
    <>
      <div style={{ float: "right" }}>
        <Button onClick={() => setVisibleModal(true)}>
          <Icon type="plus" />
          Add shop
        </Button>
      </div>
      <Form
        layout="inline"
        style={{
          marginBottom: 8
        }}
      >
        <Form.Item>
          <Input
            placeholder="Search"
            style={{ width: 350 }}
            onChange={e =>
              setFiltering({ ...filtering, textSearch: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Select
            style={{ width: 120 }}
            defaultValue="all"
            onChange={val => setFiltering({ ...filtering, filterActive: val })}
          >
            <Option value="all">All</Option>
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" onClick={onClickSearch}>
            Search
          </Button>
        </Form.Item>
      </Form>
      <Table
        bordered
        rowSelection={rowSelection}
        columns={columns}
        dataSource={fakeData}
        onChange={handleChange}
        pagination={{
          size: filtering.pageSize
        }}
        scroll={{ x: 1000 }}
      />
      <Modal
        title="Add Shop"
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        width={768}
      >
        <ShopForm />
      </Modal>
    </>
  );
};
