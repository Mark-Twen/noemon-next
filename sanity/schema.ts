import { type SchemaTypeDefinition } from 'sanity'
import cardOne from "../sanity/neomon_sanity/schemas/kitCardOne"
import cardTwo from "../sanity/neomon_sanity/schemas/kitCardBlockTwoSchema"
import cardThree from "../sanity/neomon_sanity/schemas/productCardTreeSchema"
import cardFore from "../sanity/neomon_sanity/schemas/productCardFourSchema"
import cardFive from "../sanity/neomon_sanity/schemas/prodCardForSchemaFive"
import cardSix from "../sanity/neomon_sanity/schemas/productCardSixSchema"



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cardOne, cardTwo, cardThree, cardFore, cardFive, cardSix],
}
