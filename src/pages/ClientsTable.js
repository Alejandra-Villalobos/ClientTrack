import React from "react";
import { clients } from "../mock/clients";
import { Table } from "antd";
import Header from "../components/Header";
const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Latitud",
    dataIndex: "lat",
  },
  {
    title: "Longitud",
    dataIndex: "long",
  },
];

function ClientsTable() {
  const data = clients.map((client, index) => ({
    key: index,
    name: client.name,
    lat: client.lat,
    long: client.long,
  }));
  return (
    <div className="bg-white p-4 w-screen h-screen">
      <Header />
      <Table columns={columns} dataSource={data} pagination={false}/>
    </div>
  );
}

export default ClientsTable;
