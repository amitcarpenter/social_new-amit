import React, { useState } from 'react';
import './dashboard.css'; // Add a CSS file for custom styles if needed
import Myprofile from '../../components/myprofile';
import Accountoverview from '../../components/Accountoverview';
import Integration from '../../components/Integrations';
import Post from '../../components/post/Post';
import Sedule from '../../components/Sedule';
import Analytics from '../../components/analytic/Analytics';
import Users from '../../components/Users';




function Dashboard() {
  const [activeContent, setActiveContent] = useState('dashboard');

  const showContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <div className="container-fluid dashboard">
      <div className="row">
        {/* Left Sidebar */}
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-white sidebar">
          <div className="sidebar-sticky">
            <h4>Company Logo</h4>
            <ul className="nav flex-column">
              {/* <li className={`nav-item ${activeContent === 'dashboard' && 'active'}`}>
                <a className="nav-link" href="#" onClick={() => showContent('dashboard')}>
                  Dashboard
                </a>
              </li> */}
              <li className={`nav-item ${activeContent === 'menu1' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/profile.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7C8.5 5.93913 8.92143 4.92172 9.67157 4.17157C10.4217 3.42143 11.4391 3 12.5 3C13.5609 3 14.5783 3.42143 15.3284 4.17157C16.0786 4.92172 16.5 5.93913 16.5 7C16.5 8.06087 16.0786 9.07828 15.3284 9.82843C14.5783 10.5786 13.5609 11 12.5 11C11.4391 11 10.4217 10.5786 9.67157 9.82843C8.92143 9.07828 8.5 8.06087 8.5 7ZM8.5 13C7.17392 13 5.90215 13.5268 4.96447 14.4645C4.02678 15.4021 3.5 16.6739 3.5 18C3.5 18.7956 3.81607 19.5587 4.37868 20.1213C4.94129 20.6839 5.70435 21 6.5 21H18.5C19.2956 21 20.0587 20.6839 20.6213 20.1213C21.1839 19.5587 21.5 18.7956 21.5 18C21.5 16.6739 20.9732 15.4021 20.0355 14.4645C19.0979 13.5268 17.8261 13 16.5 13H8.5Z" fill="#A7A7A7" />
                </svg>

                <a className="nav-link" href="#" onClick={() => showContent('menu1')}>
                  My Profile
                </a>
              </li>
              <li className={`nav-item ${activeContent === 'menu2' && 'active'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M4.5 13H10.5C11.05 13 11.5 12.55 11.5 12V4C11.5 3.45 11.05 3 10.5 3H4.5C3.95 3 3.5 3.45 3.5 4V12C3.5 12.55 3.95 13 4.5 13ZM4.5 21H10.5C11.05 21 11.5 20.55 11.5 20V16C11.5 15.45 11.05 15 10.5 15H4.5C3.95 15 3.5 15.45 3.5 16V20C3.5 20.55 3.95 21 4.5 21ZM14.5 21H20.5C21.05 21 21.5 20.55 21.5 20V12C21.5 11.45 21.05 11 20.5 11H14.5C13.95 11 13.5 11.45 13.5 12V20C13.5 20.55 13.95 21 14.5 21ZM13.5 4V8C13.5 8.55 13.95 9 14.5 9H20.5C21.05 9 21.5 8.55 21.5 8V4C21.5 3.45 21.05 3 20.5 3H14.5C13.95 3 13.5 3.45 13.5 4Z" fill="lightgray" />
                </svg>
                {/* <img className='dash_icon' src="asset/dashboard-icon.png" alt="" /> */}
                <a className="nav-link" href="#" onClick={() => showContent('menu2')}>
                  Dashboard
                </a>
              </li>
              <li className={`nav-item ${activeContent === 'menu3' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/solid_plug.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                  <g clip-path="url(#clip0_226_99)">
                    <path d="M5 0C4.17031 0 3.5 0.670312 3.5 1.5V6H6.5V1.5C6.5 0.670312 5.82969 0 5 0ZM14 0C13.1703 0 12.5 0.670312 12.5 1.5V6H15.5V1.5C15.5 0.670312 14.8297 0 14 0ZM2 7.5C1.17031 7.5 0.5 8.17031 0.5 9C0.5 9.82969 1.17031 10.5 2 10.5V12C2 15.6281 4.57812 18.6562 8 19.35V22.5C8 23.3297 8.67031 24 9.5 24C10.3297 24 11 23.3297 11 22.5V19.35C14.4219 18.6562 17 15.6281 17 12V10.5C17.8297 10.5 18.5 9.82969 18.5 9C18.5 8.17031 17.8297 7.5 17 7.5H2Z" fill="#A7A7A7" />
                  </g>
                  <defs>
                    <clipPath id="clip0_226_99">
                      <rect width="18" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <a className="nav-link" href="#" onClick={() => showContent('menu3')}>
                  Integrations
                </a>
              </li>
              <li className={`nav-item ${activeContent === 'menu4' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/note-edit.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M21.5 10V9L15.5 3H5.5C4.39 3 3.5 3.89 3.5 5V19C3.5 19.5304 3.71071 20.0391 4.08579 20.4142C4.46086 20.7893 4.96957 21 5.5 21H11.5V19.13L19.89 10.74C20.33 10.3 20.89 10.06 21.5 10ZM14.5 4.5L20 10H14.5V4.5ZM23.35 14.19L22.37 15.17L20.33 13.13L21.31 12.15C21.5 11.95 21.83 11.95 22.03 12.15L23.35 13.47C23.55 13.67 23.55 14 23.35 14.19ZM19.63 13.83L21.67 15.87L15.54 22H13.5V19.96L19.63 13.83Z" fill="#A7A7A7" />
                </svg>
                <a className="nav-link" href="#" onClick={() => showContent('menu4')}>
                  Post
                </a>
              </li>
              <li className={`nav-item ${activeContent === 'menu4' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/schedule-send.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M17.5 9.99997C17.6 9.99997 17.69 10.01 17.78 10.01L4.89 4.57997C4.23 4.30997 3.5 4.78997 3.5 5.50997V9.21997C3.5 9.67997 3.81 10.08 4.26 10.19L11.5 12L4.26 13.81C3.81 13.92 3.5 14.32 3.5 14.78V18.49C3.5 19.21 4.23 19.69 4.89 19.41L10.5 17.05V17C10.5 13.14 13.64 9.99997 17.5 9.99997Z" fill="#A7A7A7" />
                  <path d="M17.5 12C14.74 12 12.5 14.24 12.5 17C12.5 19.76 14.74 22 17.5 22C20.26 22 22.5 19.76 22.5 17C22.5 14.24 20.26 12 17.5 12ZM18.79 19L17.14 17.35C17.0467 17.2571 16.9929 17.1317 16.99 17V14.5C16.99 14.22 17.21 14 17.49 14C17.77 14 17.99 14.22 17.99 14.5V16.79L19.49 18.29C19.69 18.49 19.69 18.8 19.49 19C19.3 19.2 18.99 19.2 18.79 19Z" fill="#A7A7A7" />
                </svg>
                <a className="nav-link" href="#" onClick={() => showContent('menu5')}>
                  Schedule
                </a>
              </li>

              <li className={`nav-item ${activeContent === 'menu4' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/analytics.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 6C3.5 5.20435 3.81607 4.44129 4.37868 3.87868C4.94129 3.31607 5.70435 3 6.5 3H18.5C19.2956 3 20.0587 3.31607 20.6213 3.87868C21.1839 4.44129 21.5 5.20435 21.5 6V18C21.5 18.7956 21.1839 19.5587 20.6213 20.1213C20.0587 20.6839 19.2956 21 18.5 21H6.5C5.70435 21 4.94129 20.6839 4.37868 20.1213C3.81607 19.5587 3.5 18.7956 3.5 18V6ZM13.5 8C13.5 7.73478 13.3946 7.48043 13.2071 7.29289C13.0196 7.10536 12.7652 7 12.5 7C12.2348 7 11.9804 7.10536 11.7929 7.29289C11.6054 7.48043 11.5 7.73478 11.5 8V16C11.5 16.2652 11.6054 16.5196 11.7929 16.7071C11.9804 16.8946 12.2348 17 12.5 17C12.7652 17 13.0196 16.8946 13.2071 16.7071C13.3946 16.5196 13.5 16.2652 13.5 16V8ZM9.5 11C9.5 10.7348 9.39464 10.4804 9.20711 10.2929C9.01957 10.1054 8.76522 10 8.5 10C8.23478 10 7.98043 10.1054 7.79289 10.2929C7.60536 10.4804 7.5 10.7348 7.5 11V16C7.5 16.2652 7.60536 16.5196 7.79289 16.7071C7.98043 16.8946 8.23478 17 8.5 17C8.76522 17 9.01957 16.8946 9.20711 16.7071C9.39464 16.5196 9.5 16.2652 9.5 16V11ZM17.5 14C17.5 13.7348 17.3946 13.4804 17.2071 13.2929C17.0196 13.1054 16.7652 13 16.5 13C16.2348 13 15.9804 13.1054 15.7929 13.2929C15.6054 13.4804 15.5 13.7348 15.5 14V16C15.5 16.2652 15.6054 16.5196 15.7929 16.7071C15.9804 16.8946 16.2348 17 16.5 17C16.7652 17 17.0196 16.8946 17.2071 16.7071C17.3946 16.5196 17.5 16.2652 17.5 16V14Z" fill="#A7A7A7" />
                </svg>
                <a className="nav-link" href="#" onClick={() => showContent('menu6')}>
                  Analytics
                </a>
              </li>

              <li className={`nav-item ${activeContent === 'menu4' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/gallery-bold.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M18.5 8C18.5 8.53043 18.2893 9.03914 17.9142 9.41421C17.5391 9.78929 17.0304 10 16.5 10C15.9696 10 15.4609 9.78929 15.0858 9.41421C14.7107 9.03914 14.5 8.53043 14.5 8C14.5 7.46957 14.7107 6.96086 15.0858 6.58579C15.4609 6.21071 15.9696 6 16.5 6C17.0304 6 17.5391 6.21071 17.9142 6.58579C18.2893 6.96086 18.5 7.46957 18.5 8Z" fill="#A7A7A7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.443 1.25H12.557C14.866 1.25 16.675 1.25 18.087 1.44C19.531 1.634 20.671 2.04 21.566 2.934C22.461 3.829 22.866 4.969 23.06 6.414C23.25 7.825 23.25 9.634 23.25 11.943V12.031C23.25 13.94 23.25 15.502 23.146 16.774C23.042 18.054 22.829 19.121 22.351 20.009C22.141 20.4 21.881 20.751 21.566 21.066C20.671 21.961 19.531 22.366 18.086 22.56C16.675 22.75 14.866 22.75 12.557 22.75H12.443C10.134 22.75 8.325 22.75 6.913 22.56C5.469 22.366 4.329 21.96 3.434 21.066C2.641 20.273 2.231 19.286 2.014 18.06C1.799 16.857 1.76 15.36 1.752 13.502C1.75 13.029 1.75 12.529 1.75 12.001V11.943C1.75 9.634 1.75 7.825 1.94 6.413C2.134 4.969 2.54 3.829 3.434 2.934C4.329 2.039 5.469 1.634 6.914 1.44C8.325 1.25 10.134 1.25 12.443 1.25ZM7.113 2.926C5.835 3.098 5.064 3.426 4.495 3.995C3.925 4.565 3.598 5.335 3.426 6.614C3.252 7.914 3.25 9.622 3.25 12V12.844L4.251 11.967C4.6902 11.5828 5.25902 11.3799 5.84223 11.3994C6.42544 11.4189 6.97944 11.6593 7.392 12.072L11.682 16.362C12.0149 16.6948 12.4546 16.8996 12.9235 16.9402C13.3925 16.9808 13.8608 16.8547 14.246 16.584L14.544 16.374C15.0997 15.9835 15.7714 15.7932 16.4493 15.834C17.1273 15.8749 17.7713 16.1446 18.276 16.599L21.106 19.146C21.392 18.548 21.561 17.762 21.651 16.653C21.749 15.448 21.75 13.946 21.75 12C21.75 9.622 21.748 7.914 21.574 6.614C21.402 5.335 21.074 4.564 20.505 3.994C19.935 3.425 19.165 3.098 17.886 2.926C16.586 2.752 14.878 2.75 12.5 2.75C10.122 2.75 8.413 2.752 7.113 2.926Z" fill="#A7A7A7" />
                </svg>
                <a className="nav-link" href="#" onClick={() => showContent('menu7')}>
                  Users
                </a>
              </li>
              <li className={`nav-item ${activeContent === 'menu4' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/settings.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M19.9999 12C19.9999 11.77 19.9899 11.55 19.9699 11.32L21.8299 9.91C22.2299 9.61 22.3399 9.05 22.0899 8.61L20.2199 5.38C20.1 5.16818 19.9061 5.00814 19.6753 4.93062C19.4446 4.8531 19.1934 4.86356 18.9699 4.96L16.8199 5.87C16.4499 5.61 16.0599 5.38 15.6499 5.19L15.3599 2.88C15.2999 2.38 14.8699 2 14.3699 2H10.6399C10.1299 2 9.69991 2.38 9.63991 2.88L9.34991 5.19C8.93991 5.38 8.54991 5.61 8.17991 5.87L6.02991 4.96C5.56991 4.76 5.02991 4.94 4.77991 5.38L2.90991 8.62C2.65991 9.06 2.76991 9.61 3.16991 9.92L5.02991 11.33C4.98846 11.779 4.98846 12.231 5.02991 12.68L3.16991 14.09C2.76991 14.39 2.65991 14.95 2.90991 15.39L4.77991 18.62C5.02991 19.06 5.56991 19.24 6.02991 19.04L8.17991 18.13C8.54991 18.39 8.93991 18.62 9.34991 18.81L9.63991 21.12C9.69991 21.62 10.1299 22 10.6299 22H14.3599C14.8599 22 15.2899 21.62 15.3499 21.12L15.6399 18.81C16.0499 18.62 16.4399 18.39 16.8099 18.13L18.9599 19.04C19.4199 19.24 19.9599 19.06 20.2099 18.62L22.0799 15.39C22.3299 14.95 22.2199 14.4 21.8199 14.09L19.9599 12.68C19.9899 12.45 19.9999 12.23 19.9999 12ZM12.5399 15.5C10.6099 15.5 9.03991 13.93 9.03991 12C9.03991 10.07 10.6099 8.5 12.5399 8.5C14.4699 8.5 16.0399 10.07 16.0399 12C16.0399 13.93 14.4699 15.5 12.5399 15.5Z" fill="#A7A7A7" />
                </svg>
                <a className="nav-link" href="#" onClick={() => showContent('menu8')}>
                  Settings
                </a>
              </li>
              <li className={`nav-item ${activeContent === 'menu4' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/baseline-email.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M20.5 4H4.5C3.4 4 2.51 4.9 2.51 6L2.5 18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.5 8L12.5 13L4.5 8V6L12.5 11L20.5 6V8Z" fill="#A7A7A7" />
                </svg>
                <a className="nav-link" href="#" onClick={() => showContent('menu9')}>
                  Support
                </a>
              </li>
              <li className={`nav-item ${activeContent === 'menu4' && 'active'}`}>
                {/* <img className='dash_icon' src="asset/logout.png" alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                  <path d="M0.5 4.27314V15.7269C0.5 16.7815 0.939404 17.7189 1.64245 18.4513C2.3455 19.1543 3.2536 19.5351 4.30817 19.5351H10.0497V17.1623H4.30817C3.51724 17.1623 2.90208 16.5179 2.90208 15.7269V4.27314C2.90208 3.48221 3.51724 2.86704 4.30817 2.86704H10.0497V0.464966H4.30817C3.2536 0.464966 2.3455 0.875077 1.64245 1.57812C0.939404 2.31046 0.5 3.21857 0.5 4.27314ZM6.79813 7.72978V12.2996C6.79813 12.8269 7.26683 13.2663 7.79411 13.2663H13.0963V16.8694C13.0963 17.1916 13.272 17.4553 13.565 17.6017C13.6821 17.631 13.7993 17.631 13.8579 17.631C14.063 17.631 14.2387 17.5724 14.3852 17.426L21.2692 10.542C21.5914 10.2783 21.5621 9.75105 21.2692 9.45811L14.3852 2.6034C13.9751 2.164 13.0963 2.42764 13.0963 3.13069V6.7631H7.79411C7.26683 6.7631 6.79813 7.2025 6.79813 7.72978Z" fill="#FE5E56" />
                </svg>
                <a className="nav-link_log" href="#" onClick={() => showContent('menu10')}>
                  Log Out
                </a>
              </li>

            </ul>
          </div>
        </nav>

        {/* Right Content Area */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 main_content">
          {/* <div id="dashboardContent" style={{ display: activeContent === 'dashboard' ? 'block' : 'none' }}>
           
            <h2>Dashboard Content</h2>
            <p>This is the default content for the Dashboard.</p>
          </div> */}
          <div id="menu1Content" style={{ display: activeContent === 'menu1' ? 'block' : 'none' }}>

            <Myprofile />
          </div>
          <div id="menu2Content" style={{ display: activeContent === 'menu2' ? 'block' : 'none' }}>

            <Accountoverview />
          </div>
          <div id="menu2Content" style={{ display: activeContent === 'menu3' ? 'block' : 'none' }}>
            <Integration />

          </div>

          <div id="menu2Content" style={{ display: activeContent === 'menu4' ? 'block' : 'none' }}>
            <Post />
          </div>

          <div id="menu2Content" style={{ display: activeContent === 'menu5' ? 'block' : 'none' }}>
            <Sedule />
          </div>


          <div id="menu2Content" style={{ display: activeContent === 'menu6' ? 'block' : 'none' }}>
            < Analytics />
          </div>

          <div id="menu2Content" style={{ display: activeContent === 'menu7' ? 'block' : 'none' }}>
            < Users />
          </div>



          {/* Add more content divs as needed */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
