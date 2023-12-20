import React, { useRef } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { getSieuThiList } from "../../api/api.js";

const SieuThiList = () => {
  const title = "Submit to show store list";
  const keyword = useRef("");
  const size = useRef(5);
  const page = useRef(1);
  const tinhst = useRef("");
  const huyenst = useRef("");
  const xast = useRef("");
  const fromDate = useRef("");
  const toDate = useRef("");
  const [sieuthi, setSieuThi] = useState();

  function checkVaildInput(input) {
    if (!input) {
      console.log("Please enter");
    }
    console.log(input);
  }

  const input = {
    page: page.current,
    pageSize: size.current,
    keyword: keyword.current,
    rageDate: {
      fromDate: fromDate.current,
      toDate: toDate.current,
    },
    tinhst: tinhst.current,
    huyenst: huyenst.current,
    xast: xast.current,
  };

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

  const GetSieuThiList = async () => {
    try {
      checkVaildInput(input);
      const res = await getSieuThiList(input);
      setSieuThi(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Tên"
            ref={keyword}
            value={keyword.current.value}
          />
          <input
            type="number"
            placeholder="pageSize"
            ref={size}
            value={size.current.value}
          />
          <input
            type="number"
            placeholder="page"
            ref={page}
            value={page.current.value}
          />
          <input
            type="text"
            placeholder="Tỉnh"
            ref={tinhst}
            value={tinhst.current.value}
          />
          <input
            type="text"
            placeholder="Huyện"
            ref={huyenst}
            value={huyenst.current.value}
          />
          <input
            type="text"
            placeholder="Xã"
            ref={xast}
            value={xast.current.value}
          />
        </div>
        <div>
          <button onClick={GetSieuThiList}>{title}</button>
          <p>Tổng số Siêu Thị {sieuthi?.totalCount}</p>
        </div>
      </div>
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
