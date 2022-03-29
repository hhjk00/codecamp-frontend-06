import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);
  // 3

  const handleChange = (value) => {
    // handle change 값 들어옴(5)
    setValue(value);
    // 5
  };

  return <Rate onChange={handleChange} value={value} />;
  // 별점 누르면 handleChange 실행(5)     // value 값 바인딩 (3)
}

// 스코프 체인에 의해 값 변화
