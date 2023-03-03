import React from "react";

export const CourseNameFilterOption = ({
  item,
  isChecked,
  i,
  toggleCheckbox,
}) => {
  return (
    <label htmlFor={`'${item}'`} className="content">
      {item}
      <input
        type="radio"
        checked={isChecked}
        value={item}
        name="course"
        id={`'${item}'`}
        className="filter-checkbox"
        onChange={(e) => toggleCheckbox(e, i, item)}
      />
    </label>
  );
};

export const CourseYearFilterOption = ({
  item,
  isChecked,
  i,
  toggleCheckbox,
}) => {
  return (
    <label htmlFor={`'${item}'`} className="content">
      {item}
      <input
        type="radio"
        checked={isChecked}
        value={item}
        name="courseYear"
        id={`'${item}'`}
        className="filter-checkbox"
        onChange={(e) => toggleCheckbox(e, i, item)}
      />
    </label>
  );
};

export const SubjectFilterOption = ({ item, isChecked, i, toggleCheckbox }) => {
  return (
    <label htmlFor={`'${item}'`} className="content">
      {item}
      <input
        type="radio"
        checked={isChecked}
        value={item}
        name="subject"
        id={`'${item}'`}
        className="filter-checkbox"
        onChange={(e) => toggleCheckbox(e, i, item)}
      />
    </label>
  );
};

export const PaperYearFilterOption = ({
  item,
  isChecked,
  i,
  toggleCheckbox,
}) => {
  return (
    <label htmlFor={`'${item}'`} className="content">
      {item}
      <input
        type="radio"
        checked={isChecked}
        value={item}
        name="paperYear"
        id={`'${item}'`}
        className="filter-checkbox"
        onChange={(e) => toggleCheckbox(e, i, item)}
      />
    </label>
  );
};
