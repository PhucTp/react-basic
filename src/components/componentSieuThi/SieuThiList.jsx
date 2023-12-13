import  React from 'react'; 


const SieuThiList = () => {
  // Dữ liệu mẫu về các siêu thị
  const storeData = [
    {
      ma: 'ST001',
      ten: 'Siêu Thị A',
      tinh: 'Tỉnh A',
      quan: 'Quận 1',
      huyen: 'Huyện X',
      diaChi: '123 Đường ABC, Quận 1, Tỉnh A',
    },
    // Thêm dữ liệu cho các siêu thị khác
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Mã</th>
          <th>Tên</th>
          <th>Tỉnh</th>
          <th>Quận</th>
          <th>Huyện</th>
          <th>Địa Chỉ</th>
        </tr>
      </thead>
      <tbody>
        {storeData.map((store) => (
          <tr key={store.ma}>
            <td>{store.ma}</td>
            <td>{store.ten}</td>
            <td>{store.tinh}</td>
            <td>{store.quan}</td>
            <td>{store.huyen}</td>
            <td>{store.diaChi}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default SieuThiList