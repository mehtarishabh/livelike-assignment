import { useState } from "react";
import "./ProductListControls.scss";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ProductListControls({
  maxRange,
  selectedPriceRange,
  handlePriceRangeChange,
  sortBy,
  handleSortByChange,
  sortOrder,
  handleSortOrderChange
}) {

  function valuetext(value) {
    return `${value} $`;
  }

  return (
    <section className="ProductListControls">
      <div className="ProductListControls-sort">
        <FormControl fullWidth style={{width: '180px'}}>
          <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Sort by"
            onChange={(e) => handleSortByChange(e.target.value)}
          >
            <MenuItem value={""}>Default</MenuItem>
            <MenuItem value={"price"}>Price</MenuItem>
            <MenuItem value={"discount"}>Discount</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{width: '180px', marginLeft: "20px"}}>
          <InputLabel id="demo-simple-select-label">Sort Order</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortOrder}
            label="Sort by"
            onChange={(e) => handleSortOrderChange(e.target.value)}
          >
            <MenuItem value={"asc"}>Ascending</MenuItem>
            <MenuItem value={"dsc"}>Descending</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="ProductListControls-filter">
        Price Range
        <Slider
          getAriaLabel={() => "Price range"}
          value={selectedPriceRange}
          defaultValue={[0, maxRange]}
          onChange={(e, newVal) => handlePriceRangeChange(...newVal)}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={0}
          max={maxRange}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{0}</div>
          <div>{maxRange}</div>
        </div>
      </div>
    </section>
  );
}

export default ProductListControls;
