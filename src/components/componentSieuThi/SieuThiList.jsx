import React from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { getSieuThiList } from "../../api/api.js";

const SieuThiList = () => {
  const columns = [
    {
      name: "MaST",
      selector: "maST",
      sortable: true,
    },
    {
      name: "TenST",
      selector: "tenST",
      sortable: true,
    },
    {
      name: "DCST",
      selector: "dcST",
      sortable: true,
    },
    {
      name: "NguoiCN",
      selector: "nguoiCN",
      sortable: true,
    },
  ];

  const [sieuthi, setSieuThi] = useState();

  const GetSieuThiList = async () => {
    try {
      const res = await getSieuThiList({
        page: 1,
        pageSize: 10,
        // keyword: "string",
        // rageDate: {
        //   fromDate: "2023-12-18T15:30:58.326Z",
        //   toDate: "2023-12-18T15:30:58.326Z",
        // },
        // tinhst: "string",
        // huyenst: "string",
        // xast: "string",
      });
      setSieuThi(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={GetSieuThiList}> Submit to show store list</button>
      <p>Tổng số Siêu Thị {sieuthi?.totalCount}</p>
      <DataTable
        title="Sieu Thi Data"
        columns={columns}
        data={sieuthi?.sieuThi}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default SieuThiList;
