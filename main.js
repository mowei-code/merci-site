// 當網頁載入時，綁定按鈕點擊事件
window.onload = function() {
    var loginButton = document.getElementById("login");
    var registerButton = document.getElementById("register");
  
    loginButton.addEventListener("click", login);
    registerButton.addEventListener("click", register);
  }
  
  // 登入功能
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // TODO: 檢查使用者名稱和密碼是否正確
  
    alert("登入成功！"); // 登入成功提示
  }
  
  // 註冊功能
  function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // TODO: 檢查使用者名稱是否已被使用，如果沒有，則儲存新使用者
  
    alert("註冊成功！"); // 註冊成功提示
  }
  