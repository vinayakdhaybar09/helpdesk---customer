import withAuth from "@/hooks/useAuth";
import React from "react";
import style from "@/styles/tickets/tickets.module.css";
import noTicket from "@/assets/images/ticket/noTicket.png";
import { useRouter } from "next/router";
import { Space, Table } from "antd";
import { BiSort, BiFilterAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";

const Tickets = () => {
  const router = useRouter();
  const isData = true

  const columns = [
    {
      title: "Ticket ID",
      dataIndex: "ticket_ID",
      key: "ticket_ID",
      render: (text) => (
        <Link className={`${style.ticketIdLink}`} href="/tickets/ticketdetail" >{text}</Link>
      ),  
    },
    {
      title: "Ticket Summary",
      dataIndex: "ticket_summary",
      key: "ticket_summary",
    },
    {
      title: "Assigned To",
      dataIndex: "assigned_to",
      key: "assigned_to",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Date Submitted",
      key: "date_submitted",
      dataIndex: "date_submitted",
      render: (date) => <>{date}</>,
    },
    {
      title: "",
      key: "action",
      render: () => (
        <Space size="middle">
          <CiMenuKebab />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      ticket_ID: "#302300432",
      ticket_summary:
        "Lorem ipsum dolor sit amet consectetur. Mauris vitae donec vitae tortor mollis nisl cras velit at. Feugiat rhoncus vitae sed etiam sed...",
      assigned_to: "unassigned",
      status: "Open",
      date_submitted: "23 Feb 2023",
    },
    {
      key: "2",
      ticket_ID: "#302300320",
      ticket_summary:
        "Lorem ipsum dolor sit amet consectetur. Mauris vitae donec vitae tortor mollis nisl cras velit at. Feugiat rhoncus vitae sed etiam sed...",
      assigned_to: "Michael Brooks",
      status: "Closed",
      date_submitted: "23 Feb 2023",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.info(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <div className={`${style.tickets}`}>
      {isData ? (
        <div className={`${style.ticketsContainer}`}>
          <div className={`${style.ticketsTopBar}`}>
            <button className={`${style.ticketsTopBarButtonWhite}`}>
              <BiSort /> Sort By
            </button>
            <button className={`${style.ticketsTopBarButtonWhite}`}>
              <BiFilterAlt /> Filter By
            </button>
            <button
              onClick={() => router.push("/tickets/createticket")}
              className={`${style.ticketsTopBarButtonGray}`}
            >
              <GrAdd /> New Ticket
            </button>
          </div>
          <div className="antd-table-container">
            <Table
              columns={columns}
              dataSource={data}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
            />
          </div>
        </div>
      ) : (
        <div className={`${style.noTicketsContainer}`}>
          <img src={noTicket?.src} alt="No Tickets" />
          <p className={`${style.noTicketsTitle}`}>No Tickets Found</p>
          <p className={`${style.noTicketsPara}`}>
            Please submit your ticket request
          </p>
          <button onClick={() => router.push("/tickets/createticket")}>
            + New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default withAuth(Tickets);
