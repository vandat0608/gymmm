import React from "react";
import "./Category.css";
const Category = () => {
  return (
    <main>
      <div class="bottom-data">
        <div class="orders">
          <div class="header">
            <i class="bx bx-receipt"></i>
            <h3>Data khách hàng</h3>
            <i class="bx bx-filter"></i>
            <i class="bx bx-search"></i>
          </div>

          <table class="table-secondary">
            <thead>
              <tr>
                <th className="col">
                  <input class="form-check-input" type="checkbox" value="" />
                </th>
                <th className="col-2">#</th>
                <th className="col-3">Tên</th>
                <th className="col-3">SĐT</th>
                <th className="col-3">Nguồn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="">
                  <input class="form-check-input" type="checkbox" value="" />
                </th>
                <td className="">1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th className="">
                  <input class="form-check-input" type="checkbox" value="" />
                </th>
                <td className="">1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default Category;
