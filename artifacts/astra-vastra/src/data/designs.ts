import img1 from "@assets/image_1777203987017.png";
import img2 from "@assets/image_1777203972766.png";
import img3 from "@assets/image_1777205534163.png";
import img4 from "@assets/image_1777204016360.png";

export type Design = {
  id: string;
  name: string;
  description: string;
  image: string;
  fabric: string;
  category: string;
  price: string;
  isUserAdded?: boolean;
};

export const BUILTIN_DESIGNS: Design[] = [
  {
    id: "midnight-bloom",
    name: "Midnight Bloom",
    description:
      "A dark, dramatic silhouette embroidered with silver zardozi. Midnight Bloom captures the essence of a moonlit garden — traditional Indian craftsmanship cut into a stark, contemporary line.",
    image: img1,
    fabric: "Silk Velvet & Organza",
    category: "Bridal Gown",
    price: "₹4,80,000",
  },
  {
    id: "noir-saaj",
    name: "Noir Saaj",
    description:
      "Architectural and uncompromising. Noir Saaj strips away ornament to let the purity of the drape speak — a masterclass in structural tailoring and austere luxury.",
    image: img2,
    fabric: "Heavy Crepe",
    category: "Couture Gown",
    price: "₹3,60,000",
  },
  {
    id: "raven-crown",
    name: "Raven Crown",
    description:
      "Layers of obsidian tulle veil a deep crimson core, hand-embroidered in antique gold. Raven Crown is regal, theatrical, and engineered for an unforgettable entrance.",
    image: img3,
    fabric: "Tulle & Antique Zari",
    category: "Bridal Lehenga",
    price: "₹6,20,000",
  },
  {
    id: "velvet-vows",
    name: "Velvet Vows",
    description:
      "Deep, resonant, and undeniably powerful. Velvet Vows reinterprets the bridal trousseau through stark minimalism and immaculate construction.",
    image: img4,
    fabric: "Micro-Velvet",
    category: "Fusion Saree",
    price: "₹2,95,000",
  },
];

export const designs = BUILTIN_DESIGNS;
