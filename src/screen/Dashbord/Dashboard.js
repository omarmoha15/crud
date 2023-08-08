import React, { useState } from "react";
import Employees from "../Employees";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

import newlogo from "../iamge/newlogo.png";

function Dashboard() {
  const [users, setUsers] = useState(Employees);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [newUser, setNewUser] = useState({
    user_name: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleCreateToggle = () => {
    setIsCreatingUser(!isCreatingUser);
  };

  const handleCreateUser = () => {
    setUsers([...users, newUser]);
    setNewUser({
      user_name: "",
      password: "",
      email: "",
      phone: "",
    });
    setIsCreatingUser(false);
  };

  const handleEdit = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isEditing: true } : user
      )
    );
  };

  const handleSave = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isEditing: false } : user
      )
    );
  };

  const handleInputChange = (id, field, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <MDBContainer fluid className="my-5 gradient-form">
<div className="header" style={{ textAlign: 'center' }}>
  <img
    style={{
      width: '400px',
      height: '110px',
      display: 'inline-block',
      verticalAlign: 'middle',
    }}
    src={newlogo}
    alt="Logo"
    className="logo"
  />
</div>

      <div className="dashboard-container">
        <h2 dir="rtl" className="dashboard-header">
          لوحة التحكم
        </h2>
        <MDBTable className="user-table">
          <MDBTableHead>
            <tr>
              <th>ID</th>
              <th>اسم المستخدم</th>
              <th>كلمة المرور</th>
              <th>الايميل</th>
              <th>رقم الهاتف</th>
              <th>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {isCreatingUser && (
              <tr>
                <td>{/* ID (optional) */}</td>
                <td>
                  <MDBInput
                    type="text"
                    value={newUser.user_name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, user_name: e.target.value })
                    }
                  />
                </td>
                <td>
                  <MDBInput
                    type="password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                  />
                </td>
                <td>
                  <MDBInput
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                  />
                </td>
                <td>
                  <MDBInput
                    type="text"
                    value={newUser.phone}
                    onChange={(e) =>
                      setNewUser({ ...newUser, phone: e.target.value })
                    }
                  />
                </td>
                <td>
                  <MDBBtn
                    className="btn btn-success"
                    onClick={handleCreateUser}
                  >
                    حفظ
                  </MDBBtn>
                  <MDBBtn
                    className="btn btn-danger"
                    onClick={handleCreateToggle}
                  >
                    إلغاء
                  </MDBBtn>
                </td>
              </tr>
            )}
            {!isCreatingUser &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {user.isEditing ? (
                      <MDBInput
                        type="text"
                        value={user.user_name}
                        onChange={(e) =>
                          handleInputChange(
                            user.id,
                            "user_name",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      user.user_name
                    )}
                  </td>
                  <td>
                    {user.isEditing ? (
                      <MDBInput
                        type="password"
                        value={user.password}
                        onChange={(e) =>
                          handleInputChange(user.id, "password", e.target.value)
                        }
                      />
                    ) : (
                      user.password
                    )}
                  </td>
                  <td>
                    {user.isEditing ? (
                      <MDBInput
                        type="email"
                        value={user.email}
                        onChange={(e) =>
                          handleInputChange(user.id, "email", e.target.value)
                        }
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {user.isEditing ? (
                      <MDBInput
                        type="text"
                        value={user.phone}
                        onChange={(e) =>
                          handleInputChange(user.id, "phone", e.target.value)
                        }
                      />
                    ) : (
                      user.phone
                    )}
                  </td>
                  <td>
                    {user.isEditing ? (
                      <>
                        <MDBBtn
                          className="btn btn-success"
                          onClick={() => handleSave(user.id)}
                        >
                          حفظ
                        </MDBBtn>
                        <MDBBtn
                          className="btn btn-danger"
                          onClick={() =>
                            setUsers((prevUsers) =>
                              prevUsers.map((prevUser) =>
                                prevUser.id === user.id
                                  ? { ...prevUser, isEditing: false }
                                  : prevUser
                              )
                            )
                          }
                        >
                          إلغاء
                        </MDBBtn>
                      </>
                    ) : (
                      <>
                        <MDBBtn
                          className="btn btn-primary me-2"
                          onClick={() => handleEdit(user.id)}
                        >
                          تعديل
                        </MDBBtn>
                        <MDBBtn
                          className="btn btn-danger"
                          onClick={() => handleDelete(user.id)}
                        >
                          حذف
                        </MDBBtn>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
        {!isCreatingUser && (
          <div className="text-center">
            <MDBBtn className="btn btn-primary" onClick={handleCreateToggle}>
              إنشاء حساب
            </MDBBtn>
          </div>
        )}
      </div>
    </MDBContainer>
  );
}

export default Dashboard;
