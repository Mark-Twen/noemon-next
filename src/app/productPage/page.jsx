import { client } from "../../utils/configSanity";
import { PortableText } from "@portabletext/react";

import fonts from "../../components/fonts/fonts.module.scss";

async function getData() {
  const query = `*[_type == 'prodKit']`;
  const data = await client.fetch(query);
  console.log(data);
  return data;
}

const productPage = async () => {
  const data = await getData();

  return (
    <>
      <div>
        {data?.map((item) => (
          <div key={item?._id}>
            <div>
              <span className={fonts.callExpertBtm}>{item.title}</span>
              <span className={fonts.callExpertBtm}>{item.script}</span>
              <span>
                <PortableText value={item?.description} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default productPage;
