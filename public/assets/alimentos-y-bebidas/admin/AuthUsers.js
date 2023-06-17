import React, { useContext } from "react";
import { AuthUsersContainer, Table } from "../../styles/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../../context/MainContext";
import { deleteAuthClient } from "../../api/daryan.api";
import StatusBtn from "../StatusBtn";

const AuthUsers = ({ data, deleteAU }) => {
  //console.log(data);
  const { isAdmin, lang } = useContext(MainContext);

  return (
    <AuthUsersContainer>
      <h3>Usuarios autorizados</h3>
      <div className="list-users">
        {/* <ul>
                <li>Usuario</li>
                <li>Status</li>
                <li>Fecha de autorizacion</li>
                {data.map((user, i) => {
                    return (
                        <li key={user.id+'client'}>
                            
                            {i === 0 && user.fullname}

                        </li>
                    )
                } )}
            </ul>
             */}
        <Table>
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Status</th>
                <th>Fecha de autorizacion</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, i) => {
                return (
                  <tr key={user.id + "client"}>
                    <td>{user.fullname}</td>
                    <td>
                      {isAdmin === true ? <StatusBtn
                        status={Number(user.status)}
                        id={user.id}
                        table="auth_clients"
                      />
                        : 
                        user.status === '1' ? <>
                        {
                          lang === 'es' ? <button className="active btn">Activo</button> : <button className="active btn">Active</button>
                        }

                        </> : <>
                        {
                          lang === 'es'? <button className="inactive btn">Inactivo</button> : <button className="inactive btn">Inactive</button>
                        }
                        </>
                    }
                    </td>
                    <td>{user.auth_date}</td>
                    <td>
                      {isAdmin === true && (
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={(e) => deleteAU(user.id)}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Table>
      </div>
    </AuthUsersContainer>
  );
};

export default AuthUsers;
