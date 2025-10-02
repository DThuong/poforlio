import { useState } from 'react'
import CircleBtn from '../component/CircleBtn'
import './App.css'
import ModalMsg from '../component/ModalMsg';

function App() {
  const messages = {
    skill: "Kĩ năng: ReactJS, HTML, CSS, JavaScript...",
    project: "Một số project: To-do App, Portfolio, Blog...",
    cv: "CV của mình đang được update!",
    connect: "Kết nối với mình qua email: example@gmail.com"
  };

  const [selectedButton, setSelectedButton] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(selectedButton) {
    setSelectedButton(selectedButton);
    setShowModal(true);
    setIsMenuOpen(false); // khi chọn menu thì đóng menu
  }
  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <section id="header">
        <div id="leftSide">
          <div className="blue-dot"></div>
          <h2 className="name">Danh Thượng</h2>
          <p className="subtext-header"><i>frontend developer</i></p>
        </div>
        <div id="rightSide">
          {/* nút toggle chỉ hiện ở mobile/tablet */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <ul className={isMenuOpen ? "menu active" : "menu"}>
            <li><a isSelected={selectedButton === "skill"} href="#skill" onClick={() => handleClick('skill')}>Skill</a></li>
            <li><a isSelected={selectedButton === "project"} href="#project" onClick={() => handleClick('project')}>Project</a></li>
            <li><a isSelected={selectedButton === "cv"} href="#cv" onClick={() => handleClick('cv')}>Cv</a></li>
            <li><a isSelected={selectedButton === "connect"} href="#connect" onClick={() => handleClick('connect')}>Connect</a></li>
          </ul>
        </div>
      </section>

      <section id="main-content">
        <div className="center-content">
          <div className="image-container">
            <img className="image-detail" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/473619592_608170968287784_7702321210746543691_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWTYdtAM_5uHF8Trq1et3FgmRTvyRvdhWCZFO_JG92FbE_YjWo51V1almg45SZE6nPqO9L_mlg83aiKpnYlxRH&_nc_ohc=euXJgJj6bYYQ7kNvwFEB0AN&_nc_oc=AdnjhGXboDlRnIqHY5jawlprl1q-q_bmEZtW1cp83B6jsklW-IrMQEojcT8ptpN7_kloRPbANOCmqYwK4nKMzgLz&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=XZp2dX2MhusCTJBpR80yhw&oh=00_AfYnurF61ci_NTc99DljQzOOh2B_uVp-UiQQtn1aO8VCeQ&oe=68E44630" alt="" />
          </div>
        </div>
        <div className="below-center-content">
          <div className="content">
            <h1>Danh Thượng</h1>
            <h5>A Bit About Me</h5>
            <p><i>Mình là Thượng, 1 software developer lỏ kẹc chưa tốt nghiệp, đang tìm kiếm công việc phù hợp với kĩ năng lập trình của mình. Đây là một dự án portfolio nho nhỏ để giới thiệu bản thân mình.</i></p>
          </div>

          <ul>
            <CircleBtn isSelected={selectedButton === "skill"} href="#skill" bgColor="#e74c3c" onClick={() => handleClick('skill')}>Skill</CircleBtn>
            <CircleBtn isSelected={selectedButton === "project"} href="#project" bgColor="#3498db" onClick={() => handleClick('project')}>Project</CircleBtn>
            <CircleBtn isSelected={selectedButton === "cv"} href="#cv" bgColor="#27ae60" onClick={() => handleClick('cv')}>Cv</CircleBtn>
            <CircleBtn isSelected={selectedButton === "connect"} href="#connect" bgColor="#f39c12" onClick={() => handleClick('connect')}>Connect</CircleBtn>
          </ul>
        </div>
      </section>

      {showModal && (<ModalMsg onClose={handleClose}>{messages[selectedButton]}</ModalMsg>)}
    </>
  )
}

export default App;
