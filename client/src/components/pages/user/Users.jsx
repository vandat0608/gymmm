import React from "react";
import "./Users.css";
const Users = () => {
  return (
    <main>
      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className="bx bx-receipt"></i>
            <h3>
              Users Admin
              <button type="button" className="btn btn-outline-danger">
                Delete
              </button>
            </h3>
            <button type="button" className="btn btn-outline-primary">
              Create User
            </button>
          </div>

          <table className="table-secondary">
            <thead>
              <tr>
                <th className="col-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                </th>
                <th className="col-2">#</th>
                <th className="col-3">Tài khoản</th>
                <th className="col-4">Mật khẩu</th>
                <th className="col-2">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                </th>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <td>
                    <button type="button" className="btn btn-outline-danger">
                      Xóa
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      Sửa
                    </button>
                  </td>
                </td>
              </tr>
              <tr>
                <th>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                </th>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <td>
                    <button type="button" className="btn btn-outline-danger">
                      Xóa
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      Sửa
                    </button>
                  </td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default Users;
