import React, { useState } from "react";
import "../dashboard/dashboard.css";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import ReactTable from "react-table-v6";

import "react-table-v6/react-table.css";
import * as data from "../dashboard/ReactableData";

import "./transaction.css";

const Dashboard = props => {
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(data.dataTable);

  const data2 = jsonData.map((prop, key) => {
    return {
      id: key,
      name: prop[0],
      designation: prop[1],
      location: prop[2],
      age: prop[3],
      actions: (
        // we've added some custom button actions
        <div className="text-center" style={{ color: "red" }}>
          {/* use this button to add a edit kind of action */}
          Expired
        </div>
      )
    };
  });

  return (
    <div className="main">
      <div className="transaction-table-container">
        <Card>
          <CardTitle className="mb-0 p-3 border-bottom bg-light">
            <i className="mdi mdi-border-right mr-2"></i>All Transactions
          </CardTitle>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "Beneficiary",
                  accessor: "name"
                },

                {
                  Header: "Amount",
                  accessor: "age",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "Actions",
                  accessor: "actions",
                  sortable: false,
                  filterable: false
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
              showPaginationBottom={true}
              className="-striped -highlight"
              data={data2}
              filterable
            />
          </CardBody>
        </Card>
      </div>

      <br />
    </div>
  );
};

export default Dashboard;
