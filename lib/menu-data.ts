import type { Lang } from './i18n/dictionaries'

/*
  Menu data — structured so that prices and descriptions can be updated
  in one place without touching presentation. Dish names are kept in their
  original Italian/Portuguese form (brand language) across all locales.
  Prices are indicative (BRL) and may be outdated; the site always links to
  the official PDF as the source of truth.
*/

export type HouseId = 'trattoria' | 'ristorante' | 'pizzaria'

export type MenuItem = {
  name: string
  desc: Record<Lang, string>
  price: number | null
}

export type MenuCategory = {
  id: string
  label: Record<Lang, string>
  items: MenuItem[]
}

export type House = {
  id: HouseId
  name: string
  kind: Record<Lang, string>
  categories: MenuCategory[]
}

export const houses: House[] = [
  {
    id: 'trattoria',
    name: 'Famiglia Mancini',
    kind: { pt: 'Trattoria', en: 'Trattoria', it: 'Trattoria' },
    categories: [
      {
        id: 'antipasti',
        label: { pt: 'Antipasti', en: 'Antipasti', it: 'Antipasti' },
        items: [
          {
            name: 'Buffet di Antipasti',
            desc: {
              pt: 'A célebre mesa de antepastos da casa, servida à vontade.',
              en: 'The house’s celebrated antipasti table, served at will.',
              it: 'La celebre tavola di antipasti della casa, a volontà.',
            },
            price: 129,
          },
          {
            name: 'Bruschetta al Pomodoro',
            desc: {
              pt: 'Pão italiano, tomate, alho e manjericão fresco.',
              en: 'Italian bread, tomato, garlic and fresh basil.',
              it: 'Pane italiano, pomodoro, aglio e basilico fresco.',
            },
            price: 46,
          },
          {
            name: 'Carpaccio alla Cipriani',
            desc: {
              pt: 'Finas lâminas de filé, molho cipriani, alcaparras e parmesão.',
              en: 'Thin slices of beef, cipriani sauce, capers and parmesan.',
              it: 'Fettine sottili di filetto, salsa cipriani, capperi e parmigiano.',
            },
            price: 79,
          },
        ],
      },
      {
        id: 'massas',
        label: { pt: 'Massas', en: 'Pasta', it: 'Paste' },
        items: [
          {
            name: 'Spaghetti al Pomodoro e Basilico',
            desc: {
              pt: 'Molho de tomate fresco e manjericão.',
              en: 'Fresh tomato sauce and basil.',
              it: 'Salsa di pomodoro fresco e basilico.',
            },
            price: 68,
          },
          {
            name: 'Spaghetti alla Carbonara',
            desc: {
              pt: 'Ovos, guanciale, pecorino e pimenta-do-reino.',
              en: 'Eggs, guanciale, pecorino and black pepper.',
              it: 'Uova, guanciale, pecorino e pepe nero.',
            },
            price: 82,
          },
          {
            name: 'Tagliatelle al Ragù',
            desc: {
              pt: 'Massa fresca ao molho bolonhesa da casa.',
              en: 'Fresh pasta with the house bolognese.',
              it: 'Pasta fresca al ragù della casa.',
            },
            price: 84,
          },
        ],
      },
      {
        id: 'massas-recheadas',
        label: { pt: 'Massas Recheadas', en: 'Filled Pasta', it: 'Paste Ripiene' },
        items: [
          {
            name: 'Cannelloni alla Bolognese',
            desc: {
              pt: 'Recheados com carne e molho bolonhesa gratinados.',
              en: 'Filled with meat and gratinated bolognese.',
              it: 'Ripieni di carne e ragù gratinati.',
            },
            price: 88,
          },
          {
            name: 'Ravioli di Ricotta e Spinaci',
            desc: {
              pt: 'Ravióli de ricota e espinafre ao molho de manteiga e sálvia.',
              en: 'Ricotta and spinach ravioli with butter and sage.',
              it: 'Ravioli di ricotta e spinaci burro e salvia.',
            },
            price: 86,
          },
        ],
      },
      {
        id: 'carnes',
        label: { pt: 'Carnes', en: 'Meat', it: 'Carni' },
        items: [
          {
            name: 'Escalope al Limone',
            desc: {
              pt: 'Escalope de filé ao molho de limão siciliano.',
              en: 'Beef escalope in Sicilian lemon sauce.',
              it: 'Scaloppine al limone di Sicilia.',
            },
            price: 96,
          },
          {
            name: 'Ossobuco alla Milanese',
            desc: {
              pt: 'Ossobuco braseado com risoto milanês ao açafrão.',
              en: 'Braised veal shank with saffron Milanese risotto.',
              it: 'Ossobuco brasato con risotto alla milanese.',
            },
            price: 128,
          },
        ],
      },
      {
        id: 'sobremesas',
        label: { pt: 'Sobremesas', en: 'Desserts', it: 'Dolci' },
        items: [
          {
            name: 'Tiramisù della Casa',
            desc: {
              pt: 'Mascarpone, café e cacau em camadas.',
              en: 'Layers of mascarpone, coffee and cocoa.',
              it: 'Mascarpone, caffè e cacao a strati.',
            },
            price: 42,
          },
          {
            name: 'Panna Cotta ai Frutti Rossi',
            desc: {
              pt: 'Creme cozido com calda de frutas vermelhas.',
              en: 'Cooked cream with red-fruit coulis.',
              it: 'Panna cotta con coulis di frutti rossi.',
            },
            price: 38,
          },
        ],
      },
    ],
  },
  {
    id: 'ristorante',
    name: 'Walter Mancini',
    kind: { pt: 'Il Ristorante', en: 'Il Ristorante', it: 'Il Ristorante' },
    categories: [
      {
        id: 'entradas',
        label: { pt: 'Entradas', en: 'Starters', it: 'Antipasti' },
        items: [
          {
            name: 'Vitello Tonnato',
            desc: {
              pt: 'Vitela em fatias finas ao molho de atum e alcaparras.',
              en: 'Thinly sliced veal in tuna and caper sauce.',
              it: 'Vitello a fette sottili con salsa tonnata e capperi.',
            },
            price: 92,
          },
          {
            name: 'Burrata con Pomodorini',
            desc: {
              pt: 'Burrata cremosa, tomatinhos confitados e manjericão.',
              en: 'Creamy burrata, confit cherry tomatoes and basil.',
              it: 'Burrata cremosa, pomodorini confit e basilico.',
            },
            price: 89,
          },
        ],
      },
      {
        id: 'massas',
        label: { pt: 'Massas', en: 'Pasta', it: 'Paste' },
        items: [
          {
            name: 'Fettuccine al Tartufo',
            desc: {
              pt: 'Fettuccine ao creme de trufas negras.',
              en: 'Fettuccine in black truffle cream.',
              it: 'Fettuccine alla crema di tartufo nero.',
            },
            price: 148,
          },
          {
            name: 'Risotto ai Frutti di Mare',
            desc: {
              pt: 'Risoto de frutos do mar frescos.',
              en: 'Risotto with fresh seafood.',
              it: 'Risotto ai frutti di mare freschi.',
            },
            price: 132,
          },
        ],
      },
      {
        id: 'peixes',
        label: { pt: 'Peixes', en: 'Fish', it: 'Pesce' },
        items: [
          {
            name: 'Branzino al Forno',
            desc: {
              pt: 'Robalo assado com ervas e limão siciliano.',
              en: 'Roasted sea bass with herbs and Sicilian lemon.',
              it: 'Branzino al forno con erbe e limone.',
            },
            price: 156,
          },
          {
            name: 'Salmone alla Griglia',
            desc: {
              pt: 'Salmão grelhado com legumes da estação.',
              en: 'Grilled salmon with seasonal vegetables.',
              it: 'Salmone alla griglia con verdure di stagione.',
            },
            price: 138,
          },
        ],
      },
      {
        id: 'carnes',
        label: { pt: 'Carnes', en: 'Meat', it: 'Carni' },
        items: [
          {
            name: 'Filetto al Barolo',
            desc: {
              pt: 'Filé mignon ao molho de vinho Barolo.',
              en: 'Beef tenderloin in Barolo wine sauce.',
              it: 'Filetto al vino Barolo.',
            },
            price: 164,
          },
          {
            name: 'Costoletta alla Milanese',
            desc: {
              pt: 'Costeleta de vitela empanada, à milanesa.',
              en: 'Breaded veal cutlet, Milanese style.',
              it: 'Costoletta di vitello alla milanese.',
            },
            price: 158,
          },
        ],
      },
      {
        id: 'sobremesas',
        label: { pt: 'Sobremesas', en: 'Desserts', it: 'Dolci' },
        items: [
          {
            name: 'Cannoli Siciliani',
            desc: {
              pt: 'Massa crocante recheada com ricota doce.',
              en: 'Crisp shells filled with sweet ricotta.',
              it: 'Cialde croccanti ripiene di ricotta dolce.',
            },
            price: 44,
          },
          {
            name: 'Affogato al Caffè',
            desc: {
              pt: 'Gelato de creme afogado no espresso.',
              en: 'Cream gelato drowned in espresso.',
              it: 'Gelato alla crema affogato nell’espresso.',
            },
            price: 36,
          },
        ],
      },
    ],
  },
  {
    id: 'pizzaria',
    name: 'Famiglia Mancini',
    kind: { pt: 'Pizzaria', en: 'Pizzaria', it: 'Pizzeria' },
    categories: [
      {
        id: 'pizzas',
        label: { pt: 'Pizzas', en: 'Pizzas', it: 'Pizze' },
        items: [
          {
            name: 'Margherita',
            desc: {
              pt: 'Molho de tomate, mozzarella e manjericão fresco.',
              en: 'Tomato sauce, mozzarella and fresh basil.',
              it: 'Salsa di pomodoro, mozzarella e basilico fresco.',
            },
            price: 72,
          },
          {
            name: 'Diavola',
            desc: {
              pt: 'Mozzarella e salame picante calabrês.',
              en: 'Mozzarella and spicy salami.',
              it: 'Mozzarella e salame piccante.',
            },
            price: 84,
          },
          {
            name: 'Quattro Formaggi',
            desc: {
              pt: 'Mozzarella, gorgonzola, provolone e parmesão.',
              en: 'Mozzarella, gorgonzola, provolone and parmesan.',
              it: 'Mozzarella, gorgonzola, provolone e parmigiano.',
            },
            price: 88,
          },
          {
            name: 'Prosciutto e Rucola',
            desc: {
              pt: 'Presunto de parma, rúcula e lascas de parmesão.',
              en: 'Parma ham, arugula and parmesan shavings.',
              it: 'Prosciutto di Parma, rucola e scaglie di parmigiano.',
            },
            price: 96,
          },
        ],
      },
      {
        id: 'massas',
        label: { pt: 'Massas', en: 'Pasta', it: 'Paste' },
        items: [
          {
            name: 'Penne all’Arrabbiata',
            desc: {
              pt: 'Molho de tomate picante com alho.',
              en: 'Spicy tomato sauce with garlic.',
              it: 'Salsa di pomodoro piccante con aglio.',
            },
            price: 64,
          },
          {
            name: 'Lasagna alla Bolognese',
            desc: {
              pt: 'Lasanha ao ragù e bechamel gratinada.',
              en: 'Lasagna with ragù and béchamel, gratinated.',
              it: 'Lasagna al ragù e besciamella gratinata.',
            },
            price: 78,
          },
        ],
      },
      {
        id: 'sobremesas',
        label: { pt: 'Sobremesas', en: 'Desserts', it: 'Dolci' },
        items: [
          {
            name: 'Pizza Doce di Nutella',
            desc: {
              pt: 'Pizza doce com creme de avelã e açúcar de confeiteiro.',
              en: 'Sweet pizza with hazelnut cream and icing sugar.',
              it: 'Pizza dolce con crema di nocciola e zucchero a velo.',
            },
            price: 68,
          },
          {
            name: 'Tiramisù della Casa',
            desc: {
              pt: 'Mascarpone, café e cacau em camadas.',
              en: 'Layers of mascarpone, coffee and cocoa.',
              it: 'Mascarpone, caffè e cacao a strati.',
            },
            price: 42,
          },
        ],
      },
      {
        id: 'bebidas',
        label: { pt: 'Bebidas', en: 'Drinks', it: 'Bevande' },
        items: [
          {
            name: 'Aperol Spritz',
            desc: {
              pt: 'Aperol, prosecco e água com gás.',
              en: 'Aperol, prosecco and soda.',
              it: 'Aperol, prosecco e soda.',
            },
            price: 42,
          },
          {
            name: 'Negroni',
            desc: {
              pt: 'Gin, vermute rosso e bitter.',
              en: 'Gin, sweet vermouth and bitter.',
              it: 'Gin, vermut rosso e bitter.',
            },
            price: 46,
          },
        ],
      },
    ],
  },
]

export const PDF_URL = 'https://cdn.me-qr.com/pdf/12607404.pdf?time=1712578858'

export function formatBRL(value: number | null): string {
  if (value == null) return ''
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(value)
}
