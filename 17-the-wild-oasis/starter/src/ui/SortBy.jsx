import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParam, setSearchParams] = useSearchParams();
  const sortBy = searchParam.get("sortBy") || "";

  function handleChange(e) {
    searchParam.set("sortBy", e.target.value);
    setSearchParams(searchParam);
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
