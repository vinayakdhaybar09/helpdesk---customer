import withAuth from "@/hooks/useAuth";
import React from "react";
import style from "@/styles/tickets/tickets.module.css";
import noTicket from "@/assets/images/ticket/noTicket.png";
import { useRouter } from "next/router";
import { Space, Table } from "antd";
import { CiMenuKebab } from "react-icons/ci";
import { GrAdd } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
// import Assigned from "@/components/tickets/Assigned";
import { FiSearch } from "react-icons/fi";


const data = [
  {
    key: "1",
    ticket_ID: "#302300432",
    user_name: "John Smith",
    email: "johnsmith@gmail.com",
    ticket_summary:
      "Lorem ipsum dolor sit amet consectetur. Mauris vitae donec vitae tortor mollis nisl cras velit at. Feugiat rhoncus vitae sed etiam sed...",
    assigned_to: "unassigned",
    status: "open",
    date_submitted: "23 Feb 2023",
    last_msg: "No messages",
    priority: "high",
  },
  {
    key: "2",
    ticket_ID: "#302300320",
    user_name: "Rajiv Sharma",
    email: "johnsmith@gmail.com",
    ticket_summary:
      "Lorem ipsum dolor sit amet consectetur. Mauris vitae donec vitae tortor mollis nisl cras velit at. Feugiat rhoncus vitae sed etiam sed...",
    assigned_to: "Michael Brooks",
    status: "inprogress",
    date_submitted: "23 Feb 2023",
    last_msg: "2 hours ago",
    priority: "low",
  },
];

const Tickets = () => {
  const router = useRouter();
  const isData = true;

  const columns = [
    {
      title: "Ticket ID",
      dataIndex: "ticket_ID",
      key: "ticket_ID",
      render: (text) => (
        <Link className={`${style.ticketIdLink}`} href="/tickets/ticketdetail">
          {text}
        </Link>
      ),
    },
    {
      title: "Ticket Summary",
      key: "ticket_summary",
      render: (data) => (
        <p className={`${style.ticketSummery}`}>{data.ticket_summary}</p>
      ),
    },
    {
      title: "Assigned To",
      key: "assigned_to",
      render: () => {
        return (
          <>
            {/* <Assigned /> */}
            <p>Assigned</p>
          </>
        );
      },
    },
    {
      title: "Date Submitted",
      key: "date_submitted",
      dataIndex: "date_submitted",
      render: (date) => <>{date}</>,
    },
    {
      title: "Status",
      key: "status",
      render: (data) => (
        <p
          className={
            data.status === "open"
              ? `${style.statusDropdownOpen}`
              : data.status === "closed"
              ? `${style.statusDropdownClosed}`
              : data.status === "inprogress"
              ? `${style.statusDropdownInprogress}`
              : null
          }
        >
          {data.status}
        </p>
      ),
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

  const rowSelection = {
    // onChange: (selectedRowKeys, selectedRows) => {
    //   console.info(
    //     `selectedRowKeys: ${selectedRowKeys}`,
    //     "selectedRows: ",
    //     selectedRows
    //   );
    // },
  };

  return (
    <div className={`${style.tickets}`}>
      {isData ? (
        <div className={`${style.ticketsContainer}`}>
          <div className={`${style.ticketsTopBar}`}>
            <div className={`${style.ticketsTopBarLeft}`}>
              <p>All Tickets / New Ticket</p>
            </div>
            <div className={`${style.ticketsTopBarRight}`}>
              <div className={`${style.usersSearchbar}`}>
                <FiSearch className={`${style.usersSearchbarIcon}`} />
                <input type={"text"} placeholder="Search user" />
              </div>
              <button className={`${style.ticketsTopBarButtonWhite}`}>
                Sort By: <RiArrowDropDownLine />
              </button>
              <button className={`${style.ticketsTopBarButtonWhite}`}>
                Filter By: <RiArrowDropDownLine />
              </button>
              <button
                onClick={() => router.push("/tickets/createticket")}
                className={`${style.ticketsTopBarButtonGray}`}
              >
                <GrAdd /> New Ticket
              </button>
            </div>
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
