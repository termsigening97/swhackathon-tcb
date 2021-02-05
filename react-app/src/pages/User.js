import React, { Component } from "react";

import { Link } from 'react-router-dom'
import "./User.css";

class User extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

	render() {
    const { profileImg } = this.state
		return (
			<div className="page">
				<div className="container">
					<h1 className="header">Account settings</h1>
					<div className="img-holder">
            <h4>profile picture</h4>
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
          <div className="form">
            <div className="form-group">
              <label htmlFor="ID">아이디</label>
              <input type="text" name="ID" placeholder="ID" />
              {/* 아이디 가져오기 */}
            </div>
            <div className="form-group">
              <label htmlFor="username">닉네임</label>
              <input type="text" name="username" placeholder="user name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input type="email" name="email"/>
            </div>
          </div>

          <div class="form-checkbox mb-0">
            {/* <input type="hidden" name="user[show_private_contribution_count]" value="0"/> */}
            <input type="checkbox" name="email-check" value="1" id="email-check"/>
            <label for="email-check">E-Mail 수신 동의(선택)</label><br></br>
            <span class="note">서비스와 관련된 소식, 이벤트 안내, 고객 혜택 등 다양한 정보를 제공합니다.</span>
          </div>
				</div>
        <div className="footer">
          <button type="button" className="btn">
            확인
          </button>
        </div>
      </div>
		);
	}
}




//   return (
//     <div className="User">
//       <div style={{"backgroundColor": "#efefef", "width":"150px", "height" : "150px"}}>
//       </div>
//       <div>
//         <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile}/>
//       </div>
//     </div>

    // <div className="login-register-wrapper">
    //   <div className="nav-buttons">
    //       <button id="loginBtn" class="active">Login</button>
    //       <button id="registerBtn">Register</button>
    //   </div>
    //   <div className="form-group">
    //       <form action="" id="loginform">
    //       </form>
    //       <form action="" id="registerform">    
    //       </form>
    //   </div>
    //   <div id="forgot-panel">
    //   </div>
    // </div>
//   );
// }
//     render() {
//       return (
//         <div className="base-container" ref={this.props.containerRef}>
//           <div className="header">SNS Login</div>
//           {/* header(로고) */}
//           <div className="content">
//             <div className="image">
//               <img src={loginImg} />
//             </div>
//             <div className="form">
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <input type="text" name="username" placeholder="username" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" placeholder="password" />
//               </div>
//             </div>
//             <div className="form">
//               <button type="button" className="btn"><img src='https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png' alt='Kakao'></img></button><br></br>
//               <button type="button" className="btn">페이스북 로그인</button><br></br>
//               <button type="button" className="btn">카카오톡 로그인</button><br></br>
//             </div>
//           </div>
//           {/* <div className="footer">
//             <Link to="./Register"> 
//               <button> 회원가입 </button>
//             </Link>
//           </div> */}
//         </div>
//       );
//     }
//   }


// function User({ user }) {
//     const { id, name, email } = user || {};
//     return (
//         <div>
//             <h1>User Profile</h1>
//             <dt>아이디</dt>
//             <dd>{id}</dd>
//             <dt>닉네임</dt>
//             <dd>{name}</dd>
//             <dt>이메일</dt>
//             <dd>{email}</dd>
//         </div>

      
//     );
// }

export default User;