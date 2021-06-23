const UserInfo = () => {

  const onSubmit = (event) => {
    event.preventDefault()
    // Code here
  };

  return (
    <div>
      <p><strong>User Info</strong></p>
      <br />
      <form>
        <input type="text" placeholder="Add your name here" />
        <br /><br/>
        <input type="email" placeholder="Add your email here" />
        <br /><br/>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
