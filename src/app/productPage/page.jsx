import { client } from "../../utils/configSanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import { urlFor } from "../../utils/configSanity";

import fonts from "../../components/fonts/fonts.module.scss";
import { url } from "inspector";

async function getData() {
  const query = `*[_type == 'prodKit'] {
  title,
  script,
  description,
  _id,
  image
}`;
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
              <Image
                src={urlFor(item.image).url()}
                alt="product image card 1"
                width={196}
                height={196}
              />
            </div>
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
