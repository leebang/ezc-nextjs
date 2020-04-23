



import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';


const Navbar = () => (

    
    <header className="header-sticky header-dark" style={{border: "none !important"}}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="index.html">
            <img className="navbar-logo navbar-logo-light logo-m" src="assets/images/logos/logodark.svg" alt="Logo"/>
            <img className="navbar-logo navbar-logo-dark logo-m" src="assets/images/logos/logolight.svg" alt="Logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="burger"><span></span></span></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html" role="button">
                  首页
                </a>
              </li>

                <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  核心课程
                </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="http://www.ezcareer.ca/cfa.html">
                  <span>CFAI级 百时班Plus</span>
                  <p>签约保过 | 线上线下 | 北美同开</p>
                </a>
                <div className="dropdown-divider"></div>
               
              </div>
                
              </li>
             <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  报名课程
                </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                <a className="dropdown-item" href="http://moodle.ez4edu.com" target="_blank">
                  <span>学员系统</span>
                  <p>已经报名课程的同学</p>
                </a>

                <a className="dropdown-item" href="https://ezcareer.shop" target="_blank">
                  <span>大多伦多地区</span>
                  <p>包括滑铁卢 | 线下及线下课程</p>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://ezc-alberta.shop" target="_blank">
                  <span>阿尔伯塔地区</span>
                  <p>线下及线下课程</p>
                </a>
              </div>
                
              </li>
              
              <li className="nav-item dropdown">
               <a className="nav-link" href="vip.html" role="button">
                  1对1求职服务
                </a>
                
              </li>
               <li className="nav-item dropdown">
               <a className="nav-link" href="http://jobs.ezcareer.ca/" role="button" target="_blank">
                  岗位直通车
                </a>
                
              </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  联系我们
                </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="career.html" target="_blank">
                  <span>加入我们</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="contacts.html" target="_blank">
                  <span>联系我们</span>
                </a>
              </div>
                
              </li>

            </ul>

            <ul className="navbar-nav align-items-center mr-0">
              <li className="nav-item">
                <a className="nav-link" href="http://www.easygroup.ca" role="button">
                  Powered by Easy Group
                </a>
              </li>
            </ul>
          </div>
       </nav>
      </div>
    </header>


)


export default Navbar;