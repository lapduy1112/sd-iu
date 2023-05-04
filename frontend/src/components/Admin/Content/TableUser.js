import { useState, useEffect } from "react";
function TableUser(props) {
  const [listUser, setListUser] = useState([
    {
      "id":1,
      "username":"lap",
      "email":"abc@gmail.com",
      "role":"STUDENT"

    }
  ]);
  useEffect(() => {}, []);

  return (
    <>
      <table className="table caption-top table-hover table-bordered">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => props.handleClickBtnView(item)}>
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => props.handleClickBtnUpdate(item)}>
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleClickBtnDelete(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan={"5"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
export default TableUser;
