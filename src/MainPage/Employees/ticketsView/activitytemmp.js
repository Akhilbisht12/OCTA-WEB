<div className="chats">
  <div className="chat chat-left">
    <div className="chat-avatar">
      <Link to="/app/profile/employee-profile" className="avatar">
        <img src={Avatar_02} alt="" />
      </Link>
    </div>
    <div className="chat-body">
      <div className="chat-bubble">
        <div className="chat-content">
          <span className="task-chat-user">John Doe</span>{" "}
          <span className="chat-time">8:35 am</span>
          <p>I'm just looking around.</p>
          <p>Will you tell me something about yourself? </p>
        </div>
      </div>
    </div>
  </div>
  <div className="completed-task-msg">
    <span className="task-success">
      <a href="#">John Doe</a> closed this ticket.
    </span>
    <span className="task-time">Today at 9:27am</span>
  </div>
  <div className="chat chat-left">
    <div className="chat-avatar">
      <Link to="/app/profile/employee-profile" className="avatar">
        <img src={Avatar_02} alt="" />
      </Link>
    </div>
    <div className="chat-body">
      <div className="chat-bubble">
        <div className="chat-content">
          <span className="task-chat-user">John Doe</span>
          <span className="file-attached">
            attached 3 files <i className="fa fa-paperclip" />
          </span>
          <span className="chat-time">Feb 17, 2019 at 4:32am</span>
          <ul className="attach-list">
            <li>
              <i className="fa fa-file" /> <a href="#">project_document.avi</a>
            </li>
            <li>
              <i className="fa fa-file" />{" "}
              <a href="#">video_conferencing.psd</a>
            </li>
            <li>
              <i className="fa fa-file" /> <a href="#">landing_page.psd</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="chat chat-left">
    <div className="chat-avatar">
      <Link to="/app/profile/employee-profile" className="avatar">
        <img src={Avatar_09} alt="" />
      </Link>
    </div>
    <div className="chat-body">
      <div className="chat-bubble">
        <div className="chat-content">
          <span className="task-chat-user">Jeffery Lalor</span>
          <span className="file-attached">
            attached file <i className="fa fa-paperclip" />
          </span>
          <span className="chat-time">Yesterday at 9:16pm</span>
          <ul className="attach-list">
            <li className="pdf-file">
              <i className="fa fa-file-pdf-o" />{" "}
              <a href="#">Document_2016.pdf</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="chat chat-left">
    <div className="chat-avatar">
      <Link to="/app/profile/employee-profile" className="avatar">
        <img src={Avatar_09} alt="" />
      </Link>
    </div>
    <div className="chat-body">
      <div className="chat-bubble">
        <div className="chat-content">
          <span className="task-chat-user">Jeffery Lalor</span>
          <span className="file-attached">
            attached file <i className="fa fa-paperclip" />
          </span>
          <span className="chat-time">Today at 12:42pm</span>
          <ul className="attach-list">
            <li className="img-file">
              <div className="attach-img-download">
                <a href="#">avatar-1.jpg</a>
              </div>
              <div className="task-attach-img">
                <img src={User} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="task-information">
    <span className="task-info-line">
      <a className="task-user" href="#">
        John Doe
      </a>
      <span className="task-info-subject">marked ticket as reopened</span>
    </span>
    <div className="task-time">1:16pm</div>
  </div>
</div>;
