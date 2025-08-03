import React from "react";

const data = [
  { stt: 1, name: "Phan Thanh Hoàng", location: "xã An Bình" },
  { stt: 2, name: "Mai Hà Phương", location: "xã Long Hồ" },
  { stt: 3, name: "Nguyễn Văn Móm Em", location: "xã Quới An" },
  { stt: 4, name: "Võ Trung Sơn", location: "xã Phú Quới" },
  { stt: 5, name: "Nguyễn Hùng Phú", location: "xã Nhơn Phú" }
];

export default function DanhSachPage() {
  return (
    <div className="p-4 md:p-8 bg-white">
      <h1 className="text-xl md:text-2xl font-semibold mb-6 text-center">Danh sách Chủ tịch UBND các xã, phường tỉnh Vĩnh Long</h1>
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 border">STT</th>
              <th className="px-4 py-3 border">Chủ tịch</th>
              <th className="px-4 py-3 border">Xã / Phường</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition-all border-t border-gray-100">
                <td className="px-4 py-2 border">{row.stt}</td>
                <td className="px-4 py-2 border">{row.name}</td>
                <td className="px-4 py-2 border">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
