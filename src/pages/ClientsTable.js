import React, { useEffect, useState } from "react";
import { clients } from "../mock/clients";
import { Table } from "antd";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { TbDatabaseX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const customLocale = {
  items_per_page: "/ página",
  triggerDesc: "Ordenar de manera descendente (Z-A)",
  triggerAsc: "Ordenar de manera ascendente (A-Z)",
  cancelSort: "Cancelar ordenamiento",
  emptyText: (
    <div className="flex flex-col items-center text-gray-400 text-xl">
      <TbDatabaseX color="#9ca3af" size={50}/>
      No se encontraron resultados
    </div>
  ),
};

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <p className="text-center">{text}</p>,
  },
  {
    title: "Latitud",
    dataIndex: "lat",
    render: (text) => <p className="text-center">{text}</p>,
  },
  {
    title: "Longitud",
    dataIndex: "long",
    render: (text) => <p className="text-center">{text}</p>,
  },
];

function ClientsTable() {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  const [data, setData] = useState(clients);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    if (searchText === "") {
      setData(clients);
      return;
    }
    const filteredData = clients.filter((client) =>
      client.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredData);
  }, [searchText]);

  return (
    <div className="bg-white flex flex-col justify-center">
      <Header />
      <p className="text-3xl text-center font-bold my-4">Tabla de clientes</p>
      <SearchBar handleSearchText={setSearchText} />
      <div className="sm:px-24 px-4">
        
        <Table
          locale={customLocale}
          bordered
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  );
}

export default ClientsTable;
