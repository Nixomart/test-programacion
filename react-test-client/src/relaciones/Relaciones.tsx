/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getColumns, getSysType, getTables } from "../api/sqlServerAPI";
import image from "../assets/image.png"
export default function Relaciones() {
  const [tables, setTables] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);
  const [sysTypes, setSysTypes] = useState<any>([]);
  const getTabless = async () => {
    const response = await getTables();
    setTables(response);
  };
  const getColumnss = async () => {
    const response = await getColumns();
    setColumns(response);
  };
  const getSysTypess = async () => {
    const response = await getSysType();
    console.log(response);

    setSysTypes(response);
  };
  useEffect(() => {
    getTabless();
    getColumnss();
    getSysTypess();
  }, []);
  const tablesWithColumns = tables.map((table: any) => ({
    ...table,
    columns: columns.filter(
      (column: any) => column.object_id === table.object_id
    ),
  }));

  const completeStructure = tablesWithColumns.map((table: any) => ({
    ...table,
    columns: table.columns.map((column: any) => ({
      ...column,
      sysType: sysTypes.find(
        (sysType: any) => sysType.system_type_id === column.system_type_id
      ),
    })),
  }));
  return (
    <Layout>
      <div className="gap-y-5 w-1/2 flex flex-col">
      <p>SQL SERVER EXPRESS 16.0 - 2022 Datos de:  sys.tables, sys.column, sys.system_type_id </p>
      <p>relaciones por su FK</p>
      <img src={image} alt="" />
        {completeStructure.map((table: any) => (
          <div key={table.object_id} className="bg-red-600 text-white">
            <p>{table.object_id + " " + table.name}</p>
            <div className="ml-4">
              {table.columns.map((column: any) => (
                <div key={column.column_id} className="bg-green-600 text-white">
                  <p>{column.object_id + " " + column.name}</p>
                  <p className="bg-blue-600">{column.system_type_id}</p>
                  <div className="ml-4 bg-blue-600 text-white">
                    <p>{column.system_type_id + " " + column.sysType?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
