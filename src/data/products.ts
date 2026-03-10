export type ProductCategory = "necklaces" | "bracelets" | "earrings" | "rings" | "anklets" | "chains" | "best-sellers";

export interface Product {
  id: string;
  code: string;
  title: string;
  description: string;
  offerPrice: number;
  originalPrice: number;
  category: ProductCategory;
  image: string;
}

function getCategory(title: string): ProductCategory {
  const t = title.toLowerCase();
  if (t.includes("earring")) return "earrings";
  if (t.includes("bracelet")) return "bracelets";
  if (t.includes("necklace")) return "necklaces";
  if (t.includes("ring")) return "rings";
  if (t.includes("anklet")) return "anklets";
  if (t.includes("chain")) return "chains";
  return "necklaces";
}

function getCategoryImage(cat: ProductCategory): string {
  const map: Record<ProductCategory, string> = {
    necklaces: "/images/cat-necklaces.jpg",
    bracelets: "/images/cat-bracelets.jpg",
    earrings: "/images/cat-earrings.jpg",
    rings: "/images/cat-rings.jpg",
    anklets: "/images/cat-anklets.jpg",
    chains: "/images/cat-chains.jpg",
    "best-sellers": "/images/hero-banner.jpg",
  };
  return map[cat];
}

const rawProducts = [
  { code: "91323-0", title: '"Bees" Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Pin.\nEarrings Size: 2.4 x 2.4 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 89, original: 143 },
  { code: "90354-0", title: '"Bow" Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Diameter: 6.5 cm.\nBracelet Width: 0.1 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "90929-0", title: '"Bow" Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Pearl imitation, Gold plating.\nBracelet Diameter: 7.3 cm.\nBracelet Width: 0.3 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "91338-0", title: '"Bow" Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Length: 16 + 5 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "91337-0", title: '"Bow" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 41 + 5 cm.\nPendant Size: 1.9 x 2.4 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87361-0", title: '"Butterflies" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 40 + 5 cm.\nPendant Size: 0.5 x 2.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "89638-0", title: '"Butterfly" Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Diameter: 6.5 cm.\nBracelet Width: 1.5 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "88250-0", title: '"Butterfly" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 40 + 5 cm.\nPendant Size: 2 x 1.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "88252-0", title: '"Butterfly" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 41 + 5 cm.\nPendant Size: 1.8 x 1.3 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "88426-0", title: '"Butterfly" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 41 + 6 cm.\nPendant Size: 1.6 x 1.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "90409-0", title: '"Cherry" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 40 + 6 cm.\nPendant Size: 1.3 x 1.2 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87798-0", title: '"Crescent" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 40 + 5 cm.\nPendant Size: 1.2 x 1.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87193-0", title: '"Cross" Necklace, 18K Gold Plated Steel', desc: 'Material: Gold plating, Stainless steel.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 45 + 5 cm.\nPendant Size: 1.5 x 2 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "89834-0", title: '"Flower Meadow" Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Stud.\nEarrings Size: 3 x 0.8 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "90930-0", title: '"Flower" Bracelet, 18K Gold Plated Steel', desc: 'Material: Pearl imitation, Gold plating, Stainless steel.\nBracelet Diameter: 6.7 cm.\nBracelet Width: 0.3 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87910-0", title: '"Flower" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 41 + 5 cm.\nPendant Size: 1.3 x 1.3 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "88335-0", title: '"Flower" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 44 + 5 cm.\nPendant Size: 1.5 x 1.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "91397-0", title: '"Flower" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 41 + 5 cm.\nPendant Size: 0.9 x 0.9 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87663-0", title: '"Flowers" Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Diameter: 5.5 cm.\nBracelet Width: 1 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87914-0", title: '"Flowers" Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Congo.\nEarrings Size: 1.5 x 1.5 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "91204-0", title: '"Heart" Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Length: 16 + 5 cm.\nBracelet Width: 0.4 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87360-0", title: '"Heart" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 40 + 5 cm.\nPendant Size: 1.5 x 1.9 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87417-0", title: '"Heart" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Toggle.\nInserts: No.\nNecklace Length: 48 cm.\nPendant Size: 1.5 x 1.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87709-0", title: '"Heart" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 40 + 5 cm.\nPendant Size: 0.9 x 1.1 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "87765-0", title: '"Heart" Necklace, 18K Gold Plated Steel', desc: 'Material: Nacre, Gold plating, Stainless steel.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 41 + 5 cm.\nPendant Size: 2.3 x 2.3 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "90327-0", title: '"Heart" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 40 + 5 cm.\nPendant Size: 2 x 2 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "90490-0", title: '"Heart" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 45+5 cm.\nPendant Size: 0.9 x 0.8 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "91316-0", title: '"Heart" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 40 + 5 cm.\nPendant Size: 2 x 1.7 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "87722-0", title: '"Hearts" Bracelet, 18K Gold Plated Steel', desc: 'Material: Gold plating, Stainless steel.\nBracelet Length: 17 cm.\nBracelet Width: 0.6 cm.\nInserts: Cubic zirconia.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "88385-0", title: '"Hearts" Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Congo.\nEarrings Size: 1.5 x 1.9 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "87729-0", title: '"Hearts" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 41 + 5 cm.\nPendant Size: 1 x 1.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "87975-0", title: '"Hearts" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 50 + 5 cm.\nPendant Size: 1 x 1 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "90177-0", title: '"Seashell" Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Diameter: 6.2 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "90104-0", title: '"Seashell" Necklace, 18K Gold Plated Steel', desc: 'Material: Gold plating, Stainless steel.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 38 + 7 cm.\nPendant Size: 2 x 2 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "90862-0", title: '"Starfish" Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Pearl imitation, Gold plating.\nBracelet Length: 20 cm.\nBracelet Width: 1.1 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "89645-0", title: '"Starfish" Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 40 + 5.5 cm.\nPendant Size: 2.3 x 2.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "90901-0", title: '"Starfish" Necklace, 18K Gold Plated Steel', desc: 'Material: Pearl imitation, Gold plating, Stainless steel.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 43 + 5 cm.\nPendant Size: 2 x 2 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "89552-0", title: '"Teardrops" Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Stud.\nEarrings Size: 0.7 x 1.8 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "87159-0", title: 'Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Diameter: 6 cm.\nBracelet Width: 0.2 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "87418-0", title: 'Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Length: 15 + 6 cm.\nBracelet Width: 1 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "87635-0", title: 'Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Diameter: 5.5 cm.\nBracelet Width: 1.3 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "87645-0", title: 'Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Diameter: 5.5 cm.\nBracelet Width: 2 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "87805-0", title: 'Bracelet, 18K Gold Plated Steel', desc: 'Material: Gold plating, Stainless steel, Pearl imitation.\nBracelet Length: 17 + 5 cm.\nBracelet Width: 0.5 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "89749-0", title: 'Bracelet, 18K Gold Plated Steel', desc: 'Material: Gold plating, Enamel, Stainless steel.\nBracelet Diameter: 6.4 cm.\nBracelet Width: 0.7 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 139 },
  { code: "91292-0", title: 'Bracelet, 18K Gold Plated Steel', desc: 'Material: Gold plating, Stainless steel.\nBracelet Length: 16 + 5 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "91411-0", title: 'Bracelet, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nBracelet Length: 6.5 cm.\nInserts: Cubic zirconia.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87215-0", title: 'Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Stud.\nEarrings Size: 1.7 x 1.8 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 89, original: 143 },
  { code: "88094-0", title: 'Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Stud.\nEarrings Size: 3 x 3 cm.\nInserts: Cubic zirconia.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 89, original: 143 },
  { code: "88188-0", title: 'Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Pin.\nEarrings Size: 5 x 5 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 89, original: 143 },
  { code: "89256-0", title: 'Earrings, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Pin.\nEarrings Size: 2.2 x 2.2 cm.\nInserts: No.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87133-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Gold plating, Stainless steel.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: (39/45/60) + 5 cm.\nPendant Size: 1 x 1 and 3 x 0.2 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87358-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 41 + 5 cm.\nPendant Size: 1.6 x 2.5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87747-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Pearl imitation, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 40 + 5 cm.\nPendant Size: 1.5 x 0.7 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87769-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Pearl imitation, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 42 + 5 cm.\nPendant Size: 1 x 3 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87877-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Plastic, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 41.5 + 5 cm.\nPendant Size: 1.7 x 1.1 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87908-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 40.5 + 5 cm.\nPendant Size: 1.6 x 2.3 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "87964-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 40 + 5 cm.\nPendant Size: 0.8 x 0.8 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "88275-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 41 + 5 cm.\nPendant Size: 1.1 x 1.1 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "88423-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: Cubic zirconia.\nNecklace Length: 40 + 5 cm.\nPendant Size: 1.5 x 1.8 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 143 },
  { code: "90272-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Pearl imitation, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 39.5 + 5 cm.\nPendant Size: 0.9 x 0.9 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "91142-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Plastic, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 41 + 5 cm.\nPendant Size: 2.7 x 2 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
  { code: "91369-0", title: 'Necklace, 18K Gold Plated Steel', desc: 'Material: Stainless steel, Gold plating.\nClosure Type: Lobster claw.\nInserts: No.\nNecklace Length: 40 + 5 cm.\nETERNA jewelry is waterproof and hypoallergenic. The plating is long lasting and tarnishing-free.', offer: 99, original: 155 },
];

export const products: Product[] = rawProducts.map((p, i) => {
  const cat = getCategory(p.title);
  return {
    id: `product-${i + 1}`,
    code: p.code,
    title: p.title,
    description: p.desc,
    offerPrice: p.offer,
    originalPrice: p.original,
    category: cat,
    image: `/images/products/${p.code}.jpg`,
  };
});

export const categories: { name: string; slug: ProductCategory; image: string }[] = [
  { name: "Necklaces", slug: "necklaces", image: "/images/cat-necklaces.jpg" },
  { name: "Bracelets", slug: "bracelets", image: "/images/cat-bracelets.jpg" },
  { name: "Earrings", slug: "earrings", image: "/images/cat-earrings.jpg" },
  { name: "Rings", slug: "rings", image: "/images/cat-rings.jpg" },
  { name: "Anklets", slug: "anklets", image: "/images/cat-anklets.jpg" },
  { name: "Chains", slug: "chains", image: "/images/cat-chains.jpg" },
  { name: "Best Sellers", slug: "best-sellers", image: "/images/hero-banner.jpg" },
];

export function getProductsByCategory(cat: ProductCategory): Product[] {
  if (cat === "best-sellers") return products.slice(0, 12);
  return products.filter(p => p.category === cat);
}
