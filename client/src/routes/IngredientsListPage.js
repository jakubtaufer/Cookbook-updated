import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import { Table, Container } from "react-bootstrap";

function IngredientsListPage() {
  const [ingredientsData, setIngredientsData] = useState({
    state: "pending",
  });

  useEffect(() => {
    fetch("/ingredient/list", { method: "GET" }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setIngredientsData({ state: "error", error: responseJson });
      } else {
        setIngredientsData({ state: "success", data: responseJson });
      }
    });
  }, []);

  function getChild() {
    const isPending = ingredientsData.state === "pending";
    const isSuccess = ingredientsData.state === "success";
    const isError = ingredientsData.state === "error";

    if (isPending) {
      return (
        <div
          className={
            "d-flex flex-column justify-content-center align-items-center h-50 "
          }
        >
          <Icon size={3} path={mdiLoading} spin={true} />
          <span className={"fs-3"}>LOADING</span>
        </div>
      );
    } else if (isSuccess) {
      return (
        <Container className="mt-5">
          <Table>
            <thead>
              <tr>
                <th className="text-start">Název</th>
                <th className="text-end">ID ingredience</th>
              </tr>
            </thead>
            <tbody>
              {ingredientsData.data.map((ing) => {
                return (
                  <tr key={ing.id}>
                    <td className="text-start">{ing.name}</td>
                    <td className="text-end">{ing.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      );
    } else if (isError) {
      return (
        <div>
          <div>Nepodařilo se načíst ingredience.</div>
          <br />
          <pre>{JSON.stringify(ingredientsData.error, null, 2)}</pre>
        </div>
      );
    }
    return null;
  }

  return getChild();
}

export default IngredientsListPage;
