import React from "react";
import styles from "@/styles/Tickets.module.css";
import profile from "@/assets/images/ticket/profile.png";
import message1 from "@/assets/images/ticket/message1.png";
import message2 from "@/assets/images/ticket/message2.png";
import priority from "@/assets/images/ticket/priority.png";
import { Timeline } from "antd";
import { BsCircleFill } from "react-icons/bs";
import withAuth from "@/hooks/useAuth";

const Index = () => {
  return (
    <div className={`${styles.ticketSectionContainer}`}>
      <div className={`${styles.ticketDetailsContainer}`}>
        <div className={`${styles.ticketIDContainer}`}>
          <p className={`${styles.ticketId}`}>Ticket #3032</p>
          <p className={`${styles.ticketStatus}`}>Open</p>
        </div>

        <div className={`${styles.ticketFieldContainer}`}>
          <p className={`${styles.ticketFieldTitle}`}>Ticket Raised at</p>
          <p className={`${styles.ticketRaisedTime}`}>
            12 January 2023, 4:30 pm
          </p>
        </div>

        <div className={`${styles.ticketFieldContainer}`}>
          <p className={`${styles.ticketFieldTitle}`}>Ticket Summary</p>
          <div className={`${styles.ticketFieldContent}`}>
            <p className={`${styles.ticketSummaryText}`}>
              Lorem ipsum dolor sit amet consectetur dunt proin ac.
            </p>
          </div>
        </div>

        <div className={`${styles.ticketFieldContainer}`}>
          <p className={`${styles.ticketFieldTitle}`}>Assigned To</p>
          <div className={`${styles.ticketFieldContent}`}>
            <div className={`${styles.ticketAssignedTo}`}>
              <img src={profile?.src} alt="Profile" />
              <p className={`${styles.ticketAssignToName}`}>Michael Brooks</p>
            </div>
          </div>
        </div>

        <div className={`${styles.ticketFieldContainer}`}>
          <p className={`${styles.ticketFieldTitle}`}>Category/Form</p>
          <div className={`${styles.ticketFieldContent}`}>
            <p className={`${styles.ticketAssignToName}`}>
              <b>Michael Brooks</b>
            </p>
          </div>
        </div>

        <div className={`${styles.ticketFieldContainer}`}>
          <p className={`${styles.ticketFieldTitle}`}>Tags</p>
          <div className={`${styles.ticketFieldContent}`}>
            <div className={`${styles.ticketTags}`}>
              <p className={`${styles.ticketTag}`}>company plan</p>
              <p className={`${styles.ticketTag}`}>3d mapping</p>
            </div>
          </div>
        </div>

        <div className={`${styles.ticketFieldContainer}`}>
          <p className={`${styles.ticketFieldTitle}`}>Priority</p>
          <div className={`${styles.ticketFieldContent}`}>
            <div className={`${styles.ticketPriority}`}>
              <img src={priority?.src} alt="Priority Flag" />
              <p className={`${styles.ticketPriorityLable}`}>
                <b>High Priority</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.ticketConversationContainer}`}>
        <div className={`${styles.ticketConversationHeader}`}>
          <p className={`${styles.ticketConversationHeaderTitle}`}>
            Conversation with Michael Brooks
          </p>
          <button className={`${styles.ticketCreateBtn}`}>
            Create New Ticket
          </button>
        </div>
        <div className={`${styles.conversationContainer}`}>
          <div className={`${styles.messageCard}`}>
            <div className={`${styles.messageCardProfile}`}>
              <img src={profile?.src} alt="Profile" />
            </div>
            <div className={`${styles.messageCardMessageContent}`}>
              <div className={`${styles.messageCardMessageHeader}`}>
                <p className={`${styles.messageCardMessageSenderName}`}>
                  John Smith
                </p>
                <p className={`${styles.messageCardMessageDate}`}>
                  12 January 2023, 4:30 pm
                </p>
              </div>
              <p className={`${styles.messageCardMessage}`}>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin purus magna
                enim at. Dui donec et egestas sit. Sem vel turpis vulputate quam
                pharetra id interdum et. Morbi aliquet turpis massa curabitur
                malesuada et sit. Bibendum adipiscing dignissim at ornare velit
                lacus molestie.
              </p>
              <img
                className={`${styles.messageCardMessageImage}`}
                src={message1?.src}
                alt="Message"
              />
            </div>
          </div>
          <div
            className={`${styles.messageCard} ${styles.messageCardSupportReply}`}
          >
            <div className={`${styles.messageCardProfile}`}>
              <img src={profile?.src} alt="Profile" />
            </div>
            <div className={`${styles.messageCardMessageContent}`}>
              <div className={`${styles.messageCardMessageHeader}`}>
                <p className={`${styles.messageCardMessageSenderName}`}>
                  John Smith
                </p>
                <p className={`${styles.messageCardMessageDate}`}>
                  12 January 2023, 4:30 pm
                </p>
              </div>
              <p className={`${styles.messageCardMessage}`}>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin purus magna
                enim at. Dui donec et egestas sit. Sem vel turpis vulputate quam
                pharetra id interdum et. Morbi aliquet turpis massa curabitur
                malesuada et sit. Bibendum adipiscing dignissim at ornare velit
                lacus molestie.
              </p>
            </div>
          </div>
          <div className={`${styles.messageCard}`}>
            <div className={`${styles.messageCardProfile}`}>
              <img src={profile?.src} alt="Profile" />
            </div>
            <div className={`${styles.messageCardMessageContent}`}>
              <div className={`${styles.messageCardMessageHeader}`}>
                <p className={`${styles.messageCardMessageSenderName}`}>
                  John Smith
                </p>
                <p className={`${styles.messageCardMessageDate}`}>
                  12 January 2023, 4:30 pm
                </p>
              </div>
              <img
                className={`${styles.messageCardMessageImage}`}
                src={message2?.src}
                alt="Message"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.sendReplyContainer}`}>
          <p className={`${styles.sendReplyTitle}`}>Reply</p>
        </div>
      </div>
      <div className={`${styles.ticketDetailsContainer}`}>
        <p className={`${styles.ticketTimeLineTitle}`}>Timeline/Interactions</p>
        <div
          className={`${styles.ticketTimeLineContainer} ticket-timeline-container`}
        >
          <Timeline
            items={[
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>Ticket Raised</b>
                    </p>
                    <p>13 January 2023, 4:30 pm</p>
                  </>
                ),
              },
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>Assigned Support Assistance</b>
                    </p>
                    <p>13 January 2023, 4:30 pm</p>
                  </>
                ),
              },
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>First Interaction with Michael Brooks</b>
                    </p>
                    <p>13 January 2023, 4:30 pm</p>
                  </>
                ),
              },
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>Reply From Michael Brooks</b>
                    </p>
                    <p>13 January 2023, 4:30 pm</p>
                  </>
                ),
              },
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>Closed the ticket</b>
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Index);
