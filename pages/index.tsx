import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';


// import EZC_LOGO_DARK from '//assets/images/logos/EZG_LOGO_DARK.png';
// import EZC_LOGO_LIGHT from "//assets/images/logos/EZC_LOGO_LIGHT.png";
// import landing1 from '//assets/images/landing/landing-1.jpg';



function Home(){

  useEffect(()=>{
    let tar = document.getElementById('__next');
    console.log(tar)
    // @ts-ignore
    // tar.parentNode.innerHTML = tar.children[0].innerHTML;
    // @ts-ignore
    console.log(tar.parentNode.innerHTML)
    
  })



  return (

  
    <body>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Easy Career | 找工作，上易职</title>
    <link rel="stylesheet" href="/assets/css/vendor.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    <script type="text/javascript" src="/assets/js/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="/assets/js/vendor.js"></script>
    <script type="text/javascript" src="/assets/js/app.js"></script>
    <script type="text/javascript" src="/assets/js/shopify.js"></script>
    <script type="text/javascript" src="//code.tidio.co/bvmdkbiydd0dddefe6od2ym6lrtkl9te.js"></script>

    <link rel="icon" type="image/png" href="assets/images/favicon.png"></link>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140811008-5"></script>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Head>

    {/* Global site tag (gtag.js) - Google Analytics */}
    {/* header */}
    <header className="header-sticky header-dark" style={{border: 'none !important'}}>
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
        {/* header */}
        {/* cover */}
        <section className="p-0">
      <div className="gallery">
        <div className="gallery-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide vh-100">
              <div className="image image-overlay" style={{backgroundImage:'url(assets/images/landing/landing-1.jpg)'}}>
            

</div>
              <div className="caption text-white" data-swiper-parallax="-100%">
                <div className="container">
                <div className="row justify-content-between vh-100">
                  <div className="col-lg-8 align-self-center text-white text-shadow" data-swiper-parallax="-100%">
                    <span className="eyebrow text-white mb-1">Career Consulting Services</span>
                    <h1 className="display-2">一站式留学生职业服务</h1>

                    <a href="contacts.html" className="btn btn-white btn-rounded px-5">联系我们</a>
                  </div>
                  <div className="col-lg-4 align-self-end">
                    <div className="row gutter-1">

                    	<div className="col-6 text-white">
                        <div className="equal">
                          <div className="bordered">
                                                       <div className="equal-footer">
                              <div className="component-example">
           
               <a className="popup-youtube" href="https://www.youtube.com/watch?v=DZB46VAIfzc">观看品牌视频<i className="icon-play2"></i></a>
       
          </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-6 text-white">
                        <div className="equal">
                          <div className="bordered">
                            <div className="equal-header">
                              <h4>始于2017</h4>
                            </div>
                            <div className="equal-footer">
                              <span className="text-muted">北美求职风向标</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-white">
                        <div className="equal">
                          <div className="bordered">
                            <div className="equal-header">
                              <h4>200+ 精英导师</h4>
                            </div>
                            <div className="equal-footer">
                              <span className="text-muted">为留学生的就业保驾护航</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>


            </div>
            
            <div className="swiper-slide">
              <div className="image image-overlay" style={{backgroundImage:'url(assets/images/landing/jobboard-2.jpg)'}}>
              </div>
              <div className="caption text-white" data-swiper-parallax="-100%">
                <div className="container">
                  <div className="row justify-content-center align-items-center vh-90">
                    <div className="col-md-10  col-lg-8 text-center">
                      <span className="eyebrow mb-2">Jobs.ezcareer.ca</span>
                      <h1 className="display-2">适合留学生的Job Board</h1>
                      <a href="http://jobs.ezcareer.ca" className="btn btn-white btn-rounded px-5" target="_blank">进入官网</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
	<div className="swiper-slide">
              <div className="image image-overlay" style={{backgroundImage:'url(assets/images/landing/landing-2.jpg)'}}>
              </div>
              <div className="caption text-white" data-swiper-parallax="-100%">
                <div className="container">
                  <div className="row justify-content-center align-items-center vh-90">
                    <div className="col-md-10 col-lg-8 text-center">
                      <span className="eyebrow mb-2">VIP Program</span>
                      <h1 className="display-2">私人订制求职特训计划</h1>
                      <a href="http://www.ezcareer.ca/vip.html" className="btn btn-white btn-rounded px-5" target="_blank">了解更多</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="swiper-slide">
              <div className="image image-overlay" style={{backgroundImage:'url(assets/images/landing/learning-1-min.jpg)'}}>
              </div>
              <div className="caption text-white" data-swiper-parallax="-100%">
                <div className="container">
                  <div className="row justify-content-center align-items-center vh-90">
                    <div className="col-md-10 col-lg-8 text-center">
                      <span className="eyebrow mb-2">Tutoring Services</span>
                      <h1 className="display-2">让你的GPA轻松4.0</h1>
                      <a href="https://ez4edu.com/" className="btn btn-white btn-rounded px-5" target="_blank">进入官网</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                

          </div>
        </div>
        <div className="gallery-thumbs">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <h5>职业咨询</h5>
            </div>
            <div className="swiper-slide">
              <h5>岗位直通车</h5>
            </div>
            <div className="swiper-slide">
              <h5>VIP Program</h5>
            </div>
            <div className="swiper-slide">
              <h5>课程辅导</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* / cover */}
        {/* about */}
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <h2>Easy career, better <span style={{color: '#33aacc'}}>job.</span></h2>
              </div>
              <div className="col-lg-6">
                <p className="lead">EASY CAREER是一家在线职业教育机构，公司总部位于多伦多市市中心，是加拿大第一教育品牌 Easy Group(易维教育集团)旗下的子公司之一，致力于帮助全球大学生和在职精英，提供一站式的就业解决方案。通过独立自主研发的职业技能培训产品和一对一体系化咨询服务，全方位提升学员能力与背景。在金融、咨询、科技、快消、数据、市场等众多热门行业，助力全球大学生入驻全球前沿企业。</p>
              </div>
            </div>
            <div className="row gutter-1">
              <div className="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <div className="bordered scaling p-4">
                  <i className="icon-course text-ezc fs-40 mb-3" />
                  <h6 className="mb-0 text-ezc">Learn Essential Skills</h6>
                  <h4 className="mb-2">职业必备技能</h4>
                  <p>结合行业实战项目，在课程中熟练掌握不同行业工作中所需要的各种技能。灵活的线上加线下课程模式让用户充分利用自己的时间去学习。</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay={150}>
                <div className="bordered scaling p-4">
                  <i className="icon-vip text-ezc fs-40 mb-3" />
                  <h6 className="mb-0 text-ezc">100% Tailored Training</h6>
                  <h4 className="mb-2">求职核心能力</h4>
                  <p>1对1求职特训计划，以下简称VIP Program，旨在为学生提供定制化的，系统性地一站式求职教育咨询服务,针对性地准备即将开始的职场生涯。</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <div className="bordered scaling p-4">
                  <i className="icon-offer text-ezc fs-40 mb-3" />
                  <h6 className="mb-0 text-ezc">Guarantee Offer Program</h6>
                  <h4 className="mb-2">保Offer全职/实习项目</h4>
                  <p>助申北美知名大公司，创投公司，世界五百强等。根据学生能力特点及个人需求，帮助其完成各类型职位申请。</p>
                </div>
              </div>
            </div>  
            
          </div>
        </section>
        {/* / about */}
        {/* gallery */}
        <section className="bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4">
                <h2 className="h1">VIP Program <br /><b style={{color: '#33aacc'}}>定制</b>于你的<br />属求职计划</h2>
                <ul className="list-group list-group-line">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="icon-check-circle2 fs-24 text-orange" />
                    <span>行业趋势前瞻 Industrial Insights</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="icon-briefcase2 fs-24 text-orange" />
                    <span>求职规划 Consultation</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="icon-book2 fs-24 text-orange" />
                    <span>履历精修 Profile Improvement</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="icon-check-circle2 fs-24 text-orange" />
                    <span>面试直通车 Interview Package</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="icon-check-circle2 fs-24 text-orange" />
                    <span>求职社交 Networking</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="icon-check-circle2 fs-24 text-orange" />
                    <span>在线课堂 Hard Skills Training</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="icon-check-circle2 fs-24 text-orange" />
                    <span>名企直推 Job Placement Opportunity</span>
                  </li>
                </ul>
                <a href="contacts.html">
                  <button type="button" className="btn btn-with-ico btn-orange text-white mt-3">立刻咨询 <i className="icon-arrow-right2 fs-20" /></button></a>
              </div>
              <div className="col-md-8">
                <ul className="masonry gallery row gutter-1">
                  <li className="col-6" data-aos="zoom-in">
                    <figure className="photo equal equal-double">
                      <a href="vip.jpg" style={{backgroundImage: 'url(/assets/images/service/vip.jpg)'}}>
                        <span className="photo-caption">
                          <span>VIP Mentorship Program</span>
                        </span>
                      </a>
                    </figure>
                  </li>
                  <li className="col-6" data-aos="zoom-in">
                    <figure className="photo equal">
                      <a href="/assets/images/service/resume.jpg" style={{backgroundImage: 'url(/assets/images/service/resume.jpg)'}}>
                        <span className="photo-caption">
                          <span>Profile Improvement Package</span>
                        </span>
                      </a>
                    </figure>
                  </li>
                  <li className="col-6" data-aos="zoom-in">
                    <figure className="photo equal">
                      <a href="/assets/images/service/interview.jpg" style={{backgroundImage: 'url(/assets/images/service/interview.jpg)'}}>
                        <span className="photo-caption">
                          <span>Interview Package</span>
                        </span>
                      </a>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* / gallery */}
        {/* product */}
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <span className="eyebrow mb-1 text-primary">Essential Courses</span>
                <h2>热门技能课程</h2>
              </div>
            </div>
            <div className="row justify-content-between">
              <div id="product-component-c3adc591c15" />
              <div id="product-component-2dd6bfb8512" />
              <div id="product-component-7c9f281128d" />
              <div id="product-component-f73cb377666" />
            </div>
          </div>
        </section>
        {/*/ product*/}
        <section className="bg-dark-ezc text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2>这里是<br />你距离<span style={{color: '#33aacc'}}>高薪Offer</span><br />最近的地方</h2>
                <p>EASY CAREER创立于2017年初，致力于整合全球各行业的职场精英，为大学生提供体系化，定制化的职业教育，通过1对1、多对1和班课实时在线视频/直播学习平台，将全球大学生和职场精英进行对接。
                  我们从市场的角度和客户的需求出发，为学员建立完善的职业规划方案及体系化的课程规划，以提升学员职场核心竞争力为中心，开展针对性的辅导与培训，帮助学员顺利进入目标行业与公司岗位。</p>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-12">
                    <h4 className="fs-20 progress-title">签约精英导师淘汰率</h4>
                    <div className="progress-item">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}><span>70%</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <h4 className="fs-20 progress-title">四个月内获得Offer成功率</h4>
                    <div className="progress-item">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '87.3%'}} aria-valuenow={87} aria-valuemin={0} aria-valuemax={100}><span>87.3%</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <h4 className="fs-20 progress-title">用户满意度</h4>
                    <div className="progress-item">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}><span>100%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* education */}
        <section className="bg-white" data-top-top="transform: translateY(0px);" data-top-bottom="transform: translateY(70px);" style={{background: 'url(/assets/images/map-3.png) no-repeat center', backgroundSize: 'contain'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <span className="eyebrow mb-1 text-primary">OUR MENTORS</span>
                <h2>我们的导师来自于</h2>
              </div>
            </div>
            <br />
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="row gutter-1">
                  <div className="col-md-4">
                    <div className="bordered rising p-2 p-md-4">
                      <h5 className="mb-0">中国</h5>
                      <span className="d-block text-primary mb-1">China</span>
                      <h6 className="text-dark mb-0">香港花旗银行</h6>
                      <span className="d-block text-grey mb-1">Citibank</span>
                      <h6 className="text-dark mb-0">香港巴克莱银行</h6>
                      <span className="d-block text-grey mb-1">Barclays</span>
                      <h6 className="text-dark mb-0">普华永道中国</h6>
                      <span className="d-block text-grey mb-1">PwC</span>
                      <h6 className="text-dark mb-0">安永中国</h6>
                      <span className="d-block text-grey mb-1">Ernst &amp; Young</span>
                      <h6 className="text-dark mb-0">毕马威中国</h6>
                      <span className="d-block text-grey mb-1">KPMG</span>
                      <h6 className="text-dark mb-0">腾讯</h6>
                      <span className="d-block text-grey mb-1">Tencent</span>
                      <h6 className="text-dark mb-0">BBDO环球</h6>
                      <span className="d-block text-grey mb-1">BBDO</span>
                      <h6 className="text-dark mb-0">京东</h6>
                      <span className="d-block text-grey mb-0">JD</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bordered rising p-2 p-md-4">
                      <h5 className="mb-0">北美</h5>
                      <span className="d-block text-primary mb-2">North America</span>
                      <h6 className="text-dark mb-0">CPPIB</h6>
                      <span className="d-block text-grey mb-1">全球十大公共退休基金</span>
                      <h6 className="text-dark mb-0">OTPP</h6>
                      <span className="d-block text-grey mb-1">加拿大最大的单一型专业化退休基金</span>
                      <h6 className="text-dark mb-0">普华永道加拿大</h6>
                      <span className="d-block text-grey mb-1">PwC</span>
                      <h6 className="text-dark mb-0">德勤加拿大</h6>
                      <span className="d-block text-grey mb-1">Deloitte</span>
                      <h6 className="text-dark mb-0">毕马威加拿大</h6>
                      <span className="d-block text-grey mb-1">KPMG</span>
                      <h6 className="text-dark mb-0">满地可银行</h6>
                      <span className="d-block text-grey mb-1">BMO</span>
                      <h6 className="text-dark mb-0">加拿大皇家银行</h6>
                      <span className="d-block text-grey mb-1">RBC</span>
                      <h6 className="text-dark mb-0">加拿大帝国商业银行</h6>
                      <span className="d-block text-grey mb-1">CIBC</span>
                      <h6 className="text-dark mb-0">道明银行</h6>
                      <span className="d-block text-grey mb-1">TD</span>
                      <h6 className="text-dark mb-0">丰业银行</h6>
                      <span className="d-block text-grey mb-1">Scotiabank</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bordered rising p-2 p-md-4">
                      <h5 className="mb-0">北美</h5>
                      <span className="d-block text-primary mb-2">North America</span>
                      <h6 className="text-dark mb-0">谷歌</h6>
                      <span className="d-block text-grey mb-1">Google</span>
                      <h6 className="text-dark mb-0">微软</h6>
                      <span className="d-block text-grey mb-1">Microsoft</span>
                      <h6 className="text-dark mb-0">第一资本</h6>
                      <span className="d-block text-grey mb-1">Capital One</span>
                      <h6 className="text-dark mb-0">永明金融</h6>
                      <span className="d-block text-grey mb-1">Sunlife Financial</span>
                      <h6 className="text-dark mb-0">传立媒体</h6>
                      <span className="d-block text-grey mb-1">Mindshare</span>
                      <h6 className="text-dark mb-0">SAP</h6>
                      <span className="d-block text-grey mb-1">Software Solutions</span>
                      <h6 className="text-dark mb-0">Rogers</h6>
                      <span className="d-block text-grey mb-1">加拿大最大移动运营商</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* / education */}
        {/* destinations carousel */}
        <section className="section-decorated-bottom pt-0">
          <div className="decorated-bottom text-light">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 40" preserveAspectRatio="none">  
              <path d>
                <animate attributeName="d" begin="0s" dur="5s" repeatCount="indefinite" values="
              M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;
              M0,40 C200,40 400,0 600,0 C800,0 800,40 1000,40 L1000,50 L0,50 L0,40 Z;
              M0,30 C200,30 200,0 400,0 C600,0 800,40 1000,40 L1000,50 L0,50 L0,30 Z;
              M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;" />
              </path>
            </svg> */}
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <span className="eyebrow mb-1 text-primary">POWERED BY EASYGROUP</span>
                <h2>Easy Group 易维集团</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <img className="logo-m" src="/assets/images/logos/EZG_LOGO_DARK.png" alt="Logo" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <p>Easy Career隶属于Easy Group集团。集团旗下拥有Easy 4.0 (易途教育)，孜循Edu, Easy Career (易职)，HiOffer，WeCare微致等附属服务培训体系。集团总部位于中国深圳，在加拿大、美国等地区设有海外分部。以教育作为出发点， “责任心至上” 作为核心理念，集团业务涵盖留学规划，海外生活辅助，高等教育辅导，求职咨询，研究生申请，创业孵化等领域。切实打造留学产业闭环，为想要留学，已经留学，完成留学的学子以及他们的家长创造真正有价值的服务。。</p>
              </div>
            </div>
            <div className="row" data-aos="fade-left" data-aos-delay={300}>
              <div className="col">
                <div className="owl-carousel visible" data-items="[3,2,1]" data-margin={20} data-dots="true" data-loop="true" data-center="true">
                  <article className="tile tile-long">
                    <div className="tile-image" style={{backgroundImage: 'url(/assets/images/office/1.jpg)'}} />
                    <a className="tile-content">
                      <div className="tile-footer">
                        <span className="eyebrow">2018</span>
                        <h5>Easy Career</h5>
                      </div>
                    </a>
                  </article>
                  <article className="tile tile-long">
                    <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/event_4.jpg)'}} />
                    <a className="tile-content">
                      <div className="tile-footer">
                        <span className="eyebrow">2018</span>
                        <h5>议员参会</h5>
                      </div>
                    </a>
                  </article>
                  <article className="tile tile-long">
                    <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/event_3.jpg)'}} />
                    <a className="tile-content">
                      <div className="tile-footer">
                        <span className="eyebrow">2018</span>
                        <h5>教学研讨会</h5>
                      </div>
                    </a>
                  </article>
                  <article className="tile tile-long">
                    <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/event_2.jpg)'}} />
                    <a className="tile-content">
                      <div className="tile-footer">
                        <span className="eyebrow">2018</span>
                        <h5>集团年会</h5>
                      </div>
                    </a>
                  </article>
                  <article className="tile tile-long">
                    <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/event_5.jpg)'}} />
                    <a className="tile-content">
                      <div className="tile-footer">
                        <span className="eyebrow">2017</span>
                        <h5>北京见面会</h5>
                      </div>
                    </a>
                  </article>
                  <article className="tile tile-long">
                    <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/event_6.jpg)'}} />
                    <a className="tile-content">
                      <div className="tile-footer">
                        <span className="eyebrow">2018</span>
                        <h5>年会谢幕</h5>
                      </div>
                    </a>
                  </article>
                  <article className="tile tile-long">
                    <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/event_7.jpg)'}} />
                    <a className="tile-content">
                      <div className="tile-footer">
                        <span className="eyebrow">2014</span>
                        <h5>百人Review</h5>
                      </div>
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* / destinations carousel */}
        {/* news */}
        <section id="news" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2>最近事件</h2>
              </div>
            </div>
            <div className="row gutter-2">
              <div className="col-md-6 col-lg-4">
                <article className="tile">
                  <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/news_2.jpg)'}} />
                  <div className="tile-content">
                    <div className="tile-header">
                      <span className="eyebrow mb-1">News</span>
                      <h3>加拿大商贸部长宴会</h3>
                    </div>
                    <div className="tile-footer">
                      <p>Easy Group受邀参加加拿大商贸部长午宴</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                <article className="tile">
                  <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/news_3.jpg)'}} />
                  <div className="tile-content">
                    <div className="tile-header">
                      <span className="eyebrow mb-1">News</span>
                      <h3>2018中国福布斯30 Under 30</h3>
                    </div>
                    <div className="tile-footer">
                      <p>Easy Group创始人Jacky Zhang上榜2018中国福布斯30位30岁以下精英榜</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                <article className="tile">
                  <div className="tile-image" style={{backgroundImage: 'url(/assets/images/events/news_1.jpg)'}} />
                  <div className="tile-content">
                    <div className="tile-header">
                      <span className="eyebrow mb-1">News</span>
                      <h3>获得Pre-A轮1000万融资</h3>
                    </div>
                    <div className="tile-footer">
                      <p>恭喜Easy Group获得Pre-A轮1000万战略投资</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* / news */}
        {/* footer */}
        <footer className="bg-dark text-white">
          <div className="separator-top">
            <div className="container py-5">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-5 text-center text-md-left">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link" href="contacts.html">联系我们</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="career.html">加入我们</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Legal Information</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 text-center">
                  <img className="logo-m" src="/assets/images/logos/EZC_LOGO_DARK.png" alt="Logo" />
                </div>
                <div className="col-md-5 text-center text-md-right">
                  <ul className="socials">
                    <li><a href="https://www.youtube.com/channel/UCsXdZooAGMJpd5xycwSPGGQ" target="_blank" className="icon-youtube fs-20" /></li>
                    <li><a href="https://www.linkedin.com/company/easy-career/" target="_blank" className="icon-linkedin fs-20" /></li>
                    <li><a href="https://www.instagram.com/ezcareer/" className="icon-instagram fs-20" target="_blank" /></li>
                    <li><a href="contacts.html" className="icon-wechat fs-20" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* / footer */}
        </body>
 

)};

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

export default Home;