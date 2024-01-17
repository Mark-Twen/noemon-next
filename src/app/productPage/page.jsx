import { client } from "../../utils/configSanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import { urlFor } from "../../utils/configSanity";

import fonts from "../../components/fonts/fonts.module.scss";
import styles from "../../components/cards/blockCards.module.scss"
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

const productPage = async (title, script, description, _id, image) => {
  const data = await getData();

  return (
    <>
      <div className="grid grid-cols-3 gap-4 grid-rows-4 mx-[80px]">
        {data?.map((item) => (
          <ul key={item?._id} className={styles.cardsContainer}>
           <li className={styles.cardsList}>           
              <Image
                src={urlFor(item.image).url()}
                alt="product image card 1"
                width={186}
                height={186}
                className="absolute top-[16px] left-[16px]"
              />            
            <li className="flex flex-col pl-[230px] pt-4 w-[486px]">
              <span className={fonts.portfolioCardsSign}>{item.title}</span>
              <span className={`${fonts.cardsScript} py-4`}>{item.script}</span> 
                          
              <span className={`${fonts.cardDescroption} `} style={{ textAlign: 'justify' }}>
              <PortableText  value={item?.description} />
              </span>
            </li>
           </li>
          </ul>  
        ))}
      </div>
    </>
  );
};

export default productPage;
