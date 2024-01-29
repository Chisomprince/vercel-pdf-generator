import { ThreeDots } from "react-loader-spinner";
export default function Loading() {
  return (
    <div>
      <ThreeDots
        height="60"
        width="60"
        radius="5"
        color="#ffffff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}
