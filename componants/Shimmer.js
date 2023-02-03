const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      //width: 200px;
  height: 300px;
  border:1px solid black;
  background-color: rgb(203, 214, 214);
  padding: 10px;
  margin:10px;
  word-wrap: break-word;
      {Array(10)
        .fill("")
        .map((e,index) => (
          <div className="w-60 px-5 mx-8 my-12 shadow-lg bg-blue-200" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
