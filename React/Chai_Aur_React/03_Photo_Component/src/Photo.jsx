function Photo({ userName, surName, image }) {
  console.log(userName, surName);
  return (
    <>
      <div className="title">Name of Title is : {userName}</div>
      <p className="paragraph">
        Last Name of {userName} is : {surName}
      </p>
      <img src={image} alt={userName} width="300" />
    </>
  );
}

export default Photo;
