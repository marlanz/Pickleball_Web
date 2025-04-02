import React from "react";
import { players } from "../data/players";
import { Table } from "antd";
import Typography from "@mui/material/Typography";
import CustomChip from "./CustomChip";

const RegisteredPlayers = () => {
  const dataSource = players.map((p) => ({
    key: p.id,
    id: p.id,
    name: p.name,
    email: p.email,
    registeredDate: p.joined_date,
    level: p.player_level,
    status: p.status,
  }));
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center",
    },
    {
      title: "Player name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Player level",
      dataIndex: "level",
      align: "center",
    },

    {
      title: "Registered on",
      dataIndex: "registeredDate",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (_, record) => <CustomChip title={record.status} />,
    },
  ];
  return (
    <div
      style={{
        padding: "30px",
        // boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
        border: "1px solid #666666",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="body1"
        color="initial"
        sx={{ mb: "12px" }}
        fontSize={20}
        fontWeight={600}
      >
        Registered Players ({players.length})
      </Typography>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
          position: ["bottomRight"],
        }}
        components={{
          body: {
            row: (props) => (
              <tr
                {...props}
                style={{
                  height: "98px", // Set the desired row height here
                }}
              />
            ),
          },
        }}
      />
    </div>
  );
};

export default RegisteredPlayers;
