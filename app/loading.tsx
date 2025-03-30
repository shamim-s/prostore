import Image from "next/image";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Image src={"/loader.gif"} width={100} height={100} alt="Loader" />
    </div>
  );
};

export default Loading;
