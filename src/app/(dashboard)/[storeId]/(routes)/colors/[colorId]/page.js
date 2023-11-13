import axios from "axios";
import ColorForm from "./components/ColorForm";

const ColorPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.API_URL}api/v1/colors/${params.colorId}`
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={data?.data?.data} />
      </div>
    </div>
  );
};

export default ColorPage;
