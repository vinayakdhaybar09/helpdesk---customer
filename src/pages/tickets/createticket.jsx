import withAuth from "@/hooks/useAuth";
import React, { useRef } from "react";
import style from "@/styles/tickets/tickets.module.css";
import { MdOutlineArrowBack } from "react-icons/md";
import { Select, message, Upload } from "antd";
// import { Editor } from "tinymce/tinymce";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useRouter } from "next/dist/client/router";

const CreateTicket = () => {

  const router = useRouter();
  const editorRef = useRef(null);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className={`${style.tickets}`}>
      <div className={`${style.pagePath}`}>
        <p>
          All Tickets / <b>New Ticket</b>
        </p>
      </div>
      <div className={`${style.createTicketContainer}`}>
        <div className={`${style.createTicketTitle}`}>
          <button onClick={()=> router.push("/tickets")}>
            <MdOutlineArrowBack />
          </button>
          <p>Submit a ticket request</p>
        </div>
        <div className={`${style.createTicketForm}`}>
          <div className={`${style.col1}`}>
            <label>Ticket Summary</label>
            <input type="text" placeholder="Enter ticket summary" />
          </div>
          <div className={`${style.col2}`}>
            <label>Priority</label>
            <div className={`antd-select-container`}>
              <Select
                placeholder="Select ticket priority"
                onChange={handleChange}
                options={[
                  {
                    value: "Low",
                    label: "Low",
                  },
                  {
                    value: "Medium",
                    label: "Medium",
                  },
                  {
                    value: "High",
                    label: "High",
                  },
                ]}
              />
            </div>
          </div>
          <div className={`${style.col2}`}>
            <label>Ticket Category</label>
            <div className={`antd-select-container`}>
              <Select
                placeholder="Select ticket category"
                onChange={handleChange}
                options={[
                  {
                    value: "Low",
                    label: "Low",
                  },
                  {
                    value: "Medium",
                    label: "Medium",
                  },
                  {
                    value: "High",
                    label: "High",
                  },
                ]}
              />
            </div>
          </div>
          {/* <div className={`${style.col1}`}>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "a11ychecker",
                  "advlist",
                  "advcode",
                  "advtable",
                  "autolink",
                  "checklist",
                  "export",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "powerpaste",
                  "fullscreen",
                  "formatpainter",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | casechange blocks | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
              }}
            />
          </div> */}
          <div className={`${style.col1}`}>
            <label>Attach Files(Optional)</label>
            <div className="antd-dragger-container">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <FaCloudUploadAlt />
                </p>
                <p className="ant-upload-text">
                  drag & drop file <br />
                  or <b>Browse Files</b>
                </p>
              </Dragger>
              <p className={`${style.uploadFileIntruction}`}>*You can upload JPEG, PNG, PDF, EXLS, TXT Files</p>
            </div>
          </div>
          <div className={`${style.col1}`}>
            <button className={`${style.ticketSubmit}`}>Submit Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(CreateTicket);
