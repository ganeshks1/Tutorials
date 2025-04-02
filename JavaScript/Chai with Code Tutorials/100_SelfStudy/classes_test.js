class user {
  constructor(p_username, p_password, p_email) {
    (this.v_username = p_username),
    (this.v_password = p_password),
    (this.v_email = p_email);
  }

  logMe() {
    console.log(this.v_username, this.v_password, this.v_email);
  }
}

const myname = new user("gnaesh", 123, "ganesh@live.com");

console.log(myname.v_username);
console.log(myname.logMe());

// myname.logMe()
